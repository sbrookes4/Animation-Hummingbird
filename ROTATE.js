// alert("hello");
// Created this demo in about 30 minutes with knowing just 1 week of jQuery
// view on my portfolio site: brookesportfolio.com/ROTATE.html
$(document).ready(function() {

$("button").click(function(){

	for(i = 0; i < 1000; i++){

	$("#hum").animate({left: "70vw"},2000);
	$("#hum").animate({top: "29vw"},2000);
	$("#hum").animate({left: "30px"},2000);
	$("#hum").animate({top: "60px"},2000);

		}

	});

 });