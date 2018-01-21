$(document).ready(function() {

	//Page navigation
	$('.main').fullpage({
		anchors:['home', 'about', 'portfolio', 'contact']
	});

	//Nav icon change
	$('.navbar__link').hover(() => {
			$('.navbar__link').css('color', '#fff');
			}, () => {
			$('.navbar__link').css('color', 'rgb(54, 190, 145)');
		console.log(this);
	});

	// $('section.active')








});

