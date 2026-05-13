<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Filter attributes to only include free-only keys for the frontend.
 * This prevents Pro-only configuration from being exposed in the page source.
 */
$phclb_free_attrs = [
	'align',
	'cards',
	'cardsLayout',
	'isContent',
	'cardTag',
	'cardStyle',
	'baseCard',
	'iconWrap',
	'img',
	'title',
	'desc',
	'btn',
	'eyeBrow',
	'achievement',
	'columns',
	'columnGap',
	'rowGap',
	'layout',
	'alignment',
	'typography',
	'colors',
	'separator',
	'padding',
	'margin',
	'border',
	'shadow',
	'heroFeatureCardEle',
];
$phclb_safe = array_intersect_key( $attributes, array_flip( $phclb_free_attrs ) );

// Filter out Pro keys from individual card objects
if ( isset( $phclb_safe['cards'] ) && is_array( $phclb_safe['cards'] ) ) {
	$phclb_pro_card_keys = [ 'sparkLines', 'skills', 'scTrend', 'stateValue' ];
	foreach ( $phclb_safe['cards'] as &$phclb_card ) {
		foreach ( $phclb_pro_card_keys as $phclb_pro_key ) {
			if ( isset( $phclb_card[ $phclb_pro_key ] ) ) {
				unset( $phclb_card[ $phclb_pro_key ] );
			}
		}
	}
	unset( $phclb_card );
}

$id         = wp_unique_id( 'phclbCardsBlocks-' );
$PHCLB_json = wp_json_encode( $phclb_safe );
?>
<div <?php echo wp_kses_post( get_block_wrapper_attributes() ); ?>
	id='<?php echo esc_attr( $id ); ?>'
	data-attributes='<?php echo esc_attr( $PHCLB_json ); ?>'>
</div>