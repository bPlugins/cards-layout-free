<?php
// Exit if accessed directly.
if (!defined('ABSPATH')) {
    exit;
}

add_action('plugins_loaded', 'phclb_load_textdomain');

function phclb_load_textdomain()
{
	load_plugin_textdomain(
		'cards-layout',
		false,
		dirname(plugin_basename(PHCLB_PLUGIN_FILE)) . '/languages'
	);
}


/**
 * Admin functionality handler for Cards Layout plugin.
 *
 * Handles:
 * - Custom post type registration
 * - Admin submenu pages
 * - Custom admin columns
 * - Admin dashboard rendering
 *
 * @package CardsLayout
 */


if (!class_exists('PHCLBAdmin')) {
    class PHCLBAdmin
    {
        /**
         * Constructor.
         *
         * Register admin hooks.
         *
         * @return void
         */

        public function __construct()
        {

            add_action('init', [$this, 'phclbRegisterPostType']);
            add_action('admin_menu', [$this, 'phclbAdminSubmenu']);
            add_filter('manage_cards-layout_posts_columns', [$this, 'phclb_setCustomColumn_edit']);
            add_action('manage_cards-layout_posts_custom_column', [$this, 'phclb_manageCustomColumn'], 10, 2);
        }
        /**
         * Register Cards Layout custom post type.
         *
         * @return void
         */

        public function  phclbRegisterPostType()
        {
            $icon = "<svg xmlns='http://www.w3.org/2000/svg' fill='#fff' width='800px' height='800px' viewBox='0 0 52 52' enableBackground='new 0 0 52 52'><g><path d='M48,50H4c-1.1,0-2-0.9-2-2V4c0-1.1,0.9-2,2-2h44c1.1,0,2,0.9,2,2v44C50,49.1,49.1,50,48,50z M6,46h40V6H6 V46z'/></g><g><path d='M39,20H13c-0.6,0-1-0.4-1-1v-6c0-0.6,0.4-1,1-1h26c0.6,0,1,0.4,1,1v6C40,19.6,39.6,20,39,20z' /></g><g><path d='M19,40h-6c-0.6,0-1-0.4-1-1V27c0-0.6,0.4-1,1-1h6c0.6,0,1,0.4,1,1v12C20,39.6,19.6,40,19,40z' /></g><g><path d='M39,40H27c-0.6,0-1-0.4-1-1V27c0-0.6,0.4-1,1-1h12c0.6,0,1,0.4,1,1v12C40,39.6,39.6,40,39,40z' /></g></svg>";


            register_post_type(
                'cards-layout',
                [
                    'label'               => __( 'Cards Layout', 'cards-layout' ),
                    'labels'              => [
                        'add_new' => __( 'Add New Shortcode', 'cards-layout' ),
                        'add_new_item' => __( 'Add New Shortcode', 'cards-layout' ),
                        'edit_item' => __( 'Edit Shortcode', 'cards-layout' ),
                        'not_found' => __( 'No Shortcode found', 'cards-layout' ),
                    ],
                    'supports' => ['title', 'editor', 'revisions'],
                    'show_in_rest' => true,
                    'public' => true,
                    'publicly_queryable' => false,
                    'menu_icon' => 'data:image/svg+xml;base64,' . base64_encode($icon),
                    'item_published' => __( 'Cards Layout Published', 'cards-layout' ), 
                    'item_updated' => __( 'Cards Layout Updated', 'cards-layout' ),
                    'template' => [['phclb/cards-layout']],
                    'template_lock' => 'all',

                ]
            );
        }

        /**
        * Register admin submenu page.
        *
        * @return void
        */
        public function phclbAdminSubmenu()
        {
            add_submenu_page(
                'edit.php?post_type=cards-layout',
                __( 'Demo and Help', 'cards-layout' ),
                __( 'Demo & Help', 'cards-layout' ),
                'manage_options',
                'demo_page',
                [$this, 'phclb_render_demo_page']
            );
        }

      
        /**
        * Render admin dashboard page.
        *
        * Passes plugin data through data attributes.
        *
        * @return void
        */

        public function phclb_render_demo_page()
        {

?>
            <div id='phclb-admin-dashboard'
                data-info='<?php echo esc_attr(wp_json_encode([
                                'version' => PHCLB_VERSION,
                            ])); ?>'></div>
<?php
        }
        /**
        * Set custom columns for Cards Layout post type.
        *
        * @param array $column Existing columns.
        * @return array Modified columns.
        */

        public function phclb_setCustomColumn_edit($column)
        {
            unset($column['date']);
            $column['shortcode'] = __( 'ShortCode', 'cards-layout' );
            $column['date'] = __( 'Date', 'cards-layout' );
            $column['publisher'] = __( 'Publisher', 'cards-layout' );
            return $column;
        }

        /**
        * Render custom column content.
        *
        * @param string $column_name Column name.
        * @param int    $post_id     Current post ID.
        * @return void
        */

        public function phclb_manageCustomColumn($column_name, $post_id)
        {

            if ('shortcode' === $column_name) {
                echo '<div class="bPlAdminShortcode" id="bPlAdminShortcode-' . esc_attr($post_id) . '">
						<input value="[cards-layout id=' . esc_attr($post_id) . ']" onclick="copyBPlAdminShortcode(\'' . esc_attr($post_id) . '\')" readonly>
						<span class="tooltip">'.esc_html__( 'Copy To Clipboard', 'cards-layout' ).'</span>
					  </div>';
            }
            if ('publisher' === $column_name) {
                echo esc_html__( 'Cards Layout', 'cards-layout' );
            }
        }
    }

    new PHCLBAdmin();
}
