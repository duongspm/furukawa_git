/*=======================================================
					photo
=======================================================*/
jQuery(document).ready(function($) {
  	$.fn.rotate = function(options){

		var defaults = {
			speed:10,
			slide1:".slide1"
		}
		var options = $.extend(defaults, options);
	
		this.each(function(){
			var thisR = $(this),
        		thisC = thisR.children();
    			//thisR.append('<a href="javascript:;" class="rotate-prev">Prev</a>');
				thisC.append('<ul class="slide2">'+ $(options.slide1).html() +'</ul>');
				thisR.css({'overflow':'hidden','width':options.width});
				thisC.css('width','12000px').children().css('float','left');
				
    		function Marquee(){
      			if(thisR.scrollLeft() >= $(options.slide1).width()){
        			thisR.scrollLeft(0);
      			}else{
        			thisR.scrollLeft(thisR.scrollLeft()+1);
      			}
    		}
      		
			var sliding=setInterval(Marquee,options.speed);
      		/*thisR.hover(function() {
        		clearInterval(sliding);
      		},function(){
        		sliding=setInterval(Marquee,options.speed);
      		});*/
    	});
	}
	$("#photo").rotate();
});

/*=======================================================
						MainSLider							
=======================================================*/
$(document).ready(function() {
	$('.mainVisual').slick({
		fade: true,
		autoplay: true,
		speed: 2000,		
		autoplaySpeed: 2500,
		arrows: false,
		pauseOnHover: false,
        pauseOnFocus: false
	});
});

/*=======================================================
						Topics							
=======================================================*/
$(document).ready(function() {
	$('#topicsSlider').slick({
		autoplay: true,
		peed: 2000,		
  		autoplaySpeed: 2500,
		centerMode: true,
	  	slidesToShow: 3,
		slidesToScroll: 1, 	  	
	  	variableWidth: true,
		responsive: [{
      		breakpoint: 751,
      		settings: {
        		slidesToShow: 1,
        		slidesToScroll: 1,  
				centerMode: true,
				variableWidth: false      		
      		}
    	}]
	});
});

/*=======================================================
						Voice							
=======================================================*/
$(document).ready(function() {
	$('#voiceSlider').slick({
		autoplay: true,
		speed: 2000,		
  		autoplaySpeed: 3000,
		centerMode: true,
		slidesToShow: 3,		
	  	slidesToScroll: 1,
		responsive: [{
      		breakpoint: 1201,
      		settings: {
        		slidesToShow: 2,
        		slidesToScroll: 1,
      		}
		},{
      		breakpoint: 751,
      		settings: {
        		slidesToShow: 1,
        		slidesToScroll: 1,
      		}
    	}]	  	
	});
});

/*=======================================================
						Movie							
=======================================================*/
$(document).ready(function() {
	$('#movieSlider').slick({
		autoplay: true,
        //infinite: true,
		speed: 2000,		
  		autoplaySpeed: 3000,
		centerMode: true,
		slidesToShow: 3,		
	  	slidesToScroll: 1,
		responsive: [{
      		breakpoint: 1201,
      		settings: {
        		slidesToShow: 2,
        		slidesToScroll: 1,
      		}
		},{
      		breakpoint: 751,
      		settings: {
        		slidesToShow: 1,
        		slidesToScroll: 1,
      		}
    	}]	  	
	});
});

$(document).ready(function() {    
    $('.fancybox-media').fancybox({
        padding     : 0,
		maxWidth	: 960,
		maxHeight	: 540,
		width		: '90%',
		height		: '60%'
	});    
});


/*=======================================================
						Page							
=======================================================*/
$(document).ready(function() {
	$('#page .sp').slick({
	  	centerMode: true,
		slidesToShow: 1,		
	  	slidesToScroll: 1			
	});
});