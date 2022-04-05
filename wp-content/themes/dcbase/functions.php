<?php
	/**
	* Main theme functions
	*/

	// Exit if accessed directly
	if ( !defined( 'ABSPATH' ) ) { exit; }

	// Include extra function files
	require_once( 'inc/functions-helpers.php' );
	// // require_once( 'inc/functions-json-ld.php' );
	// //
	// // // Include shortcode file
	// // require_once( 'inc/shortcodes.php' );
	// //
	// // // Include customizer files
	// // require_once( 'customizer/customizer-enqueue.php' );
	// // require_once( 'customizer/customizer-choices.php' );
	// // require_once( 'customizer/customizer-date-picker.php' );
	// // require_once( 'customizer/customizer-validation.php' );
	// // require_once( 'customizer/customizer.php' );

	// Add config object as variable
	$config = dcbase_config();

	// Create theme setup
	function dcbase_setup( $config ) {
		load_theme_textdomain( $config->lang, $config->paths->lang );
		add_theme_support( 'title-tag' );
		add_theme_support( 'custom-logo' );
		add_theme_support( 'post-thumbnails' );
		add_theme_support( 'responsive-embeds' );
		add_theme_support( 'automatic-feed-links' );
		add_theme_support( 'html5', array( 'search-form', 'navigation-widgets' ) );
		register_nav_menus( array( 'main-menu' => esc_html__( 'Main Menu', $config->lang ) ) );
	}
	add_action( 'after_setup_theme', function() use ( $config ) { dcbase_setup( $config ); } );

	// Loads necessary javascript and CSS
	function dcbase_enqueue( $config ) {
		wp_enqueue_style( $config->prefix . '-style', $config->paths->css . '/styles.css' );
		wp_enqueue_script( 'jquery' );
		wp_enqueue_script( $config->prefix . '-bundle', $config->paths->js . '/bundle.js', array(), '', true );
	}
	add_action( 'wp_enqueue_scripts', function() use ( $config ) { dcbase_enqueue( $config ); } );

	// Remove certain classes from post_class
	function dcbase_remove_post_classes( $classes, $class ) {
		$new_classes = array();
		foreach ( $classes as $class ) {
			if ( strpos( $class, 'category-' ) === false && strpos( $class, 'tag-' ) === false ) {
				array_push( $new_classes, $class );
			}
		}
		return $new_classes;
	}
	add_filter( 'post_class', 'dcbase_remove_post_classes', 10, 3 );

	// Initialize widgets
	function dcbase_widgets_init( $config ) {
		$sidebar_config = array(
			'id'            => 'default-widgets',
			'name'          => __( 'Default Widgets', $config->lang ),
			'description'	=> __( 'Widgets in this area will be shown where there is a sidebar.', $config->lang ),
			'before_widget' => '<div id="' . esc_attr( '%1$s' ) . '" class="widget ' . esc_attr( '%2$s' ) . '">',
			'after_widget'  => '</div>',
			'before_title'  => '<h3 class="widget-title">',
			'after_title'   => '</h3>',
		);
		register_sidebar( $sidebar_config );
	}
	add_action( 'widgets_init', function() use ( $config ) { dcbase_widgets_init( $config ); } );

	// Enable shortcodes in text widgets
	add_filter( 'widget_text', 'do_shortcode' );
?>
<?php
// add_filter( 'document_title_separator', 'dcbase_document_title_separator' );
// function dcbase_document_title_separator( $sep ) {
// $sep = '|';
// return $sep;
// }
// add_filter( 'the_title', 'dcbase_title' );
// function dcbase_title( $title ) {
// if ( $title == '' ) {
// return '...';
// } else {
// return $title;
// }
// }

// add_filter( 'the_content_more_link', 'dcbase_read_more_link' );
// function dcbase_read_more_link() {
// if ( ! is_admin() ) {
// return ' <a href="' . esc_url( get_permalink() ) . '" class="more-link">' . sprintf( __( '...%s', 'dcbase' ), '<span class="screen-reader-text">  ' . esc_html( get_the_title() ) . '</span>' ) . '</a>';
// }
// }
// add_filter( 'excerpt_more', 'dcbase_excerpt_read_more_link' );
// function dcbase_excerpt_read_more_link( $more ) {
// if ( ! is_admin() ) {
// global $post;
// return ' <a href="' . esc_url( get_permalink( $post->ID ) ) . '" class="more-link">' . sprintf( __( '...%s', 'dcbase' ), '<span class="screen-reader-text">  ' . esc_html( get_the_title() ) . '</span>' ) . '</a>';
// }
// }
// add_filter( 'big_image_size_threshold', '__return_false' );
// add_filter( 'intermediate_image_sizes_advanced', 'dcbase_image_insert_override' );
// function dcbase_image_insert_override( $sizes ) {
// unset( $sizes['medium_large'] );
// unset( $sizes['1536x1536'] );
// unset( $sizes['2048x2048'] );
// return $sizes;
// }
// add_action( 'wp_head', 'dcbase_pingback_header' );
// function dcbase_pingback_header() {
// if ( is_singular() && pings_open() ) {
// printf( '<link rel="pingback" href="%s" />' . "\n", esc_url( get_bloginfo( 'pingback_url' ) ) );
// }
// }
// add_action( 'comment_form_before', 'dcbase_enqueue_comment_reply_script' );
// function dcbase_enqueue_comment_reply_script() {
// if ( get_option( 'thread_comments' ) ) {
// wp_enqueue_script( 'comment-reply' );
// }
// }
// function dcbase_custom_pings( $comment ) {
?>
<!-- <li <?php comment_class(); ?> id="li-comment-<?php comment_ID(); ?>"><?php echo esc_url( comment_author_link() ); ?></li> -->
<?php
// }
// add_filter( 'get_comments_number', 'dcbase_comment_count', 0 );
// function dcbase_comment_count( $count ) {
// if ( ! is_admin() ) {
// global $id;
// $get_comments = get_comments( 'status=approve&post_id=' . $id );
// $comments_by_type = separate_comments( $get_comments );
// return count( $comments_by_type['comment'] );
// } else {
// return $count;
// }
// }
?>

