/*=======================================================
					Setting Common							
=======================================================*/
$(window).load(function() {	
	function setLp(){
		var headerH2 = $('#header').height();
		
		$('#distance2').css({'margin-top':headerH2});
		$('.posAbs2').css({'top':-headerH2});
	}
	
	setLp();
	
	$(window).resize(function() {
        setLp();
    });
});
