// JavaScript Document

/* DATE PICKER */
  $(".flatpickr").flatpickr({
	  minDate: new Date().fp_incr(2),
	  maxDate: new Date().fp_incr(91), // 14 days from now
	  dateFormat: "Y年m月d日",
	  /* disable:[
		function(date) {
		  return (date.getDay() === 3 );
		}
	  ],*/
	  locale:'ja'
  });

/* VALIDATE */
