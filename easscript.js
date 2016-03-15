/*JavaScript variables*/
var row = 16;
var column = 16;

/*JQuery variable*/
var $row = $("<div />", {class: 'row'});
var $box = $("<div />", {class: 'box'});
var $solid = $("<div />", {class: 'solid'});

/*JQuery and Javascript*/

$(document).ready(function(){
	for(var i = 0; i < row; i++){
		$row.append($box.clone());
	};

	for(var i = 0; i < column; i++){
		$('#wrapper').append($row.clone());
	};

	$('.box').mouseenter(function(){
		$(this).addClass('solid');
	});
	
});



/*	delete box
$('.box').mouseleave(function(){
		$('.box').

$('.box').append($solid);

*/