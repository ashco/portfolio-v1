$(document).ready(function() {



	//Page navigation
	$('.main').fullpage({
		anchors:['home', 'portfolio', 'about', 'contact']
	});

	//Nav icon change
	$('.navbar__link').hover(() => {
		$('.navbar__link').css('color', 'rgb(54, 190, 145)');
		}, () => {
		$('.navbar__link').css('color', '#fff');
	});


	// var waypoints = $('portfolio__textbox').waypoint({
	// 	handler: function(){
	// 		console.log('trigger')
	// 	},
	// 		offset: '5%'
		

	//   });



});

