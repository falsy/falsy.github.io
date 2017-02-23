jQuery(document).ready(function($) {


	//scroll
	$(window).scroll(function() {
		if($(window).scrollTop() < 2000) {
			$('.visual').css('background-position', '50% ' + ($(window).scrollTop()/-5) + 'px');
		}
	});

	//retina
	if(window.devicePixelRatio > 1) {
        var images = $('img');

        images.each(function(i) {
            var src = $(this).attr('src');
            var retinaSrc = src.replace(".png", "X2.png");
            $(this).attr('src', retinaSrc);
        });
    }
});