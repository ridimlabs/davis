<?php
/**
 * The template for displaying 404 pages (not found).
 *
 * @link https://codex.wordpress.org/Creating_an_Error_404_Page
 *
 * @package Davis
 */

get_header();

?>

	<p><?php esc_html_e( 'It looks like nothing was found at this location. Maybe try one of the links below or a search?', 'davis' ); ?></p>

	<?php
		get_search_form();
	?>

<?php
get_footer();
