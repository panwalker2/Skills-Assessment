$(document).ready(function() {
	$('img.youtube').click(function(){
		var video = '<iframe src="'+ $(this).attr('data-video') +'"></iframe>';
		$(this).replaceWith(video);
	});
});
