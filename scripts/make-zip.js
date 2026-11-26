#!/usr/bin/env node
/**
 * Builds a release zip for the free plugin or for Cards Layout Pro.
 *
 *   npm run zip:free   dist/cards-layout.zip       free plugin, ready for WordPress.org
 *   npm run zip:pro    dist/cards-layout-pro.zip   Cards Layout Pro
 *
 * - Builds in its own staging folder (dist/.stage), so a running `npm start` watcher can't put a
 *   development build into a release zip.
 * - Picks files with the same rules Freemius uses: the @fs_premium_only / @fs_free_only lines in
 *   the cards-layout.php header.
 * - Free zip: removes `if ( phclb_cl_fs()->is__premium_only() ) { … }` blocks from the plugin's PHP and
 *   sets 'is_premium' and set_basename()'s first argument to false, as Freemius does for the
 *   free version, then runs check:free on
 *   the zip and fails if it doesn't pass.
 * - Pro zip: checks that it is a production build and contains the Pro SDK and license file.
 */
/* eslint-disable no-console -- command-line tool: output is the point */
const fs = require("fs");
const path = require("path");
const { spawnSync } = require("child_process");
const AdmZip = require("adm-zip"); // ships with @wordpress/scripts (used by plugin-zip)
const { root, mainFile, directive, toFreeVersion } = require("./free-version");

const edition = process.argv[2];
if (!["free", "pro"].includes(edition)) {
  console.error("Usage: node scripts/make-zip.js free|pro");
  process.exit(1);
}
const isPro = edition === "pro";
const pkg = JSON.parse(fs.readFileSync(path.join(root, "package.json"), "utf8"));
const version = (mainFile.match(/^\s*\*\s*Version:\s*(\S+)/m) || [])[1] || "unknown";

const premiumOnly = directive("fs_premium_only");
const freeOnly = directive("fs_free_only");
const excluded = isPro ? freeOnly : premiumOnly;
const buildDirName = isPro ? "build-pro" : "build";

// ---------------------------------------------------------------------------------------------
// 1. Build into a staging folder.
// ---------------------------------------------------------------------------------------------
const stage = path.join(root, "dist", ".stage", edition);
const stagedBuild = path.join(stage, buildDirName);
fs.rmSync(stage, { recursive: true, force: true });
console.log(`Building ${isPro ? "Cards Layout Pro" : "the free plugin"} ${version}…`);
const wpScripts = path.join(root, "node_modules", "@wordpress", "scripts", "bin", "wp-scripts.js");
const built = spawnSync(
  process.execPath,
  [wpScripts, "build", "--webpack-copy-php", ...(isPro ? ["--env=pro"] : []), `--output-path=${stagedBuild}`],
  { cwd: root, stdio: ["ignore", "ignore", "inherit"] },
);
if (built.status !== 0 || !fs.existsSync(path.join(stagedBuild, "index.js"))) {
  console.error("✖ Build failed.");
  process.exit(1);
}

// ---------------------------------------------------------------------------------------------
// 2. Collect files.
// ---------------------------------------------------------------------------------------------
const JUNK = /(^|\/)(\.DS_Store|Thumbs\.db)$|\.map$/;
const isExcluded = (rel) => excluded.some((p) => rel === p || rel.startsWith(p.replace(/\/?$/, "/")));
const walk = (dir, base) => fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
  const full = path.join(dir, e.name);
  return e.isDirectory() ? walk(full, base) : [path.relative(base, full).split(path.sep).join("/")];
});

const sources = []; // [relative path in zip, absolute source path]
for (const entry of pkg.files) {
  const rel = entry.replace(/\/$/, "");
  if (rel === "build" || rel === "build-pro") continue; // the staged build is added below
  const abs = path.join(root, rel);
  if (!fs.existsSync(abs) || isExcluded(rel)) continue;
  const list = fs.statSync(abs).isDirectory() ? walk(abs, root) : [rel];
  list.filter((f) => !isExcluded(f) && !JUNK.test(f)).forEach((f) => sources.push([f, path.join(root, f)]));
}
walk(stagedBuild, stagedBuild).filter((f) => !JUNK.test(f)).forEach((f) => sources.push([`${buildDirName}/${f}`, path.join(stagedBuild, f)]));

// ---------------------------------------------------------------------------------------------
// 3. Free-version transforms (what Freemius does when it generates the free version).
// ---------------------------------------------------------------------------------------------
const transform = (rel, buffer) => (isPro ? buffer : toFreeVersion(rel, buffer));

// ---------------------------------------------------------------------------------------------
// 4. Write the zip.
// ---------------------------------------------------------------------------------------------
const folder = isPro ? "cards-layout-pro" : "cards-layout";
const zipPath = path.join(root, "dist", `${folder}.zip`);
const zip = new AdmZip();
sources.forEach(([rel, abs]) => zip.addFile(`${folder}/${rel}`, transform(rel, fs.readFileSync(abs))));
fs.mkdirSync(path.dirname(zipPath), { recursive: true });
zip.writeZip(zipPath);
fs.rmSync(path.join(root, "dist", ".stage"), { recursive: true, force: true });
const relZip = path.relative(root, zipPath);
console.log(`Wrote ${relZip} (${sources.length} files, ${(fs.statSync(zipPath).size / 1024 / 1024).toFixed(2)} MB)`);

// ---------------------------------------------------------------------------------------------
// 5. Verify.
// ---------------------------------------------------------------------------------------------
if (!isPro) {
  const check = spawnSync(process.execPath, [path.join(__dirname, "check-free-build.js"), zipPath], { cwd: root, stdio: "inherit" });
  process.exit(check.status);
}

const names = new Set(sources.map(([rel]) => rel));
const problems = [];
for (const required of ["vendor/freemius/start.php", "includes/LicenseActivation.php", "build-pro/index.js", "build-pro/view.js"]) {
  if (!names.has(required)) problems.push(`${required} is missing`);
}
for (const p of freeOnly) if ([...names].some((n) => n === p || n.startsWith(`${p}/`))) problems.push(`${p} is free-only but was included`);
if (/\/\*{3,}\/ \(\(\) => \{ \/\/ webpackBootstrap/.test(zip.readAsText(`${folder}/build-pro/index.js`))) {
  problems.push("build-pro/index.js is a development build");
}
if (problems.length) {
  console.error(`✖ ${relZip} is not a valid Pro release:\n${problems.map((p) => `  - ${p}`).join("\n")}`);
  process.exit(1);
}
console.log(`✔ ${relZip}: production build, Pro SDK and license file included, free-only files excluded.`);
