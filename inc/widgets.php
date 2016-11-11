<?php
/**
 * Overwrite woocommerce widgets
 */
function overwride_woocommerce_widgets() {
	// CART WIDGET
	if ( class_exists( 'WC_Widget_Cart' ) ) {
		require_once(get_stylesheet_directory().'/widgets/cart.php');
		register_widget( 'pp_WC_Widget_Cart' );
	}

	// RECENT REVIEWS
	if ( class_exists( 'WC_Widget_Recent_Reviews' ) ) {
		require_once(get_stylesheet_directory().'/widgets/widget-recent-reviews.php');
		register_widget( 'pp_Widget_Recent_Reviews' );
	}

}
add_action( 'widgets_init', __NAMESPACE__ . '\\overwride_woocommerce_widgets', 15 );

?>