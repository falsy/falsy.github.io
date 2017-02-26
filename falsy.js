jQuery(document).ready(function($) {


	//scroll
	$(window).scroll(function() {
		if($(window).scrollTop() < 2000) {
			$('#visual').css('background-position', '50% ' + ($(window).scrollTop()/-5) + 'px');
		}
		if($(window).scrollTop() > ($(window).height()/2)) {
			$('#sub-header').addClass('show');
		} else {
			$('#sub-header').removeClass('show');
		}
	});


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

	$('#essay a').on('click', function(){
		event.preventDefault();

		var $targetEl = $($(this).attr('href'));
		$('#essay-text > section').removeClass('show');
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