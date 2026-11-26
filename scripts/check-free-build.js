#!/usr/bin/env node
/**
 * Release check for the free plugin (the version that goes to WordPress.org).
 *
 * Fails, naming every problem, if the free plugin would ship Pro layout code, locked controls,
 * license code, a development build, editor packages on the front end, or hotlinked images.
 * WordPress.org has already closed the plugin once for locked Pro code; this keeps it from
 * happening again.
 *
 * Usage:
 *   npm run check:free                              checks build/ (after `npm run build`)
 *   npm run check:free -- path/to/cards-layout.zip  checks the free zip Freemius generates
 *   npm run check:free -- path/to/cards-layout      same, for an unzipped plugin folder, or for
 *                                                   the free source export (npm run export:free)
 *
 * In zip/folder mode it also checks that Freemius applied the @fs_* directives: no Pro SDK,
 * no license activation file, no build-pro/, no src/pro/, no license check left in the PHP.
 * Folders are read without node_modules/, .git/, dist/ and scripts/ (tooling, never shipped).
 */
/* eslint-disable no-console -- command-line tool: output is the point */
const fs = require("fs");
const path = require("path");

const target = path.resolve(process.argv[2] || "build");

// ---------------------------------------------------------------------------------------------
// Load files: { "relative/path": Buffer }
// ---------------------------------------------------------------------------------------------
const TEXT = /\.(js|css|php|json|txt|md)$/i;

const SKIP_DIRS = new Set(["node_modules", ".git", "dist", "scripts"]);

const loadDir = (dir) => {
  const files = {};
  const walk = (d) => {
    for (const entry of fs.readdirSync(d, { withFileTypes: true })) {
      const full = path.join(d, entry.name);
      if (entry.isDirectory()) {
        if (!SKIP_DIRS.has(entry.name)) walk(full);
      }
      else files[path.relative(dir, full).split(path.sep).join("/")] = fs.readFileSync(full);
    }
  };
  walk(dir);
  return files;
};

const loadZip = (file) => {
  const AdmZip = require("adm-zip"); // ships with @wordpress/scripts (used by plugin-zip)
  const entries = new AdmZip(file).getEntries().filter((e) => !e.isDirectory);
  const files = {};
  entries.forEach((e) => (files[e.entryName] = e.getData()));
  // Drop a shared top-level folder such as "cards-layout/".
  const tops = new Set(Object.keys(files).map((p) => p.split("/")[0]));
  if (tops.size === 1 && Object.keys(files).every((p) => p.includes("/"))) {
    const top = [...tops][0] + "/";
    return Object.fromEntries(Object.entries(files).map(([p, b]) => [p.slice(top.length), b]));
  }
  return files;
};

if (!fs.existsSync(target)) {
  console.error(`check:free: ${target} does not exist. Run \`npm run build\` first, or pass a zip/folder.`);
  process.exit(1);
}
const files = /\.zip$/i.test(target) ? loadZip(target) : loadDir(target);
const isPlugin = "cards-layout.php" in files;
const buildPrefix = isPlugin ? "build/" : "";
const text = (p) => files[p].toString("utf8");
const inBuild = (p) => p.startsWith(buildPrefix) && TEXT.test(p);

// ---------------------------------------------------------------------------------------------
// Rules
// ---------------------------------------------------------------------------------------------
const problems = [];
const fail = (rule, detail) => problems.push({ rule, detail });
const snippet = (content, index, len) => content.slice(Math.max(0, index - 40), index + len + 40).replace(/\s+/g, " ");

// PHP code without comments, so a docblock that mentions a function doesn't count as a call.
const phpCode = (src) => src.replace(/\/\*[\s\S]*?\*\//g, "").replace(/(^|[^:"'])\/\/.*$/gm, "$1").replace(/^\s*#.*$/gm, "");

const scan = (rule, pathFilter, patterns, prepare = (s) => s) => {
  for (const p of Object.keys(files).filter(pathFilter)) {
    const content = prepare(text(p));
    for (const pattern of patterns) {
      const re = new RegExp(pattern.source, "g" + pattern.flags.replace("g", ""));
      const m = re.exec(content);
      if (m) fail(rule, `${p}: "${m[0]}" …${snippet(content, m.index, m[0].length)}…`);
    }
  }
};
const literal = (s) => new RegExp(s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));

// 1. The build is complete.
for (const f of ["block.json", "index.js", "index.asset.php", "view.js", "view.asset.php", "render.php"]) {
  if (!(buildPrefix + f in files)) fail("Build is incomplete", `${buildPrefix}${f} is missing`);
}

