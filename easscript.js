/*JQuery and Javascript*/

$(document).ready(function(){

	/*JQuery variable*/

	var $row = $("<div />", {class: 'row'});
	var $box = $("<div />", {class: 'box'});
	var $solid = $("<div />", {class: 'solid'});

	/* Function for creating a grid given two attributes */

	var gridCreate = function(input1, input2){
		var rows 	= input1;
		var columns = input2;
		
		/*Need to clone $row before $box.clone */
		var _row 	= $row.clone();

		for(i = 0; i < rows; i++){
			_row.append($box.clone());
		};

		for(i = 0; i < columns; i++){
			$('#wrapper').append(_row.clone());
		};

		$('.box').mouseenter(function(){
			$(this).addClass('solid');
		});
	};	

	/* Initial grid with 16x16 */
	gridCreate(16, 16);

	/*Clear function*/
	var clearGrid = function () {
		$("#wrapper").empty();
	};	

	/* The new grid function, propogated by a prompt */
	var newGrid = function(){
		var input1 = prompt('How many rows would you like to have (2-20)?');
		var input2 = prompt('How many columns would you like?');
		gridCreate(input1, input2);
	}
		
	/***********************Event handler*************************/

	$('#clear').on('click', function(){
		clearGrid();
		newGrid();
	});
});