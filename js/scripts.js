$(document).ready(function() {
	var $animation_elements = $('.animate');
	var $window = $(window);

	function randombg(){
		var random= Math.floor(Math.random() * 3) + 0;
		var bg = ["../assets/hero_1.jpg",
			"../assets/hero_2.jpg",
			"../assets/hero_3.jpg"];
		$('.hero').css('background-image', 'url(' + bg[random] + ')');
	}
	randombg();

	function check_if_in_view() {
		var window_height = $window.height();
		var window_top_position = $window.scrollTop();
		var window_bottom_position = (window_top_position + window_height);

		$.each($animation_elements, function() {
			var $element = $(this);
			var element_height = $element.outerHeight();
			var element_top_position = $element.offset().top;
			var element_bottom_position = (element_top_position + element_height);

			//check to see if this current container is within viewport
			if (!($element.hasClass('in-view')) && (element_bottom_position >= window_top_position) && (element_top_position <= window_bottom_position)) {
				$element.addClass('in-view');
			}
		});
	}

	$window.on('scroll resize', check_if_in_view);
	$window.trigger('scroll');
});
