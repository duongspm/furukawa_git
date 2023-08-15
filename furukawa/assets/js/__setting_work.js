/*=======================================================
					Voice
 =======================================================*/
$(document).ready(function() {   
	$("#work2 .slider").slick({
  		centerMode: true,
		slidesToShow: 3,
  		slidesToScroll: 1,
		variableWidth: true,
		autoplay: true,
  		responsive: [
    	{
      		breakpoint: 751,
      		settings: {
        		slidesToShow: 1,
        		slidesToScroll: 1,  
				centerMode: true,
				variableWidth: false
      		}
    	}
  		]
  	});
});   

/*=======================================================
					Gallery
 =======================================================*/
$(function() {
  	$('.photo').slick({
    	dots: true,
		// prevArrow: false,
		// nextArrow: false,
		adaptiveHeight: true,
		fade:true,
		draggable:false,

    	customPaging: function(slider, i) {
      		var thumbSrc = $(slider.$slides[i]).data('thumb');
      		return '<img src="' + thumbSrc + '">';
    	}
  	});
});

$(window).load(function() {
	setTimeout(function(){
		if(window.location.hash){
			var $target  = $(window.location.hash).closest("#gallery");
			if($target.length){
				$('html, body').animate({scrollTop: $target.offset().top}, 500);
			}
			
			var $target2  = $(window.location.hash).closest("#voice");
			if($target2.length){
				$('html, body').animate({scrollTop: $target2.offset().top}, 500);
			}
		}
	},100);
});           