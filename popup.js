// after 3 boring seconds of viewing the website, give the user summin' nice to look at
setTimeout( (function() {
	$('#pop-up-container').fadeIn('fast'); // fade in pop-up

	// check if pop-up is scrolled and run associated handler
	$('#pop-up-container').bind('scroll', function(e) {
		parallaxScroll();
	});
	function parallaxScroll() {
		var scrolledY = $('#pop-up-container').scrollTop();
		$('#chisel').css('top','+20' - (((scrolledY)*0.2)) + '%');
		$('#shavings').css('top','+10' - (((scrolledY)*-0.2)) + '%');
	}
}), 1000);

//$('#pop-up').fadeOut('fast');



// after 3 boring seconds of viewing the website, give the user summin' nice to look at
// setTimeout( (function(){
// 	$('#pop-up-container').fadeIn('fast');
// 	$('#pop-up-container').bind('scroll', function() {
// 		console.log('scroll');
// 	});
// }), 1000);


// $('#pop-up-container').on('scroll', function() {
// 		console.log('scroll');
// });
