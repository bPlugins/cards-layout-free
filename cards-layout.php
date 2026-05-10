<?php
/**
 * Plugin Name: Cards Layout
 * Description: This plugin offers multiple customizable layouts like grid, list, and carousel, making content display easy and flexible.
 * Version: 2.0.2
 * Author: bPlugins
 * Author URI: http://bplugins.com
 * Tested up to: 6.7
 * Stable tag: 2.0.2
 * Requires at least: 6.5
 * License: GPLv3
 * License URI: https://www.gnu.org/licenses/gpl-3.0.txt
 * Text Domain: cards-layout
 */



// ABS PATH
if (!defined('ABSPATH')) {
	exit;
}


if (function_exists('cl_fs')) {
	cl_fs()->set_basename(true, __FILE__);
} else {



	$http_host = isset($_SERVER['HTTP_HOST'])
		? sanitize_text_field(wp_unslash($_SERVER['HTTP_HOST']))
		: '';

	define('PHCLB_VERSION',('localhost' === $http_host || 'plugins.local' === $http_host)? time(): '2.0.2');

	define('PHCLB_DIR_URL', plugin_dir_url(__FILE__));
	define('PHCLB_DIR_PATH', plugin_dir_path(__FILE__));
	define('PHCLB_PLUGIN_FILE', __FILE__);


		if (!function_exists('cl_fs')) {

		function  cl_fs()
		{
			global $cl_fs;

			if (! isset($cl_fs)) {
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

				$cl_fs = fs_lite_dynamic_init($config);
			}

			return $cl_fs;
		}

		// Init Freemius.
		cl_fs();
		// Signal that SDK was initiated.
		do_action('cl_fs_loaded');
	}

	// ... Your plugin's main file logic ...
	require_once PHCLB_DIR_PATH . "includes/class-phclbPlugin.php";
	new PHCLBPlugin();



}
