const fs = require("fs");
const path = require("path");
const webpack = require("webpack");
const defaultConfig = require("@wordpress/scripts/config/webpack.config");
const ESLintPlugin = require("eslint-webpack-plugin");

const plugins = defaultConfig.plugins.filter((p) => {
	if (
		Object.values(p).length === 2 &&
		Object.values(p)?.[1]["filename"] &&
		Object.values(p)?.[1]["filename"] === "[name]-rtl.css"
	) {
		return false;
	}
	return true;
});

/**
 * Free and Pro are built from the same source.
 *
 * - `npm run build:free` → build/      PHCLB_PRO = false
 * - `npm run build:pro`  → build-pro/  PHCLB_PRO = true  (wp-scripts build --env=pro)
 *
 * Pro-only code lives in src/pro/ and is only reached through `PHCLB_PRO ? require(...) : ...`.
 * With the flag false, webpack drops those branches before resolving them, so no Pro layout,
 * panel, preset or style ends up in the free build. Freemius then keeps build/ in the free zip
 * and build-pro/ in the Pro zip (see the @fs_* directives in cards-layout.php).
 */
/**
 * scripts/export-free.js sets PHCLB_SOURCE_LIST to a file path: the build then writes every file it
 * read to that file (JSON), which is exactly the source the free plugin needs.
 */
class RecordSourceFiles {
	constructor(file) {
		this.file = file;
	}

	apply(compiler) {
		compiler.hooks.done.tap("RecordSourceFiles", (stats) => {
			fs.writeFileSync(this.file, JSON.stringify([...stats.compilation.fileDependencies]));
		});
	}
}

module.exports = (env = {}) => {
	const isPro = !!env.pro;

	return {
		...defaultConfig,
		entry: {
			...defaultConfig.entry(),
			"admin-dashboard": "./src/bplugins-admin/dashboard.js",
			"admin-post": "./src/bplugins-admin/post.js",
		},
		output: {
			...defaultConfig.output,
			path: path.resolve(__dirname, isPro ? "build-pro" : "build"),
		},
		plugins: [
			...plugins,
			new ESLintPlugin(),
			new webpack.DefinePlugin({ PHCLB_PRO: JSON.stringify(isPro) }),
			...(process.env.PHCLB_SOURCE_LIST ? [new RecordSourceFiles(process.env.PHCLB_SOURCE_LIST)] : []),
		],
		optimization: {},
	};
};
