$(function(){

	//semua box bisa di drag
	$('.box').draggable();

	//	box 1 bisa di drag
	$('#box1').draggable({ 
		scroll: true,
		revert: 'invalid'
	});
	
	// 	box 2 hanya bisa di drag horizontal
	$('#box2').draggable({
		axis: "x"
	});

	// 	box 3 hanya bisa di drag vertical
	$('#box3').draggable({
		axis: "y"
	});

	// 	box 4 hanya bisa di drag di area container
	$('#box4').draggable({
		revert: 'invalid',
		containment: ".container"
	});

	/* --- DROPPABLE ----*/
	/* ------------------*/
	$('#droppable').droppable({
		accept: '#box1',
		drop: function() {
			$(this).text("when a box got attitude, drop it like it's hot!");
		}
	})

	/* ---- SORTABLE ----*/
	/* ------------------*/
	$('#sortable').sortable({
		connectWith: '#sortableToo',
		placeholder: 'placeholderBox'
	});

	$('#sortableToo').sortable({
		connectWith: '#sortable'
	});

	/* ---- ACCORDION ----*/
	/* ------------------*/
	$('#accordion').accordion({
		collapsible: true,
		heightStyle: 'content'
	});

});