jQuery(document).ready(function($) {
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