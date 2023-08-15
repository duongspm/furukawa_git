/*=======================================================
					Setting Common							
=======================================================*/
$(window).load(function() {
    
	function setMenuPC(){
		$("#gnav li.parent").hover(function(){
			$(this).find('ul').show();
		}, function(){
			$(this).find('ul').hide();
		})
	}
	
	function setMenuSp(){
		$("#gnav li.parent a.spNoLink").removeAttr("href");	
	}
	
	function setCommon(){
		var winW = $(window).width();
			headerH = $('header').height(),
			btnFixed = $('#btnFixed').height();
		
		if(winW > 751){
			$('#distance').css({'margin-top':headerH + 4});
			$('footer').css({'margin-bottom':0});
			$('.posAbs').css({'top':- headerH - 4});
			
			setMenuPC();
	
		}else{
			$('#distance').css({'margin-top':headerH + 2});	
			$('footer').css({'margin-bottom':btnFixed});
			$('.posAbs').css({'top':- headerH - 2});
			
			setMenuSp();			
		}
	}
	
	setCommon();
	
	$(window).resize(function() {
        setCommon();
    });
});

/*=======================================================
					Menu Sp
=======================================================*/
jQuery(document).ready(function($) {
    $open=false;
	function menuMb() {
		$("#gnav").slideToggle();
		if($open==false){
			$open=true;
			$('#imgMenu').attr('src', $('#imgMenu').attr('src').replace('btn_menu', 'btn_close'));
		}else{
			$open=false;
			$('#imgMenu').attr('src', $('#imgMenu').attr('src').replace('btn_close', 'btn_menu'));
		}
	}
	$('#btnMenu').click(function() {
		menuMb();
	});
});  

$(document).ready(function() {    
	$('#gnav li.parent').click(function() {
		var current = $(this).find('ul').slideToggle(200, function() {
			if (current.is(":hidden")) {
				$(this).parent().removeClass('show');
			} else {
				$(this).parent().addClass('show');
			}
		});
	});	
});      

/*=======================================================
					fLink Sp
=======================================================*/
$(document).ready(function() {    
	$('#fLink .arrow').click(function() {
		var current = $(this).parent().parent().find('ul').slideToggle(200, function() {
			if (current.is(":hidden")) {
				$(this).parent().find('.arrow').removeClass('open');
			} else {
				$(this).parent().find('.arrow').addClass('open');
			}
		});
	});	
});

/*=======================================================
						Rollover
=======================================================*/
jQuery(document).ready(function($) {
    $("img.imgover").mouseover(function(){
        $(this).attr("src",$(this).attr("src").replace(/^(.+)(\.[a-z]+)$/, "$1_over$2"));
    }).mouseout(function(){
        $(this).attr("src",$(this).attr("src").replace(/^(.+)_over(\.[a-z]+)$/, "$1$2"));
    });
});

/*=======================================================
						Anchorlink
=======================================================*/
jQuery(document).ready(function($) {
   $('a').click(function(){
      $('html, body').animate({
         scrollTop: $( $(this).attr('href') ).offset().top
      }, 500);
      return 
   });
});

/*=======================================================
		Change Img From Pc To Sp OR Screen Rentina
=======================================================*/
jQuery(document).ready(function($) {
	var elem = $(this);
	var imgSrc = $("img", elem).map(function() {
		return $(this).attr("src");
	});
	function changeImages() {
		var winWimg = $(window).width();
		for (var i = 0; i < imgSrc.length; i++) {
			var newImgSrc = imgSrc[i].substring(0, imgSrc[i].length - 4),
				getExp = imgSrc[i].slice(-3),
				newImg = newImgSrc + "_sp";
			if (getExp == "jpg") {
				newImg = newImg + "." + getExp;
			} else if (getExp == "gif") {
				newImg = newImg + "." + getExp;
			} else if (getExp == "png") {
				newImg = newImg + "." + getExp;
			}

			if (winWimg <= 750) {
				$("img.img750", elem).each(function() {
					$(this).attr("src", $(this).attr("src").replace(imgSrc[i], newImg));
				});
			} else {
				$("img.img750", elem).each(function() {
					$(this).attr("src", $(this).attr("src").replace(newImg, imgSrc[i]));
				});
			}
			
			if (window.devicePixelRatio > 1 || winWimg <= 750) {
				$("img.img2x", elem).each(function() {
					$(this).attr("src", $(this).attr("src").replace(imgSrc[i], newImg));
				});
			}
			
		}
	}
	changeImages();
	$(window).resize(function() {
		changeImages();
	});
});

/*=======================================================
					Heightline
 =======================================================*/
jQuery(document).ready(function($) {
	$.fn.heightLine = function( options ){
		 var container = $( this );			
		 function setHeight() {
			var winWlh = $(window).width();
			var maxHeight = 0;
			column = $( container );
			if(winWlh <= 0){
				column.removeAttr( 'style' );		
			}else{
				column.css( 'height', 'auto' );
				column.each( function() {
					if( $( this ).height() > maxHeight ) {
					maxHeight = $( this ).height();
				}
				});
				column.height( maxHeight );
			}
		}
		setHeight();		
		$(window).resize( function() {
			setHeight();
		});
	};
});

/*=======================================================
					Footer BTN Hide and Seek
 =======================================================*/
$(window).on('scroll',function(){
	footerHideAndSeek();
});
$(document).ready(function(){
	footerHideAndSeek();
});
function footerHideAndSeek() {
  var target = $('#btnFixed');
  var scrollVolume = $(window).scrollTop();
  if ( scrollVolume >= 200 ) {
	target.addClass('active');  
  } else {
	  target.removeClass('active');
  }
}