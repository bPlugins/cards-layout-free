<?php

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block registration handler for Cards Layout.
 *
 * @package CardsLayout
 */
if ( ! class_exists( 'PHCLBBlock' ) ) {
	class PHCLBBlock {
		/**
		 * Constructor.
		 */
		public function __construct() {
			add_action( 'init', array( $this, 'phclb_on_init' ) );
		}

		/**
		 * Register the block type on init.
		 *
		 * @return void
		 */
		public function phclb_on_init() {
			register_block_type( __DIR__ . '/build' );
		}
	}
	new PHCLBBlock();
}
