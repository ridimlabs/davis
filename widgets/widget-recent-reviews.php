<?php

if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

if ( class_exists( 'WC_Widget_Recent_Reviews' ) ) {

	require_once ABSPATH . '/wp-content/plugins/woocommerce/includes/widgets/class-wc-widget-recent-reviews.php';

	class PP_Widget_Recent_Reviews extends WC_Widget_Recent_Reviews {

		/**
		 * Constructor.
		 */
		public function __construct() {
			$this->widget_cssclass    = 'woocommerce widget_recent_reviews';
			$this->widget_description = __( 'Display a list of your most recent reviews on your site.', 'woocommerce' );
			$this->widget_id          = 'woocommerce_recent_reviews';
			$this->widget_name        = __( 'WooCommerce Recent Reviews', 'woocommerce' );
			$this->settings           = array(
				'title'  => array(
					'type'  => 'text',
					'std'   => __( 'Recent Reviews', 'woocommerce' ),
					'label' => __( 'Title', 'woocommerce' )
				),
				'number' => array(
					'type'  => 'number',
					'step'  => 1,
					'min'   => 1,
					'max'   => '',
					'std'   => 10,
					'label' => __( 'Number of reviews to show', 'woocommerce' )
				)
			);

			parent::__construct();
		}

		/**
		 * Output widget.
		 *
		 * @see WP_Widget
		 *
		 * @param array $args
		 * @param array $instance
		 */
		 public function widget( $args, $instance ) {
			global $comments, $comment;

			if ( $this->get_cached_widget( $args ) ) {
				return;
			}

			ob_start();

			$number   = ! empty( $instance['number'] ) ? absint( $instance['number'] ) : $this->settings['number']['std'];
			$comments = get_comments( array( 'number' => $number, 'status' => 'approve', 'post_status' => 'publish', 'post_type' => 'product' ) );

			if ( $comments ) {
				$this->widget_start( $args, $instance );

				echo '<ul class="product_list_widget">';

				foreach ( (array) $comments as $comment ) {

					$_product = wc_get_product( $comment->comment_post_ID );

					$rating = intval( get_comment_meta( $comment->comment_ID, 'rating', true ) );

					$rating_html = $_product->get_rating_html( $rating );

					echo '<li><a href="' . esc_url( get_comment_link( $comment->comment_ID ) ) . '">';

					echo '<figure>' . $_product->get_image() . '</figure>';

					echo '<div class="meta">';

					echo '<span class="product-title">' . $_product->get_title() . '</span>';

					echo $rating_html;

					printf( '<span class="reviewer">' . _x( 'by %1$s', 'by comment author', 'woocommerce' ) . '</span>', get_comment_author() );

					echo '</div>';

					echo '</a></li>';
				}

				echo '</ul>';

				$this->widget_end( $args );
			}

			$content = ob_get_clean();

			echo $content;

			$this->cache_widget( $args, $content );
		}
	}

	$pp_widget_recent_reviews = new PP_Widget_Recent_Reviews();

} ?>
