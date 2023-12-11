<?php
/**
 * Array of Icons for the opening button
 */

if ( ! function_exists( 'osp_opening_btn_icons' ) ) {

	function osp_opening_btn_icons( $return = 'menu', $default = 'none' ) {

		// Add none to top of array
		$icons_array = array(
			'none' =>''
		);

		// Define return icons
		$return_icons = array();

		// Returns
		if ( 'menu' == $return ) {
			$return_icons = array('menu','double_arrows_left','double_arrows_right','angle_left','angle_right','long_arrow_alt_left','long_arrow_alt_right','hand_point_left','hand_point_right');
			$return_icons = array_combine($return_icons, $return_icons);
		}

		return apply_filters( 'osp_opening_btn_icons', array_merge( $icons_array, $return_icons ) );

	}

}