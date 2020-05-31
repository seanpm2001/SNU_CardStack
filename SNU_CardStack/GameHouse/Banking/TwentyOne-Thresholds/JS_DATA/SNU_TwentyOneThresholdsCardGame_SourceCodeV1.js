// Start of script
// TwentyOne - Threshold (Card Game) SNU Source code
var playerWinner = "Null";
var playerCurrent = "Null";
int playerCountMax = 4;
int playerCountMin = 2;
/* Rules
There has to be at least 2 players. If only 1 connects, they will be put up against an automated dealer.
Whoever wins becomes the next dealer */
// Need a snow theme
function howToPlay {
	console.log("Welcome to TwentyOne - Thresholds!\nThis is a custom game of twenty one that stretches out much longer than a simple game of TwentyOne.");
	alert("Welcome to TwentyOne - Thresholds!\nThis is a custom game of twenty one that stretches out much longer than a simple game of TwentyOne.");
	console.log("How to play 1/3\nIn this edition of TwentyOne, you will go through 21 thresholds. Whoever gets the most sets of 210 will win. Each threshold allows a chance for a player to get 10 21s, or as many as they can. The max score for each threshold per player is 210.");
	alert("How to play 1/3\nIn this edition of TwentyOne, you will go through 21 thresholds. Whoever gets the most sets of 210 will win. Each threshold allows a chance for a player to get 10 21s, or as many as they can. The max score for each threshold per player is 210.");
	console.log("How to play 2/3\nIn each threshold, you will have a dealer give you cards. You have to get exactly 21 during one or more of the 10 plays per threshold. You don't get to retry. If you feel like you won't make it, you can stand, and if the other player busts (gets 22 or more) you get a 21");
	alert("How to play 2/3\nIn each threshold, you will have a dealer give you cards. You have to get exactly 21 during one or more of the 10 plays per threshold. You don't get to retry. If you feel like you won't make it, you can stand, and if the other player busts (gets 22 or more) you get a 21");
	console.log("How to play 3/3\nYou have to try and get as many 21s as you can in 210 plays. Whoever has the most 21s will win. If there is a tie, one last game must be played against the dealer.");
	alert("How to play 3/3\nYou have to try and get as many 21s as you can in 210 plays. Whoever has the most 21s will win. If there is a tie, one last game must be played against the dealer.");
}
function threshold1 {

}
function ace1 {
	console.log(playerCurrent + " drew an ace");
}
function hitC {
	console.log(playerCurrent + " has hit");
	draw1();
}
function draw1 {
	// Don't know how to set this up yet.
}
function standC {
	console.log(playerCurrent + " has took a stand and is now out of the current play.");
}
function endGame {
	alert("End game?\nDo you want to quit?");
}
function dealer1 {
	// Don't know how to set this up yet.
}
function deckFr { // French deck, 52 cards
	// Don't know how to set this up yet.
}
function decGerm { // German deck, 52 cards
	// Don't know how to set this up yet.
}
/* File version history
Version 1 - March 24th 2020
Version 2 - Coming soon
*/
// End of script
