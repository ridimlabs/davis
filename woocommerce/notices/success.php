<?php
/**
 * Show messages
 *
 * @author 		WooThemes
 * @package 	WooCommerce/Templates
 * @version     1.6.4
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

if ( ! $messages ){
	return;
}

?>

<?php foreach ( $messages as $message ) : ?>
	<?php //if ( strpos( $message, 'added to your cart' ) === false ) : ?>
		<div class="woocommerce-message"><?php echo wp_kses_post( $message ); ?></div>
	<?php //endif; ?>
<?php endforeach; ?>
