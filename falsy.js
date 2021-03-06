jQuery(document).ready(function($) {

	var $window = $(window);

	//scroll
	$window.scroll(function() {
		if($window.scrollTop() > ($window.height()/2)) {
			$('#sub-header').addClass('show');
		} else {
			$('#sub-header').removeClass('show');
		}
	});

	//section height
	$('.content-area > .container').css('min-height', $('#visual').height());

	//click
	$('.page-navigation a').on('click', function() {
		event.preventDefault();

		var $targetEl = $($(this).attr('href'));
		$('#content > section').removeClass('show');
		$targetEl.addClass('show');
		$targetEl.css('min-height', $(window).height() - 60);

		setTimeout(function(){
			var targetPositionTop = $targetEl.offset().top - 60;
			$('html, body').animate({
				scrollTop: targetPositionTop
			}, 400);
		});
	});

	//retina
	if(window.devicePixelRatio > 1) {
    var $images = $('img');

    $images.each(function(i) {
      var src = $(this).attr('src');
      var retinaSrc = src.replace(".png", "X2.png");
      $(this).attr('src', retinaSrc);
    });
  }
});