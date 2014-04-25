$( document ).ready(function(){ 
	var counter = 0;
	var gridVals = [0,1,2,3,4,5,6,7,8];
	
	var check = function(){
		if (gridVals[0]===gridVals[1] && gridVals[0]===gridVals[2]) {$('p').html("Player " + gridVals[0] + " wins in top row!")2}
			else if (gridVals[3]===gridVals[4] && gridVals[3]===gridVals[5]) {console.log("horizontal mid row winner")}
			else if (gridVals[6]===gridVals[7] && gridVals[6]===gridVals[8]) {console.log("horizontal top row winner")}
			else if (gridVals[0]===gridVals[3] && gridVals[0]===gridVals[6]) {console.log("horizontal top row winner")}
			else if (gridVals[1]===gridVals[4] && gridVals[1]===gridVals[7]) {console.log("horizontal top row winner")}
			else if (gridVals[2]===gridVals[5] && gridVals[2]===gridVals[8]) {console.log("horizontal top row winner")}
			else if (gridVals[0]===gridVals[4] && gridVals[0]===gridVals[8]) {console.log("horizontal top row winner")}
			else if (gridVals[2]===gridVals[4] && gridVals[2]===gridVals[6]) {console.log("horizontal top row winner")}						
		}

	$('.tbox').click(function(){
		if (counter % 2 === 0){
			$(this).css('background-color', 'blue');
			var int = parseInt($(this).attr('data-id'));
			gridVals[int]= "x";}
		else {
			$(this).css('background-color', 'red');
			var int = parseInt($(this).attr('data-id'));
			gridVals[int]= "y";}
		$(this).off('click')
		counter++;
		console.log(gridVals);
		check();
	});  
});

