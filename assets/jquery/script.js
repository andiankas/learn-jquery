// script.js

$(function(){

	// // Simple syntax 01
	// $('button').click(function(){
	// 	$('#box').fadeOut(1000);
	// });

	// ----------------------------

	// // Selector 02
	// $('h2,h3,h4').css('border','solid 1px red');

	// ----------------------------

	// // 03 EVENTS
	// $('#box').click(function() {
	// 	alert('you just clicked the box');
	// });

	// $('input').blur(function() {
	// 	if ($(this).val() == "" ) {
	// 		$(this).css('border','solid 1px red');
	// 		$('#box').text('forgot to add text?');
	// 	}
	// });

	// $('input').keydown(function() {
	// 	if ($(this).val() !== "") {
	// 		$(this).css('border','solid 1px #777');
	// 		$('#box').text('Thankyou!');
	// 	}
	// });

	// $('#box').hover(function() {
	// 	$(this).text('you hovered in!');
	// }, function(){
	// 	$(this).text('you hovered out!')
	// });
	// // -----------------------------------------

	// // 04 CHAINING
	// $('.notification-bar').delay(2000).slideDown().delay(3000).fadeOut();
	
	// //---------------------------------------

	// // 05 HIDING, SHOWING & FADING CONTENT
	// $('h1').hide();	
	// $('.hidden').show();
	// $('.hidden').fadeIn(1000);
	// $('#box1').click(function(){
	// 	$(this).fadeOut(1000, 0.75, function() {
			
	// 	});
	// });

	// // --------------------------------------

	// // 06 Animate Method
	// $('#left').click(function() {
		
	// 	$('.box').animate({
	// 		left: '-=40px',
	// 		fontSize: '+=2px'
	// 	},	function() {
	// 		/* stuff to do after animation is complete */
	// 	});
	// });

	// $('#up').click(function() {
		
	// 	$('.box').animate({
	// 		top: '-=40px',
	// 		opacity: '+=0.1'
	// 	},	function() {
	// 		/* stuff to do after animation is complete */
	// 	});
	// });

	// $('#right').click(function() {
		
	// 	$('.box').animate({
	// 		left: '+=40px',
	// 		fontSize: '-=2px'
	// 	},	function() {
	// 		/* stuff to do after animation is complete */
	// 	});
	// });

	// $('#down').click(function() {
		
	// 	$('.box').animate({
	// 		top: '+=40px',
	// 		opacity: '-=0.1'
	// 	},	function() {
	// 		/* stuff to do after animation is complete */
	// 	});
	// });

	// // -------------------------------------------

	// 07 MODIFYING CSS
	$('#circle2').css({ 
		'background' : '#00b894',
		'display': 'inline-block',
	    'color': 'white',
	    'text-align': 'center',
	    'line-height': '140px',
	    'height': '140px',
	    'width': '140px',
	    'margin': '40px'
	})

});