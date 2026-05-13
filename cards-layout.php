<?php
/**
 * Plugin Name: Cards Layout
 * Description: Build responsive, customizable card components with multiple layouts and dynamic styles in the Gutenberg editor.
 * Version: 2.0.2
 * Author: bPlugins
 * Author URI: http://bplugins.com
 * Tested up to: 6.9
 * Stable tag: 2.0.2
 * Requires at least: 6.5
 * Requires PHP: 7.4
 * License: GPLv3 or later
 * License URI: https://www.gnu.org/licenses/gpl-3.0.html
 * Text Domain: cards-layout
 * Domain Path: /languages
 */



// ABS PATH
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}


if (function_exists('phclb_cl_fs')) {
	phclb_cl_fs()->set_basename(true, __FILE__);
} else {



	$PHCLB_http_host = isset($_SERVER['HTTP_HOST'])
		? sanitize_text_field(wp_unslash($_SERVER['HTTP_HOST']))
		: '';

	define('PHCLB_VERSION',('localhost' === $PHCLB_http_host || 'plugins.local' === $PHCLB_http_host)? time(): '2.0.2');

	define('PHCLB_DIR_URL', plugin_dir_url(__FILE__));
	define('PHCLB_DIR_PATH', plugin_dir_path(__FILE__));
	define('PHCLB_PLUGIN_FILE', __FILE__);


		if (!function_exists('phclb_cl_fs')) {

		function  phclb_cl_fs()
		{
			global $phclb_cl_fs;

			if (! isset($phclb_cl_fs)) {
				$fsLitePath = PHCLB_DIR_PATH . 'vendor/freemius-lite/start.php';
				require_once $fsLitePath;

				$config =  array(
				'id'                  => '27207',
                'slug'                => 'cards-layout',
                'premium_slug'        => 'cards-layout-pro',
                'type'                => 'plugin',
                'public_key'          => 'pk_3498117315f221ea381495c9c0a7f',
                'menu'                => array(
                    'slug'           => 'edit.php?post_type=cards-layout',
                    'first-path'     => 'edit.php?post_type=cards-layout&page=demo_page#/welcome',
                    'support'        => false,
                ),
				);

				$phclb_cl_fs = fs_lite_dynamic_init($config);
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
	new PHCLBPlugin();



}
