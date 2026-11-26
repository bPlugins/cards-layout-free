<?php

if (!defined('ABSPATH')) {
	exit;
}

if (!class_exists('PHCLBPlugin')) {
	class PHCLBPlugin
	{
		public function __construct()
		{
			add_action('plugins_loaded', [$this, 'phclb_load_dependencies']);
			add_action('admin_enqueue_scripts', [$this, 'phclb_admin_scripts']);
			add_shortcode('cards-layout', [$this, 'phclb_shortcode']);
		}

		public function phclb_load_dependencies()
		{
			require_once PHCLB_DIR_PATH . 'includes/functions.php';
			require_once PHCLB_DIR_PATH . 'cards-layout-block.php';
			require_once PHCLB_DIR_PATH . 'includes/class-phclbAdmin.php';
			new PHCLBAdmin();
			new PHCLBBlock();
		}

		/**
		 * Loads the shortcode-list and dashboard scripts on the Cards Layout admin screens.
		 *
		 * @param string $screen Current admin page hook.
		 */
		public function phclb_admin_scripts($screen): void
		{
			global $typenow;

			if ('cards-layout' === $typenow) {
				$build = PHCLB_BUILD_DIR . '/';
				$assets = include PHCLB_DIR_PATH . $build . 'admin-dashboard.asset.php';
				wp_enqueue_script('phclb-admin-post-js', PHCLB_DIR_URL . $build . 'admin-post.js', [], PHCLB_VERSION, true);
				wp_enqueue_style('phclb-admin-post-css', PHCLB_DIR_URL . $build . 'admin-post.css', [], PHCLB_VERSION);
				wp_enqueue_script('phclb-admin-dashboard-js', PHCLB_DIR_URL . $build . 'admin-dashboard.js', array_merge($assets['dependencies'], ['wp-util']), PHCLB_VERSION, true);
				wp_enqueue_style('phclb-admin-dashboard-css', PHCLB_DIR_URL . $build . 'admin-dashboard.css', [], PHCLB_VERSION);
			}
		}


		/**
		 * [cards-layout id="123"]: shows a saved Cards Layout.
		 *
		 * @param array|string $atts Shortcode attributes.
		 * @return string The cards, or an empty string if the visitor may not see them.
		 */
		public function phclb_shortcode($atts): string
		{
			$atts = shortcode_atts(['id' => 0], $atts, 'cards-layout');
			$post_id = absint($atts['id']);
			$post = get_post($post_id);

			if (!$post) {
				return '';
			}

			if (post_password_required($post)) {
				return wp_kses(get_the_password_form($post), self::phclb_password_form_html());
			}

			switch ($post->post_status) {
				case 'publish':
					return $this->phclb_display_content($post);

				case 'private':
					if (current_user_can('read_private_posts')) {
						return $this->phclb_display_content($post);
					}
					return '';

				case 'draft':
				case 'pending':
				case 'future':
					if (current_user_can('edit_post', $post_id)) {
						return $this->phclb_display_content($post);
					}
					return '';

				default:
					return '';
			}
		}

		/**
		 * HTML allowed in the password form: what wp_kses_post() allows, plus the form and its
		 * fields, which wp_kses_post() strips (leaving a "Password:" label with nowhere to type).
		 *
		 * @return array
		 */
		private static function phclb_password_form_html(): array
		{
			$field = ['type' => true, 'name' => true, 'id' => true, 'value' => true, 'size' => true, 'class' => true, 'spellcheck' => true, 'required' => true, 'autocomplete' => true];
			return array_merge(wp_kses_allowed_html('post'), [
				'form' => ['action' => true, 'method' => true, 'class' => true, 'id' => true],
				'input' => $field,
				'button' => ['type' => true, 'name' => true, 'class' => true, 'value' => true],
			]);
		}

		/**
		 * IDs of the Cards Layout posts being rendered right now, outermost first.
		 *
		 * @var array<int, true>
		 */
		private static $phclb_rendering = [];

		/**
		 * Renders a Cards Layout post's blocks.
		 *
		 * A layout that contains its own shortcode, directly or through another layout, is
		 * skipped the second time, so it can't render itself forever.
		 *
		 * @param WP_Post $post The Cards Layout post.
		 * @return string Rendered HTML.
		 */
		public function phclb_display_content($post): string
		{
			if (isset(self::$phclb_rendering[$post->ID])) {
				return '';
			}

			self::$phclb_rendering[$post->ID] = true;
			$html = wp_kses_post(do_shortcode(do_blocks($post->post_content)));
			unset(self::$phclb_rendering[$post->ID]);

			return $html;
		}
	}
}