<?php


add_action( 'admin_notices', 'dcbase_admin_notice' );
function dcbase_admin_notice() {
$user_id = get_current_user_id();
if ( !get_user_meta( $user_id, 'dcbase_notice_dismissed_5' ) && current_user_can( 'manage_options' ) )
echo '<div class="notice notice-info"><p>' . __( '<big><strong>dcbase</strong>:</big> Help keep the project alive! <a href="?notice-dismiss" class="alignright">Dismiss</a> <a href="https://calmestghost.com/donate" class="button-primary" target="_blank">Make a Donation</a>', 'dcbase' ) . '</p></div>';
}
add_action( 'admin_init', 'dcbase_notice_dismissed' );
function dcbase_notice_dismissed() {
$user_id = get_current_user_id();
if ( isset( $_GET['notice-dismiss'] ) )
add_user_meta( $user_id, 'dcbase_notice_dismissed_5', 'true', true );
}

add_filter( 'document_title_separator', 'dcbase_document_title_separator' );
function dcbase_document_title_separator( $sep ) {
$sep = '|';
return $sep;
}
add_filter( 'the_title', 'dcbase_title' );
function dcbase_title( $title ) {
if ( $title == '' ) {
return '...';
} else {
return $title;
}
}
function dcbase_schema_type() {
$schema = 'https://schema.org/';
if ( is_single() ) {
$type = "Article";
} elseif ( is_author() ) {
$type = 'ProfilePage';
} elseif ( is_search() ) {
$type = 'SearchResultsPage';
} else {
$type = 'WebPage';
}
echo 'itemscope itemtype="' . $schema . $type . '"';
}
add_filter( 'nav_menu_link_attributes', 'dcbase_schema_url', 10 );
function dcbase_schema_url( $atts ) {
$atts['itemprop'] = 'url';
return $atts;
}
if ( !function_exists( 'dcbase_wp_body_open' ) ) {
function dcbase_wp_body_open() {
do_action( 'wp_body_open' );
}
}
add_action( 'wp_body_open', 'dcbase_skip_link', 5 );
function dcbase_skip_link() {
echo '<a href="#content" class="skip-link screen-reader-text">' . esc_html__( 'Skip to the content', 'dcbase' ) . '</a>';
}
add_filter( 'the_content_more_link', 'dcbase_read_more_link' );
function dcbase_read_more_link() {
if ( !is_admin() ) {
return ' <a href="' . esc_url( get_permalink() ) . '" class="more-link">' . sprintf( __( '...%s', 'dcbase' ), '<span class="screen-reader-text">  ' . esc_html( get_the_title() ) . '</span>' ) . '</a>';
}
}
add_filter( 'excerpt_more', 'dcbase_excerpt_read_more_link' );
function dcbase_excerpt_read_more_link( $more ) {
if ( !is_admin() ) {
global $post;
return ' <a href="' . esc_url( get_permalink( $post->ID ) ) . '" class="more-link">' . sprintf( __( '...%s', 'dcbase' ), '<span class="screen-reader-text">  ' . esc_html( get_the_title() ) . '</span>' ) . '</a>';
}
}
add_filter( 'big_image_size_threshold', '__return_false' );
add_filter( 'intermediate_image_sizes_advanced', 'dcbase_image_insert_override' );
function dcbase_image_insert_override( $sizes ) {
unset( $sizes['medium_large'] );
unset( $sizes['1536x1536'] );
unset( $sizes['2048x2048'] );
return $sizes;
}

add_action( 'wp_head', 'dcbase_pingback_header' );
function dcbase_pingback_header() {
if ( is_singular() && pings_open() ) {
printf( '<link rel="pingback" href="%s" />' . "\n", esc_url( get_bloginfo( 'pingback_url' ) ) );
}
}
add_action( 'comment_form_before', 'dcbase_enqueue_comment_reply_script' );
function dcbase_enqueue_comment_reply_script() {
if ( get_option( 'thread_comments' ) ) {
wp_enqueue_script( 'comment-reply' );
}
}
function dcbase_custom_pings( $comment ) {
?>
<li <?php comment_class(); ?> id="li-comment-<?php comment_ID(); ?>"><?php echo esc_url( comment_author_link() ); ?></li>
<?php
}
add_filter( 'get_comments_number', 'dcbase_comment_count', 0 );
function dcbase_comment_count( $count ) {
if ( !is_admin() ) {
global $id;
$get_comments = get_comments( 'status=approve&post_id=' . $id );
$comments_by_type = separate_comments( $get_comments );
return count( $comments_by_type['comment'] );
} else {
return $count;
}
}