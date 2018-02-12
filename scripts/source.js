$(document).ready(function() {

	//Page navigation
	$('.main').fullpage({
		anchors:['home', 'about', 'portfolio', 'contact']
	});

	//Nav icon change
	$('.navbar__link').hover(() => {
		$('.navbar__link').css('color', 'rgb(54, 190, 145)');
		}, () => {
		$('.navbar__link').css('color', '#fff');
	});

	$('.box--solitaire').click(function(){
		console.log('trigger')
	});







});

