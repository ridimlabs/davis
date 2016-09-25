<?php
/**
 * Product Loop Start
 *
 * @author 		WooThemes
 * @package 	WooCommerce/Templates
 * @version     2.0.0
 */ 
?>

<ul class="products <?php echo 'display-' . get_theme_mod( 'product_per_row', '4' ) . '-per-row'; ?> <?php echo get_theme_mod( 'product_card_style', 'product-style-1' ); ?> <?php if ( get_theme_mod( 'hide_product_details', false ) == false ){ ?>hide-details<?php } ?>">