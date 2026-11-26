<?php

if (!defined('ABSPATH')) {
    exit;
}

if (!class_exists('PHCLBBlock')) {
    class PHCLBBlock
    {
        public function __construct()
        {
            add_action('enqueue_block_assets', [$this, 'phclb_enqueue_block_assets']);
            add_action('init', [$this, 'phclb_on_init']);
        }

        /**
         * Tells the block whether Pro is installed and licensed (window.phclbPremiumProps).
         */
        public function phclb_enqueue_block_assets()
        {
            $handle = 'phclb-inline-premium';
            wp_register_script($handle, false, [], PHCLB_VERSION, true);
            $data = [
                'isPremium' => function_exists('phclbIsPremium') ? phclbIsPremium() : false,
                'hasPro' => defined('PHCLB_HAS_PRO') ? PHCLB_HAS_PRO : false,
                'version' => defined('PHCLB_VERSION') ? PHCLB_VERSION : '',
                'adminUrl' => get_admin_url(),
            ];
            $inline = 'window.phclbPremiumProps = Object.assign(window.phclbPremiumProps || {}, ' . wp_json_encode($data) . ');';
            wp_add_inline_script($handle, $inline, 'before');
            wp_enqueue_script($handle);
        }

        public function phclb_on_init()
        {
            register_block_type(__DIR__ . '/' . PHCLB_BUILD_DIR);
        }
    }
    // Created in PHCLBPlugin::phclb_load_dependencies().
}