// 2. It is a production free build (not `npm start` output, not built without the flag).
scan("Not a production free build", (p) => inBuild(p) && p.endsWith(".js"), [
  /\bPHCLB_PRO\b/, // the flag must be replaced at build time
  /\/\*{3,}\/ \(\(\) => \{ \/\/ webpackBootstrap/, // development (unminified) bundle
]);

// 3. The front end loads only what it needs (no editor packages on visitors' pages).
const viewAsset = buildPrefix + "view.asset.php";
if (viewAsset in files) {
  const depList = (text(viewAsset).match(/'dependencies' => array\(([^)]*)\)/) || ["", ""])[1];
  const deps = depList.match(/'([^']+)'/g) || [];
  const extra = deps.map((d) => d.slice(1, -1)).filter((d) => !["react", "react-dom", "wp-i18n"].includes(d));
  if (extra.length) fail("Front end loads editor packages", `${viewAsset} depends on ${extra.join(", ")}`);
}

// 4. No Pro layout code (CSS classes only Pro layouts use) in the block scripts and styles.
scan("Pro layout code in the free build", (p) => inBuild(p) && /(^|\/)(index|view)\.(js|css)$/.test(p), [
  /\b(stat-card|banner-card|banner-eyebrow|skills-card|progress-card|client-logo-card|creative-curve-card|stacked-card|stacked-halo|stacked-media)\b/,
  /\bas-(wrapper|card-[a-z]+)\b/,
  /--phclb-stack-/,
]);

// 5. Nothing locked: no Pro-locked controls, lock overlay or "About Pro" lock modal.
scan("Locked / gated UI in the free build", inBuild, [
  literal("bplProIdentifier"),
  literal("Pro Required"),
  literal("phclbLockedOverlay"),
  literal("phclb-locked"),
  literal("bplAboutProModal"),
]);

// 5b. Source (free source export): no locked Pro controls or Pro lock modal imported.
scan("Locked / gated UI in the free source", (p) => p.startsWith("src/") && /\.(js|jsx)$/.test(p), [
  /\bBControlPro\b/,
  /\bAboutProModal\b/,
]);

// 6. No license code.
scan("License code in the free build", (p) => TEXT.test(p) && !p.startsWith("vendor/freemius-lite/"), [
  /\b(activate|deactivate)_license\b/,
  /get_license_status/,
  literal("license isn't active"),
  literal("Activate your license"),
  literal("#/activation"),
]);

// 7. No hotlinked placeholder images.
scan("Hotlinked images", (p) => TEXT.test(p), [literal("i.ibb.co")]);

// 8. Zip/folder only: Freemius applied the free-version directives.
if (isPlugin) {
  const has = (prefix) => Object.keys(files).some((p) => p === prefix || p.startsWith(prefix));
  for (const p of ["vendor/freemius/", "includes/LicenseActivation.php", "build-pro/", "src/pro/"]) {
    if (has(p)) fail("Pro-only files in the free plugin", `${p} should have been removed (@fs_premium_only, Pro-only source)`);
  }
  for (const p of ["vendor/freemius-lite/start.php", "uninstall.php", "cards-layout-block.php"]) {
    if (!has(p)) fail("Free plugin is missing files", `${p} is missing`);
  }
  scan("License check left in the PHP", (p) => p.endsWith(".php") && !p.startsWith("vendor/"), [
    /can_use_premium_code/,
    /is__premium_only\s*\(/, // Freemius removes these blocks from the free version
  ], phpCode);
  if ("uninstall.php" in files && /wp_delete_post/.test(text("uninstall.php"))) {
    fail("Uninstall deletes user content", "uninstall.php deletes posts (saved shortcode cards are shared with Pro)");
  }
}

// ---------------------------------------------------------------------------------------------
// Report
// ---------------------------------------------------------------------------------------------
const label = path.relative(process.cwd(), target) || target;
const checked = Object.keys(files).filter((p) => TEXT.test(p)).length;
if (!problems.length) {
  console.log(`✔ check:free passed: ${label} (${isPlugin ? "plugin" : "build"}, ${checked} text files checked)`);
  process.exit(0);
}
console.error(`✖ check:free failed: ${label}\n`);
const byRule = problems.reduce((m, p) => m.set(p.rule, [...(m.get(p.rule) || []), p.detail]), new Map());
for (const [rule, details] of byRule) {
  console.error(`  ${rule}`);
  details.slice(0, 8).forEach((d) => console.error(`    - ${d}`));
  if (details.length > 8) console.error(`    … and ${details.length - 8} more`);
}
console.error("\nThe free plugin must not ship any of the above (see scripts/check-free-build.js).");
process.exit(1);
