/**
 * The edits Freemius makes when it generates the free version, shared by make-zip.js (release
 * zips) and export-free.js (the free plugin's source repository), so both produce the same code.
 */
const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const mainFile = fs.readFileSync(path.join(root, "cards-layout.php"), "utf8");

/** Paths in a Freemius header directive, e.g. "@fs_premium_only /vendor/freemius, /build-pro". */
const directive = (name) =>
  ((mainFile.match(new RegExp(`@${name}\\s+([^\\r\\n]+)`)) || [])[1] || "")
    .split(",").map((s) => s.trim().replace(/^\//, "")).filter(Boolean);

/** Removes every `if ( phclb_cl_fs()->is__premium_only() ) { … }` block, braces matched. */
const stripPremiumOnly = (php) => {
  const re = /if\s*\(\s*[\w$]+\(\)->is__premium_only\(\)\s*\)\s*\{/g;
  let out = php;
  let m;
  while ((m = re.exec(out))) {
    let depth = 0;
    let end = m.index + m[0].length - 1;
    for (; end < out.length; end++) {
      if (out[end] === "{") depth++;
      else if (out[end] === "}" && --depth === 0) break;
    }
    out = out.slice(0, m.index) + out.slice(end + 1);
    re.lastIndex = m.index;
  }
  return out;
};

/**
 * The free version of one plugin file (path relative to the plugin root). Only the plugin's own
 * PHP changes; vendor code and build output are returned as they are.
 */
const toFreeVersion = (rel, buffer) => {
  if (!rel.endsWith(".php") || rel.startsWith("vendor/") || /^build(-pro)?\//.test(rel)) return buffer;
  let php = stripPremiumOnly(buffer.toString("utf8"));
  if (rel === "cards-layout.php") {
    php = php
      .replace(/('is_premium'\s*=>\s*)true/, "$1false")
      // When Pro is active too, the free copy registers itself as the free version.
      .replace(/(->set_basename\(\s*)true\b/, "$1false");
  }
  return Buffer.from(php);
};

module.exports = { root, mainFile, directive, stripPremiumOnly, toFreeVersion };
