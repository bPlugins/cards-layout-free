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

$PHCLB_cards = get_posts(
	array(
		'post_type'      => 'cards-layout',
		'post_status'    => 'any',
		'numberposts'    => -1,
		'fields'         => 'ids',
	)
);

if ( ! empty( $PHCLB_cards ) ) {
	foreach ( $PHCLB_cards as $PHCLB_card_id ) {
		wp_delete_post( $PHCLB_card_id, true );
	}
}

// Freemius handles its own cleanup if the SDK is used correctly.
// No other options or custom tables found in the plugin.
