// if the pop-up hasn't been viewed already, let's pop it up
if(localStorage.popUpViewed == undefined) {
	startPopUp();
}

// after 3 boring seconds of viewing the website, give the user summin' nice to look at
function startPopUp() {
	setTimeout( (function() {
		$('#pop-up-container').fadeIn('fast'); // fade in pop-up

		// check if pop-up is scrolled and run associated handler
		$('#pop-up-container').bind('scroll', function(e) {
			parallaxScroll();
		});
		function parallaxScroll() {
			var scrolledY = $('#pop-up-container').scrollTop();
			// if you want to changed scroll speed, modify the multiplier (aka the *0.2 and *-0.2 numbers)
			$('#chisel').css('top','+20' - (((scrolledY)*0.2)) + '%');
			$('#shavings').css('top','+10' - (((scrolledY)*-0.2)) + '%');
		}
		// close the pop-up
		$('#close-btn>p').click(function() {
			$('#pop-up-container').fadeOut('fast');
		});

		// so that we can hit enter to check the checkbox
		$('input:checkbox').keypress(function(e){
		    if((e.keyCode ? e.keyCode : e.which) == 13){
		        $(this).trigger('click');
		    }
		});

		// so that we can hit enter to close :( this beautiful pop-up
		$('#close-btn>p').keypress(function(e){
		    if((e.keyCode ? e.keyCode : e.which) == 13){
		        $(this).trigger('click');
		    }
		});

	}), 3000);

	// set local storage to prevent future pop-ups
	localStorage.setItem('popUpViewed', true)
}