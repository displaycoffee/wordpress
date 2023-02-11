<?php
	/**
	* Main theme functions
	**/

	// Exit if accessed directly
	if ( !defined( 'ABSPATH' ) ) { exit; }

	// Include extra function files
	require_once( 'includes/config.php' );

	// Add config object as variable
	$config = dctest_config();

	if ( ! function_exists( 'dctest_support' ) ) {
		function dctest_support()  {
			// Adding support for core block visual styles
			add_theme_support( 'wp-block-styles' );

			// Enqueue editor styles
			add_editor_style( 'style.css' );
		}
		add_action( 'after_setup_theme', 'dctest_support' );
	}

	// Enqueue scripts and styles
	function dctest_scripts( $config ) {
		wp_enqueue_style( $config->prefix . '-styles', $config->paths->css . '/styles.css', array(), $config->version );
		wp_enqueue_script( $config->prefix . '-bundle', $config->paths->js . '/bundle.js', array(), $config->version, true );
	}
	add_action( 'wp_enqueue_scripts', function() use ( $config ) { dctest_scripts( $config ); } );
