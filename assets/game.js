//Variables for each crystal, will generate random number value
var crystal1 = Math.floor((Math.random()* 12)+ 1);
console.log("crystal 1 is worth " + crystal1);

var crystal2 = Math.floor((Math.random()* 12)+ 1);
console.log("crystal 1 is worth " + crystal2);

var crystal3 = Math.floor((Math.random()* 12)+ 1);
console.log("crystal 1 is worth " + crystal3);

var crystal4 = Math.floor((Math.random()* 12)+ 1);
console.log("crystal 1 is worth " + crystal4);
//variable to hold users score
var currentScore = 0;
// Variable that creates the score user tries to get to
var computerChoice = Math.floor((Math.random()* 120)+19);
console.log(computerChoice);

$('#computerChoice').append(computerChoice);
	
function startGame() { //function that holds game 

// on clicking crystal image- add value to score, alerts score
	$( '#crystal1' ).on('click', function() {
		currentScore += crystal1;
		alert(currentScore);
		compareScores();

	});

	$( '#crystal2' ).click(function() {
		currentScore += crystal2;
		alert(currentScore);
		compareScores();
	});

	$( '#crystal3' ).click(function() {
		currentScore += crystal3;
		alert(currentScore);
		compareScores();
	});

	$( '#crystal4' ).click(function() {
		currentScore += crystal4;
		alert(currentScore);
		compareScores();
	});
 }
//6. if value === computers number, user wins, game starts over
	function compareScores() {
	if (currentScore === computerChoice) {
		alert("YOU WON!");
	}
//7. if value > than computer number, user loses, game starts over
	else if (currentScore > computerChoice) {
		alert("YOU LOST!");
	}
}
		
startGame();