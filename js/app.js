$(document).ready(function() {

var background = document.getElementById("background");
var speed = 1.1;

window.onscroll = function()
{
   var yOffset = window.pageYOffset;
   background.style.backgroundPosition = "0px "+ (yOffset / speed) + "px";
}

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

$('.menu-icon').on('click', function() {
	if($('.menu-overlay').is(':hidden')) {
		$('.menu-overlay').show();
	}
	else if($('.menu-overlay').is(':visible')) {
		$('.menu-overlay').hide();
	}
});

$('.menu1, .menu2, .menu3').on('click', function() {
	$('.menu-overlay').hide();
});

});