

/*JQuery and Javascript*/

$(document).ready(function(){
	

	/*JQuery variable*/
	var $row = $("<div />", {class: 'row'});
	var $box = $("<div />", {class: 'box'});
	var $solid = $("<div />", {class: 'solid'});

	

	var gridCreate = function(){
		var row = 16;
		var column = 16;
		for(var i = 0; i < row; i++){
			$row.append($box.clone());
		};

		for(var i = 0; i < column; i++){
			$('#wrapper').append($row.clone());
		};
	};	
	gridCreate();

	$('.box').mouseenter(function(){
		$(this).addClass('solid');
	});

	/*Prompt*/

	$('#clear').click(function(){
		var row = prompt('How many rows would you like to have?');
		var column = prompt('And how many columns would you like to have?');


	});
	
});



/*	delete box


	
$('.box').mouseleave(function(){
		$('.box').

$('.box').append($solid);

*/