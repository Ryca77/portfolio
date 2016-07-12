$(document).ready(function() {

var background = document.getElementById("background");
var speed = 1.1;

window.onscroll = function()
{
   var yOffset = window.pageYOffset;
   background.style.backgroundPosition = "0px "+ (yOffset / speed) + "px";
}

});