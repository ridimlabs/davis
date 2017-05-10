<?php
/**
 * The template for displaying product widget entries
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/content-widget-product.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you (the theme developer).
 * will need to copy the new files to your theme to maintain compatibility. We try to do this.
 * as little as possible, but it does happen. When this occurs the version of the template file will.
 * be bumped and the readme will list any important changes.
 *
 * @see 	http://docs.woothemes.com/document/template-structure/
 * @author  WooThemes
 * @package WooCommerce/Templates
 * @version 2.5.0
 */

// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

global $product; 

if ($product->is_type( 'variable' )){ 
	$available_variations = $product->get_available_variations();
	$variationCount = count( $available_variations );
	$first_attr = current(array_keys( $available_variations[0]['attributes'] ));
	
	// Get the variation name
	$variations = str_replace('attribute_', '', $first_attr);
	$variations = str_replace('pa_', '', $variations);
}

?>

<li>
	<a href="<?php echo esc_url( get_permalink( $product->get_id() ) ); ?>" title="<?php echo esc_attr( $product->get_title() ); ?>">
		<figure>
			<?php echo $product->get_image( 'shop_catalog' ); ?>
		</figure>
		
		<div class="meta">
			<span class="product-title"><?php echo $product->get_title(); ?></span>
	
			<?php if ( ! empty( $show_rating ) ) : ?>
				<?php echo wc_get_rating_html( $product->get_average_rating() ); ?>
			<?php endif; ?>
			
			<?php echo $product->get_price_html(); ?>
			
			<?php if ( $product->is_type( 'variable' ) ){ ?>
				<span class="variation"><?php echo $variationCount . ' ' . trim($variations, ' '); ?></span>
			<?php } ?>
		</div>
	</a>
</li>
