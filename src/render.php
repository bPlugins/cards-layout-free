<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
$id   = wp_unique_id( 'phclbCardsBlocks-' );
$json = wp_json_encode( $attributes );
?>
<div <?php echo wp_kses_post( get_block_wrapper_attributes() ); ?>
	id='<?php echo esc_attr( $id ); ?>'
	data-attributes='<?php echo esc_attr( $json ); ?>'>
</div>