const defaultConfig = require("@wordpress/scripts/config/webpack.config");
const ESLintPlugin = require("eslint-webpack-plugin");

class AbspathPlugin {
	apply(compiler) {
		compiler.hooks.emit.tap('AbspathPlugin', (compilation) => {
			for (const filename in compilation.assets) {
				if (filename.endsWith('.asset.php')) {
					let source = compilation.assets[filename].source();
					if (typeof source !== 'string') {
						source = source.toString('utf-8');
					}
					if (!source.includes('ABSPATH')) {
						source = source.replace('<?php ', '<?php if (!defined("ABSPATH")) exit; ');
						compilation.assets[filename] = {
							source: () => source,
							size: () => source.length,
						};
					}
				}
			}
		});
	}
}

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

module.exports = {
	...defaultConfig,
	entry: {
		...defaultConfig.entry(),
		"admin-dashboard": "./src/bplugins-admin/dashboard.js",
		"admin-post": "./src/bplugins-admin/post.js",
	},
	plugins: [...plugins, new ESLintPlugin(), new AbspathPlugin()],
	optimization: {},
};
