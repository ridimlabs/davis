<?php
/**
 * Single variation cart button
 *
 * @see 	http://docs.woothemes.com/document/template-structure/
 * @author  WooThemes
 * @package WooCommerce/Templates
 * @version 2.5.0
 */
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

global $product;

?>

<div class="woocommerce-variation-add-to-cart variations_button">
	<?php if ( ! $product->is_sold_individually() ) : ?>
		<?php woocommerce_quantity_input( array( 'input_value' => isset( $_POST['quantity'] ) ? wc_stock_amount( $_POST['quantity'] ) : 1 ) ); ?>
	<?php endif; ?>

	<?php do_action( 'woocommerce_after_add_to_cart_button' ); ?>

	<button type="submit" class="cart_button button single_add_to_cart_button <?php echo pp_get_option( 'cart_icon_add' ); ?>" data-icon="<?php echo pp_get_option( 'cart_icon' ); ?>"><?php _e('Add to cart', 'davis'); ?></button>
	<input type="hidden" name="add-to-cart" value="<?php echo absint( $product->id ); ?>" />
	<input type="hidden" name="product_id" value="<?php echo absint( $product->id ); ?>" />
	<input type="hidden" name="variation_id" class="variation_id" value="0" />
</div>
