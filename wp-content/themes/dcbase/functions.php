<?php
	/**
	* Main theme functions
	**/

	// Exit if accessed directly
	if ( !defined( 'ABSPATH' ) ) { exit; }

	// Include extra function files
	require_once( 'includes/config.php' );

	// Add config object as variable
	$config = dcbase_config();

	if ( ! function_exists( 'dcbase_support' ) ) {
		function dcbase_support()  {
			// Enqueue editor styles
			add_editor_style( 'style.css' );
		}
		add_action( 'after_setup_theme', 'dcbase_support' );
	}

	// Enqueue scripts and styles
	function dcbase_scripts( $config ) {
		wp_enqueue_style( $config->prefix . '-styles', $config->paths->css . '/styles.css', array(), $config->version );
		wp_enqueue_script( $config->prefix . '-bundle', $config->paths->js . '/bundle.js', array(), $config->version, true );
	}
	add_action( 'wp_enqueue_scripts', function() use ( $config ) { dcbase_scripts( $config ); } );

	function prefix_remove_core_block_styles() {
		wp_dequeue_style( 'wp-block-library' );
		wp_dequeue_style( 'wp-block-library-theme' );
		wp_dequeue_style( 'wc-block-styles' ); // REMOVE WOOCOMMERCE BLOCK CSS
		wp_dequeue_style( 'global-styles' ); // REMOVE THEME.JSON
		wp_dequeue_style('core-block-supports');

		global $wp_styles;
	
		foreach ( $wp_styles->queue as $key => $handle ) {
			if ( strpos( $handle, 'wp-block-' ) === 0 ) {
				wp_dequeue_style( $handle );
			}
		}
	}
	add_action( 'wp_enqueue_scripts', 'prefix_remove_core_block_styles' );