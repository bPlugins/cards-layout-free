<?php
/**
 * Plugin Name: Cards Layout
 * Description: Responsive card grids for features, services, team members and stats.
 * Version: 2.0.4
 * Author: bPlugins
 * Author URI: http://bplugins.com
 * Stable tag: 2.0.4
 * Requires at least: 6.5
 * Requires PHP: 7.4
 * License: GPLv3 or later
 * License URI: https://www.gnu.org/licenses/gpl-3.0.html
 * Text Domain: cards-layout
 * @fs_premium_only /vendor/freemius, /includes/LicenseActivation.php, /build-pro
 * @fs_free_only /vendor/freemius-lite, /uninstall.php, /build
 */



// ABS PATH
if (!defined('ABSPATH')) {
	exit;
}


if (function_exists('phclb_cl_fs')) {
	phclb_cl_fs()->set_basename(false, __FILE__);
} else {
	// Constant
	$phclb_http_host = isset($_SERVER['HTTP_HOST']) ? sanitize_text_field(wp_unslash($_SERVER['HTTP_HOST'])) : '';
	define('PHCLB_VERSION', ('localhost' === $phclb_http_host || 'plugins.local' === $phclb_http_host) ? time() : '2.0.4');
	define('PHCLB_DIR_URL', plugin_dir_url(__FILE__));
	define('PHCLB_DIR_PATH', plugin_dir_path(__FILE__));
	define('PHCLB_HAS_PRO', file_exists(PHCLB_DIR_PATH . 'vendor/freemius/start.php'));
	// Free and Pro scripts are built into separate folders, and each zip ships only its own
	// (see webpack.config.js and the @fs_* directives above).
	define('PHCLB_BUILD_DIR', is_dir(PHCLB_DIR_PATH . 'build-pro') ? 'build-pro' : 'build');


	if (! function_exists('phclb_cl_fs')) {

		function  phclb_cl_fs()
		{
			global $phclb_cl_fs;

			if (! isset($phclb_cl_fs)) {
				$fsLitePath = PHCLB_DIR_PATH . 'vendor/freemius-lite/start.php';
				$fsPath = PHCLB_DIR_PATH . 'vendor/freemius/start.php';
				if (PHCLB_HAS_PRO) {
					require_once $fsPath;
				} else {
					require_once $fsLitePath;
				}

				$config =  array(
			    'id'                  => '27207',
                'slug'                => 'cards-layout',
                'premium_slug'        => 'cards-layout-pro',
                'type'                => 'plugin',
                'public_key'          => 'pk_3498117315f221ea381495c9c0a7f',
                'is_premium'          => false,
                'premium_suffix'      => 'pro',
                // If your plugin is a serviceware, set this option to false.
                'has_premium_version' => true,
                'has_addons'          => false,
                'has_paid_plans'      => true,
                'is_org_compliant'    => true,
                // Automatically removed in the free version. If you're not using the
                // auto-generated free version, delete this line before uploading to wp.org.
                'menu'                => array(
                    'slug'           => 'edit.php?post_type=cards-layout',
                    'first-path'     => 'edit.php?post_type=cards-layout&page=demo_page#/welcome',
                    'support'        => false,
                ),
				);

				$phclb_cl_fs = PHCLB_HAS_PRO && file_exists($fsPath) ? fs_dynamic_init($config) : fs_lite_dynamic_init($config);
			}

			return $phclb_cl_fs;
		}

		// Init Freemius.
		phclb_cl_fs();
		// Signal that SDK was initiated.
		do_action('phclb_cl_fs_loaded');
	}

	// ... Your plugin's main file logic ...
	require_once PHCLB_DIR_PATH . "includes/class-phclbPlugin.php";
	new PHCLBPlugin;

	// Cards Layout Pro only: the license screen. The free version has this block removed.
	
}
