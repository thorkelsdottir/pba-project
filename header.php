<?php
/**
 * The template for displaying the header
 *
 * Displays all of the head element and everything up until the "container" div.
 *
 * @package FoundationPress
 * @since FoundationPress 1.0.0
 */

	// $dark_mode = isset($_COOKIE['isDark']) && $_COOKIE['isDark'] == 'true' ? 'body--contrast' : 'white-mode';
?>
<!doctype html>
<html class="no-js" <?php language_attributes(); ?> >
	<head>
		<meta charset="<?php bloginfo( 'charset' ); ?>" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<?php wp_head(); ?>
	</head>
	<body <?php body_class(); ?>>
	<script>
		  function getCookie(cname) {
				var name = cname + "=";
				var decodedCookie = decodeURIComponent(document.cookie);
				var ca = decodedCookie.split(';');
				for (var i = 0; i < ca.length; i++) {
					var c = ca[i];
					while (c.charAt(0) == ' ') {
						c = c.substring(1);
					}
					if (c.indexOf(name) == 0) {
						return c.substring(name.length, c.length);
					}
				}
				return "";
			};
		var isDark = getCookie('isDark');
		var body = document.querySelector('body');
		if (isDark && isDark == 'true' && ! body.classList.contains('body--contrast')) {
			body.classList.add('body--contrast')
		}
		if (isDark && isDark == 'false' && body.classList.contains('body--contrast')) {
			body.classList.remove('body--contrast')
		}
	</script>


	<?php
		svef_partial('library/svef-partials/component-header');

	?>

