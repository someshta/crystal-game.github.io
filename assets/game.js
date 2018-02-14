//Variables for each "crystal", will generate random number value
var crystal1 = Math.floor((Math.random()* 12)+ 1);
console.log("crystal 1 is worth " + crystal1);

var crystal2 = Math.floor((Math.random()* 12)+ 1);
console.log("crystal 2 is worth " + crystal2);

var crystal3 = Math.floor((Math.random()* 12)+ 1);
console.log("crystal 3 is worth " + crystal3);

var crystal4 = Math.floor((Math.random()* 12)+ 1);
console.log("crystal 4 is worth " + crystal4);
//variable to hold users score
var currentScore = 0;
// Variable that creates the goal score
var wins = 0;
var losses = 0;
var computerChoice
//function will make computer choose random number
function chooseNumber() {
	computerChoice = Math.floor((Math.random()* 120)+19);
console.log(computerChoice);
$('#computerChoice').text(computerChoice);
}
chooseNumber();

function startGame() { //function that holds game 

// on clicking crystal image- add value to score, alerts score
	$( '#bfly' ).on('click', function() {
		currentScore += crystal1;
		alert("Your score is " + currentScore);
		compareScores();

	});

	$( '#unicorn' ).click(function() {
		currentScore += crystal2;
		alert("Your score is " + currentScore);
		compareScores();
	});

	$( '#duckboi' ).click(function() {
		currentScore += crystal3;
		alert("Your score is " + currentScore);
		compareScores();
	});

	$( '#eagle' ).on('click', function() {
		currentScore += crystal4;
		alert("Your score is " + currentScore);
		compareScores();
	});
 }
//6. if value === computers number, user wins, prompts user to replay
	function compareScores() {
	if (currentScore === computerChoice) {
		alert("YOU WON! Click the replay button to play again");
		wins ++;
		$('#wins').text(wins);
		
	}
//7. if value > than computer number, user loses, prompts user to replay
	else if (currentScore > computerChoice) {
		alert("YOU LOST! Click the replay button to try again");
		losses++;
		$('#losses').text(losses);
		
		
	}
}
//function for when user clicks the replay button. score resets, "crystals" get new value and computer chooses new goal score
function replay() {
	currentScore = 0;
	crystal1 = Math.floor((Math.random()* 12)+ 1);
	crystal2 = Math.floor((Math.random()* 12)+ 1);
	crystal3 = Math.floor((Math.random()* 12)+ 1);
	crystal4 = Math.floor((Math.random()* 12)+ 1);
	chooseNumber();
}		
startGame();