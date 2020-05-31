// Start of script
// TwentyOne (Card Game) SNU Source code
var playerWinner = "Null";
var playerCurrent = "Null";
int playerCountMax = 4;
int playerCountMin = 2;
/* Rules
There has to be at least 2 players. If only 1 connects, they will be put up against an automated dealer.
Whoever wins becomes the next dealer */
function twentyOne {
	alert("Twenty One!\n"playerWinner + " has reached twenty-one first!" + playerWinner + " wins!");
	console.log(playerWinner + " has reached twenty-one first!" + playerWinner + " wins!");
}
function ace1 {
	console.log(playerCurrent + " drew an ace");
}
function hitC { // Hit
	console.log(playerCurrent + " has hit");
	draw1();
}
function draw1 {
	// Don't know how to set this up yet.
}
function standC { // Stand
	console.log(playerCurrent + " has folded and is now out of the current game");
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
