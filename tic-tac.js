$( document ).ready(function(){ 
	var counter = 0;
	var gridVals = [0,1,2,3,4,5,6,7,8];
	
	var check = function(){
		if (gridVals[0]===gridVals[1] && gridVals[0]===gridVals[2]) {
			$('p').html("Player " + gridVals[0] + " wins in top row!");
			$('#horline3').show("slow", function(){})
		}
			
			else if (gridVals[3]===gridVals[4] && gridVals[3]===gridVals[5]) {
				$('p').html("Player " + gridVals[3] + " wins in middle row!")
				$('#horline2').show("slow", function(){})
			}
			
			else if (gridVals[6]===gridVals[7] && gridVals[6]===gridVals[8]) {
				$('p').html("Player " + gridVals[6] + " wins in bottom row!")
				$('#horline1').show("slow", function(){})
			}
			
			else if (gridVals[0]===gridVals[3] && gridVals[0]===gridVals[6]) {
				$('p').html("Player " + gridVals[0] + " wins in left row!")
				$('#vertline1').show("slow", function(){})
			}
			
			else if (gridVals[1]===gridVals[4] && gridVals[1]===gridVals[7]) {
				$('p').html("Player " + gridVals[1] + " wins in middle row!")
				$('#vertline2').show("slow", function(){})
			}
			
			else if (gridVals[2]===gridVals[5] && gridVals[2]===gridVals[8]) {
				$('p').html("Player " + gridVals[2] + " wins in right row!")
				$('#vertline1').show("slow", function(){})
			}
			
			else if (gridVals[0]===gridVals[4] && gridVals[0]===gridVals[8]) {
				$('p').html("Player " + gridVals[0] + " wins in digonal row!")
				$('#diagline2').show("slow", function(){})
			}
			
			else if (gridVals[2]===gridVals[4] && gridVals[2]===gridVals[6]) {
				$('p').html("Player " + gridVals[2] + " wins in diagonal row!")
				$('#diagline1').show("slow", function(){})		
				}		
		}



	$('td').click(function(){
		if (counter % 2 === 0){
			// $(this).css('background-color', 'blue');
			var int = parseInt($(this).attr('data-id'));
			gridVals[int]= "x";
  		$(this).html('X').css("cursor","default");
  		}
		else {
			// $(this).css('background-color', 'red');
			var int = parseInt($(this).attr('data-id'));
			gridVals[int]= "y";
			$(this).html('O').css("cursor","default");
		}
		$(this).off('click')
		counter++;
		console.log(gridVals);
		check();
	});  

});

