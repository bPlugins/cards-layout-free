<?php
if (!defined('ABSPATH')) {
	exit;
}




if (!class_exists('PHCLBPlugin')) {
	class PHCLBPlugin
	{
		public function __construct()
		{
			add_action('plugins_loaded', [$this, 'load_dependencies']);
			add_action('admin_enqueue_scripts', [$this, 'phclbAdminScripts']);
			add_shortcode('cards-layout', [$this, 'phclbShortcode']);
		}

		public function load_dependencies()
		{
			require_once PHCLB_DIR_PATH . 'cards-layout-block.php';
			require_once PHCLB_DIR_PATH . 'includes/class-phclbAdmin.php';
		}

		/**
		 * Enqueue admin scripts for cards-layout post type.
		 *
		 * @param string $screen Current screen ID.
		 */
		public function phclbAdminScripts($screen): void
		{
			global $typenow;


			if ('cards-layout' === $typenow) {
				$assets = include PHCLB_DIR_PATH . 'build/admin-dashboard.asset.php';
				wp_enqueue_script('admin-post-js', PHCLB_DIR_URL . 'build/admin-post.js', [], PHCLB_VERSION, true);
				wp_enqueue_style('admin-post-css', PHCLB_DIR_URL . 'build/admin-post.css', [], PHCLB_VERSION);
				wp_enqueue_script('phclb-admin-dashboard-js', PHCLB_DIR_URL . 'build/admin-dashboard.js', array_merge($assets['dependencies'], ['wp-util']), PHCLB_VERSION, true);
				wp_enqueue_style('phclb-admin-dashboard-css', PHCLB_DIR_URL . 'build/admin-dashboard.css', [], PHCLB_VERSION);
			}
		}

		/**
		 * Shortcode handler for cards-layout.
		 *
		 * @param array $atts Shortcode attributes.
		 * @return string Rendered content or error message.
		 */
		function phclbShortcode($atts): string
		{
			$post_id = absint( $atts['id'] );
			$post = get_post($post_id);

			if (!$post) {
				return '';
			}

			if (post_password_required($post)) {
				return get_the_password_form($post);
			}

			switch ($post->post_status) {
				case 'publish':
					return $this->phclbDisplayContent($post);

				case 'private':
					if (current_user_can('read_private_posts')) {
						return $this->phclbDisplayContent($post);
					}
					return '';

				case 'draft':
				case 'pending':
				case 'future':
					if (current_user_can('edit_post', $post_id)) {
						return $this->phclbDisplayContent($post);
					}
					return '';

				default:
					return '';
			}
		}

		/**
		 * Render the content of a cards-layout post.
		 *
		 * @param WP_Post $post Post object.
		 * @return string Rendered content.
		 */
		function phclbDisplayContent($post): string
		{
			// Avoid apply_filters('the_content') to prevent infinite loops if the shortcode is used within itself.
			// Instead, parse blocks and handle shortcodes manually.
			$content = $post->post_content;

			if (function_exists('do_blocks')) {
				$content = do_blocks($content);
			}

			return do_shortcode($content);
		}
	}
}
