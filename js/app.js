$(document).ready(function() {

function backgroundScroll() {
	if($(window).width() >= 800) {
		var background = document.getElementById("background");
		var speed = 1.1;

		window.onscroll = function()
		{
		var yOffset = window.pageYOffset;
		background.style.backgroundPosition = "0px "+ (yOffset / speed) + "px";
		}
	}
	else if($(window).width() <= 800) {
		$(document).scroll(function() {
			$('#background').css('background-position', '0px ' + $(document).scrollTop() + 'px');
    	});
	}
};
backgroundScroll();

$(".name").click(function() {
	$('html,body').animate( {
		scrollTop: $("#background").offset().top
    } ,'1000');
});

$(".nav1, .menu1").click(function() {
	$('html,body').animate( {
		scrollTop: $(".meet-ryan").offset().top - 70
    } ,'1000');
});

$(".nav2, .menu2").click(function() {
	$('html,body').animate( {
		scrollTop: $(".projects").offset().top - 70
    } ,'1000');
});

$(".nav3, .menu3").click(function() {
	$('html,body').animate( {
		scrollTop: $(".contact").offset().top - 70
    } ,'1000');
});

$('.menu-icon, .close-icon').on('click', function() {
	if($('.menu-overlay').is(':hidden')) {
		$('.menu-overlay').animate({width:'toggle'});
		$('.menu-icon').animate({height:'toggle'});
		$('.close-icon').delay(500).animate({width: 'toggle'});
	}
	else if($('.menu-overlay').is(':visible')) {
		$('.menu-overlay').animate({width:'toggle'});
		$('.close-icon').animate({width: 'toggle'});
		$('.menu-icon').delay(500).animate({height: 'toggle'});
	}
});

$('.menu1, .menu2, .menu3').on('click', function() {
	$('.menu-overlay').hide();
	$('.close-icon').animate({width: 'toggle'});
	$('.menu-icon').delay(500).animate({height: 'toggle'});
});

function displayDescriptions() {
	if($(window).width() >= 800) {
		$('.quiz').on('mouseenter', function() {
			$('.quiz-content').animate({height:'toggle'});
		});

		$('.quiz').on('mouseleave', function() {
			$('.quiz-content').fadeOut(500);
		});

		$('.city-bike').on('mouseenter', function() {
			$('.bike-content').animate({height:'toggle'});
		});

		$('.city-bike').on('mouseleave', function() {
			$('.bike-content').fadeOut(500);
		});
	}
	else if($(window).width() <= 800) {
		$('.project-list p').show();
	}
}
displayDescriptions()

});