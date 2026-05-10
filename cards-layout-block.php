<?php

if (!defined('ABSPATH')) {
	exit;
}

if (!class_exists('PHCLBBlock')) {
    class PHCLBBlock
    {
        function __construct()
        {
            add_action('init', [$this, 'onInit']);
        }



        function onInit()
        {
            register_block_type(__DIR__ . '/build');
        }
    }
    new PHCLBBlock();
}
