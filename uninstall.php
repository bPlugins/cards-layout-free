<?php
/**
 * Runs when Cards Layout is deleted from the Plugins screen.
 *
 * Uninstalling deliberately keeps everything users created:
 * - Saved shortcode cards ("cards-layout" posts) are user content, and Cards Layout Pro uses the
 *   same post type. Deleting them here would wipe a Pro user's cards when they remove the old
 *   free plugin, and every page using those shortcodes would go blank.
 * - Card blocks are stored inside posts and pages, so they are never touched.
 * - The plugin stores no settings of its own, so there is nothing else to clean up.
 *
 * Keep this file even though it removes nothing. When it is missing, WordPress runs any uninstall
 * hook the plugin registered instead; Freemius Lite SDK 2.1.3, used until 2.0.4, registered one
 * that caused a fatal error on PHP 8.
 *
 * If a cleanup option is ever added, it must be something the user turns on themselves, and it
 * must never delete the "cards-layout" posts while Cards Layout Pro is installed.
 *
 * @package Cards_Layout
 */

// Only run when WordPress is uninstalling the plugin.
if ( ! defined( 'WP_UNINSTALL_PLUGIN' ) ) {
	exit;
}
