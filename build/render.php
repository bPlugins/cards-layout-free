<?php
if ( !defined( 'ABSPATH' ) ) { exit; }
$id = wp_unique_id( 'phclbCardsBlocks-' );
$phclb_is_premium = function_exists('phclbIsPremium') ? phclbIsPremium() : false;
?>
<div <?php echo wp_kses_post( get_block_wrapper_attributes() ); ?> 
    id='<?php echo esc_attr( $id ); ?>' 
    data-attributes='<?php echo esc_attr( wp_json_encode( $attributes ) ); ?>'
    data-is-premium='<?php echo esc_attr( wp_json_encode( $phclb_is_premium ) ); ?>'>
</div>
