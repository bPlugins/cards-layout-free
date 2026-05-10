<?php
/**
 * Fired when the plugin is uninstalled.
 *
 * @link       http://bplugins.com
 * @since      1.0.0
 *
 * @package    Cards_Layout
 */

// If uninstall not called from WordPress, then exit.
if ( ! defined( 'WP_UNINSTALL_PLUGIN' ) ) {
	exit;
}

/**
 * Cleanup logic:
 * 1. Delete all 'cards-layout' custom posts.
 */

$cards = get_posts(
	array(
		'post_type'      => 'cards-layout',
		'post_status'    => 'any',
		'numberposts'    => -1,
		'fields'         => 'ids',
	)
);

if ( ! empty( $cards ) ) {
	foreach ( $cards as $card_id ) {
		wp_delete_post( $card_id, true );
	}
}

// Freemius handles its own cleanup if the SDK is used correctly.
// No other options or custom tables found in the plugin.
