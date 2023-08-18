/*=======================================================
					Setting Campaign							
=======================================================*/
$(function(){
    var show=false;

	function floatBnr() {
		if(show==false){
			show=true;
            $('.floatBnr').addClass('isShow');
		}else{
			show=false;
            $('.floatBnr').removeClass('isShow');
		}
	}

    $('.floatBnr_btn, .floatBnr_hide').click(function() {
        floatBnr();
    })    
});
