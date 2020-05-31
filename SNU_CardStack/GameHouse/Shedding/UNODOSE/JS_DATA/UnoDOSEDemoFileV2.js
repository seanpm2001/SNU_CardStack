// Start of script
// SNU CardStack JavaScript file
// For: UNODOSE (Libre royalty free version of UNO, based off the name of my first 2 fish, and counting to 2 in Spanish)
// Turn system
/* Game styles
1984 edition
1994 edition
Mattell edition
SNU edition
Graphic modes
Flat
SNU
Gradient
16 color
256 color
Basic
Default
---
Tags
#500game
#Uno
---
Theme packs
Aquatic
(Other)
*/
/* New cards in version 2 (January 13th 2020)
- Orange, Purple, Pink, and Brown themed cards (there won't be any black, gray/grey, or white cards)
- Draw 25, draw 6, and draw 8 cards
*/
boolean isTurn = false; // Checks if it is a users turn or not
var currentTurn = "Anonymous1"; // Prints out the username of the current turn
// Score system
int score1 = 0; // Score can be disabled for this game if the user/player requests it for the game
int maxScore = 508; // The maximum achievable score, 499 + a 9 card of any color = 508
function findWinPlayer { // Finds the winning player, checks after each match
	// Find the winning player
	// Script goes here
	var usernameX == winPlayer;
	if score1 > 499 {
		// alert("You win!");
		console.log("Say UNO!"); // Prints in the F12 menu (Browser developer tools menu) to remind the player to call UNO!
	} else {
		alert(winPlayer + " says: \nUNO!"); // The winning player calls UNO
		console.log(winPlayer() + " has won the game, UNO!"); // Declares the winner
}}
function listRules {
	// List of the rules of UNO
	console.log("Rules of UNO (UNODOSE Incompatible)");
	console.log("The aim of the game is to be the first player to score 500 points, achieved (usually over several rounds of play) by being the first to play all of one's own cards and scoring points for the cards still held by the other players.");
	console.log("The deck consists of 108 cards: four each of 'Wild' and 'Wild Draw Four,' and 25 each of four different colors (red, yellow, green, blue). Each color consists of one zero, two each of 1 through 9, and two each of 'Skip,' 'Draw Two,' and 'Reverse.' These last three types are known as 'action cards.'");
	console.log("To start a hand, seven cards are dealt to each player, and the top card of the remaining deck is flipped over and set aside to begin the discard pile. The player to the dealer's left plays first unless the first card on the discard pile is an action or Wild card (see below). On a player's turn, they must do one of the following:");
	console.log("play one card matching the discard in color, number, or symbol");
	console.log(">>>play a Wild card, or a playable Wild Draw Four card (see restriction below)");
	console.log(">>>draw the top card from the deck, then play it if possible");
	console.log("Cards are played by laying them face-up on top of the discard pile. Play proceeds clockwise around the table.");
	console.log("Action or Wild cards have the following effects:");
	console.log("Card 	Effect when played from hand 	Effect as first discard");
	console.log("Skip 	Next player in sequence misses a turn 	Player to dealer's left misses a turn");
	console.log("Reverse 	Order of play switches directions (clockwise to counterclockwise, or vice versa) 	Dealer plays first; play proceeds counterclockwise");
	console.log("Draw Two (+2) 	Next player in sequence draws two cards and misses a turn 	Player to dealer's left draws two cards and misses a turn");
	console.log("Wild 	Player declares the next color to be matched (may be used on any turn even if the player has matching color) 	Player to dealer's left declares the first color to be matched and plays a card in it");
	console.log("Wild Draw Four/Draw Four Wild (+4 and wild) 	Player declares the next color to be matched; next player in sequence draws four cards and misses a turn. May be legally played only if the player has no cards of the current color (see Penalties). 	Return card to the deck, shuffle, flip top card to start discard pile");
	console.log("A player who draws from the deck must either play or keep that card and may play no other card from their hand on that turn.");
	console.log("A player may play a Wild card at any time, even if that player has other playable cards.");
	console.log("A player may play a Wild Draw Four card only if that player has no cards matching the current color. The player may have cards of a different color matching the current number or symbol or a Wild card and still play the Wild Draw Four card.[4] A player who plays a Wild Draw Four may be challenged by the next player in sequence (see Penalties) to prove that their hand meets this condition.");
	console.log("If the entire deck is used during play, the top discard is set aside and the rest of the pile is shuffled to create a new deck. Play then proceeds normally.");
	console.log("It is illegal to trade cards of any sort with another player.");
	console.log("A player who plays their next-to-last-card must call 'Uno' as a warning to the other players.[5]");
	console.log("The first player to get rid of their last card ('going out') wins the hand and scores points for the cards held by the other players. Number cards count their face value, all action cards count 20, and Wild and Wild Draw Four cards count 50. If a Draw Two or Wild Draw Four card is played to go out, the next player in the sequence must draw the appropriate number of cards before the score is tallied.");
	console.log("The first player to score 500 points wins the game.");
	console.log("Penalties");
	console.log("If a player does not call 'Uno' after laying down their next-to-last card and is caught before the next player in sequence takes a turn (i.e., plays a card from their hand, draws from the deck, or touches the discard pile), they must draw two cards as a penalty. If the player is not caught in time (subject to interpretation) or remembers to call 'Uno' before being caught, they suffer no penalty. If a player falsely calls 'Uno' while having multiple cards in their hand, they must draw two cards.");
	console.log("If a player plays a Wild Draw Four card, the following player can challenge its use. The player who used the Wild Draw Four must privately show their hand to the challenging player, in order to demonstrate that they had no matching colored cards. If the challenge is correct, then the challenged player draws four cards instead. If the challenge is wrong, then the challenger must draw six cards; the four cards they were already required to draw plus two more cards.");
	console.log("End of rule list");
	// List of the rules of UNODOSE
	console.log("Rules of UNODOSE (UNO Incompatible)");
	console.log("Coming soon");
}
function checkScore {
	if score > 499 {
		findWinPlayer();
	} else { // Just wanted to use an 'else' loop
		findWinPlayer();
}
function newTurn {
	console.log("Starting next turn");
}
boolean scoreOn = false;
if scoreOn = false {
	alert("Score is disabled for this game");
	console.log("Notice: Score is disabled for this game");
}
// Card system
function discardPile {
	var recentDiscard = "";
	// Table data
}
function resetDiscardPile {
	// Script goes here to reset the discard pile
	console.log("All cards have been used.\nThe discard pile has been reset\nPlaying may now continue normally");
}
function cardMax {
	int maxCardCount = 108; // The maximum amount of cards for a game of UNO is 108, 25 of the 4 colored cards, draw 4, draw 2, reverse, skip, and wild
}
// Blue cards
function blueDeck1 {
	
}
function blue0Card1 {
	
}
function blue1Card1 {
	
}
function blue2Card1 {
	
}
function blue3Card1 {
	
}
function blue4Card1 {
	
}
function blue5Card1 {
	
}
function blue6Card1 {
	
}
function blue7Card1 {
	
}
function blue8Card1 {
	
}
function blue9Card1 {
	
}
// Red cards
function redDeck1 {
	
}
function red0Card1 {
	
}
function red1Card1 {
	
}
function red2Card1 {
	
}
function red3Card1 {
	
}
function red4Card1 {
	
}
function red5Card1 {
	
}
function red6Card1 {
	
}
function red7Card1 {
	
}
function red8Card1 {
	
}
function red9Card1 {
	
}
// Green cards 
function greenDeck1 {
	
}
function green0Card1 {
	
}
function green1Card1 {
	
}
function green2Card1 {
	
}
function green3Card1 {
	
}
function green4Card1 {
	
}
function green5Card1 {
	
}
function green6Card1 {
	
}
function green7Card1 {
	
}
function green8Card1 {
	
}
function green9Card1 {
	
}
// Yellow cards
function yellowDeck1 {
	
}
function yellow0Card1 {
	
}
function yellow1Card1 {
	
}
function yellow2Card1 {
	
}
function yellow3Card1 {
	
}
function yellow4Card1 {
	
}
function yellow5Card1 {
	
}
function yellow6Card1 {
	
}
function yellow7Card1 {
	
}
function yellow8Card1 {
	
}
function yellow9Card1 {
	
}
// Orange cards (new)
function orangeDeck1 {
	
}
function orange0Card1 {
	
}
function orange1Card1 {
	
}
function orange2Card1 {
	
}
function orange3Card1 {
	
}
function orange4Card1 {
	
}
function orange5Card1 {
	
}
function orange6Card1 {
	
}
function orange7Card1 {
	
}
function orange8Card1 {
	
}
function orange9Card1 {
	
}
// Pink cards (new)
function pinkDeck1 {
	
}
function pink0Card1 {
	
}
function pink1Card1 {
	
}
function pink2Card1 {
	
}
function pink3Card1 {
	
}
function pink4Card1 {
	
}
function pink5Card1 {
	
}
function pink6Card1 {
	
}
function pink7Card1 {
	
}
function pink8Card1 {
	
}
function pink9Card1 {
	
}
// Purple cards (new)
function purpleDeck1 {
	
}
function purple0Card1 {
	
}
function purple1Card1 {
	
}
function purple2Card1 {
	
}
function purple3Card1 {
	
}
function purple4Card1 {
	
}
function purple5Card1 {
	
}
function purple6Card1 {
	
}
function purple7Card1 {
	
}
function purple8Card1 {
	
}
function purple9Card1 {
	
}
// Brown cards (new)
function brownDeck1 {
	
}
function brown0Card1 {
	
}
function brown1Card1 {
	
}
function brown2Card1 {
	
}
function brown3Card1 {
	
}
function brown4Card1 {
	
}
function brown5Card1 {
	
}
function brown6Card1 {
	
}
function brown7Card1 {
	
}
function brown8Card1 {
	
}
function brown9Card1 {
	
}
// Special cards
// Reverse
function blueReverse1 {
	
}
function redReverse1 {
	
}
function greenReverse1 {
	
}
function yellowReverse1 {
	
}
// Draw 25
// Deaw 25 is a choice card, you are given 2 options. You can agree to something or draw 25. This is based off the draw 25 meme
function draw25Choice {
	var choice1 = "";
	var choice2 = "Draw 25";
	console.log("Someone has used a draw 25 card on you. You have 2 choices:");
	alert("Someone has used a draw 25 card on you. You have 2 choices:");
	console.log(choice1() + " or " + choice2());
	alert(choice1() + " or " + choice2()):
	var yourChoice = "";
	if yourChoice == choice2 {
		draw25();
		console.log("You drew 25");
	} else {
		console.log("You chose " + choice1());
}}
function blueDraw25_1 {
	
}
function redDraw25_1 {
	
}
function greenDraw25_1 {
	
}
function yellowDraw25_1 {
	
}
function orangeDraw25_1 {
	
}
function pinkDraw25_1 {
	
}
function purpleDraw25_1 {
	
}
// Draw 8
// Makes a player draw 1 card of every color (all 8 colors)
function blueDraw8_1 {
	
}
function redDraw8_1 {
	
}
function greenDraw8_1 {
	
}
function yellowDraw8_1 {
	
}
function orangeDraw8_1 {
	
}
function pinkDraw8_1 {
	
}
function purpleDraw8_1 {
	
}
function brownDraw8_1 {
	
}
// Draw 6
// Makes a player draw 6 cards
function blueDraw6_1 {
	
}
function redDraw6_1 {
	
}
function greenDraw6_1 {
	
}
function yellowDraw6_1 {
	
}
function orangeDraw6_1 {
	
}
function pinkDraw6_1 {
	
}
function purpleDraw6_1 {
	
}
function brownDraw6_1 {
	
}
// Draw 4
// Makes a player draw 4
function blueDraw4_1 {
	
}
function redDraw4_1 {
	
}
function greenDraw4_1 {
	
}
function yellowDraw4_1 {
	
}
function orangeDraw4_1 {
	
}
function pinkDraw4_1 {
	
}
function purpleDraw4_1 {
	
}
function brownDraw4_1 {
	
}
// Draw 2
// Makes a player draw 2 cards
function blueDraw2_1 {
	
}
function redDraw2_1 {
	
}
function greenDraw2_1 {
	
}
function yellowDraw2_1 {
	
}
function orangeDraw2_1 {
	
}
function pinkDraw2_1 {
	
}
function purpleDraw2_1 {
	
}
function brownDraw2_1 {
	
}
// Skip
// Skips a players turn
function redSkip1 {
	
}
function blueSkip1 {
	
}
function greenSkip1 {
	
}
function yellowSkip1 {
	
}
function orangeSkip1 {
	
}
function pinkSkip1 {
	
}
function purpleSkip1 {
	
}
function brownSkip1 {
	
}
// Wild
// Changes the current game color
function wildCard1 {
	console.log("Change the color of the game based off of one of your current cards: ");
	var wildChoice1 = "";
	colorSearch();
	if wildChoice1 == "Blue" {
		console.log("Changed the game color to blue");
		alert("The game color has changed to blue");
	} else if wildChoice1 == "Red" {
		console.log("Changed the game color to red");
		alert("The game color has changed to red");
	} else if wildChoice1 == "Green" {
		console.log("Changed the game color to green");
		alert("The game color has changed to green");
	} else if wildChoice1 == "Yellow" {
		console.log("Changed the game color to yellow");
		alert("The game color has changed to yellow");
	} else if wildChoice1 == "Orange" {
		console.log("Changed the game color to orange");
		alert("The game color has changed to orange");
	} else if wildChoice1 == "Pink" {
		console.log("Changed the game color to pink");
		alert("The game color has changed to pink");
	} else if wildChoice1 == "Purple" {
		console.log("Changed the game color to purple");
		alert("The game color has changed to purple");
	} else if wildChoice1 == "Brown" {
		console.log("Changed the game color to brown");
		alert("The game color has changed to brown");
	} else { // This condition shouldn't occur
		console.log("Couldn't change the game color, you do not have this color available");
}}
// Game time
// Minimum game time 1 (UNO)
int timer1_InMinutes = 10;
int timer1_InSeconds = 600;
int timer1_InMilliseconds = 600000;
float timer1_InMinutes = 10.0;
float timer1_InSeconds = 600.0;
float timer1_InMilliseconds = 600000.0;
// Minimum game time 2 (UNODOSE)
int timer2_InMinutes = 20;
int timer2_InSeconds = 1200;
int timer2_InMilliseconds = 1200000;
float timer2_InMinutes = 20.0;
float timer2_InSeconds = 1200.0;
float timer2_InMilliseconds = 1200000.0;
// Maximum game time 1 (UNO)
int timer3_InMinutes = 30;
int timer3_InSeconds = 1800;
int timer3_InMilliseconds = 1800000;
float timer3_InMinutes = 30.0;
float timer3_InSeconds = 1800.0;
float timer3_InMilliseconds = 1800000.0;
// Maximum game time 2 (UNODOSE)
int timer4_InMinutes = 60;
int timer4_InSeconds = 3600;
int timer4_InMilliseconds = 3600000;
float timer4_InMinutes = 60.0;
float timer4_InSeconds = 3600.0;
float timer4_InMilliseconds = 3600000.0;
// Checking
function checkGameTime {
	
}
function outOfTime {
	console.log("Game over - game time ran out");
	alert("The game has run out of time!\nGame over");
}
// End of JS scripting
/* Rules
Official rules
Uno cards
Uno cards
UNO cards deck

The aim of the game is to be the first player to score 500 points, achieved (usually over several rounds of play) by being the first to play all of one's own cards and scoring points for the cards still held by the other players.

The deck consists of 108 cards: four each of "Wild" and "Wild Draw Four," and 25 each of four different colors (red, yellow, green, blue). Each color consists of one zero, two each of 1 through 9, and two each of "Skip," "Draw Two," and "Reverse." These last three types are known as "action cards."

To start a hand, seven cards are dealt to each player, and the top card of the remaining deck is flipped over and set aside to begin the discard pile. The player to the dealer's left plays first unless the first card on the discard pile is an action or Wild card (see below). On a player's turn, they must do one of the following:

		play one card matching the discard in color, number, or symbol
		play a Wild card, or a playable Wild Draw Four card (see restriction below)
		draw the top card from the deck, then play it if possible

Cards are played by laying them face-up on top of the discard pile. Play proceeds clockwise around the table.

Action or Wild cards have the following effects:
Card 	Effect when played from hand 	Effect as first discard
Skip 	Next player in sequence misses a turn 	Player to dealer's left misses a turn
Reverse 	Order of play switches directions (clockwise to counterclockwise, or vice versa) 	Dealer plays first; play proceeds counterclockwise
Draw Two (+2) 	Next player in sequence draws two cards and misses a turn 	Player to dealer's left draws two cards and misses a turn
Wild 	Player declares the next color to be matched (may be used on any turn even if the player has matching color) 	Player to dealer's left declares the first color to be matched and plays a card in it
Wild Draw Four/Draw Four Wild (+4 and wild) 	Player declares the next color to be matched; next player in sequence draws four cards and misses a turn. May be legally played only if the player has no cards of the current color (see Penalties). 	Return card to the deck, shuffle, flip top card to start discard pile

		A player who draws from the deck must either play or keep that card and may play no other card from their hand on that turn.
		A player may play a Wild card at any time, even if that player has other playable cards.
		A player may play a Wild Draw Four card only if that player has no cards matching the current color. The player may have cards of a different color matching the current number or symbol or a Wild card and still play the Wild Draw Four card.[4] A player who plays a Wild Draw Four may be challenged by the next player in sequence (see Penalties) to prove that their hand meets this condition.
		If the entire deck is used during play, the top discard is set aside and the rest of the pile is shuffled to create a new deck. Play then proceeds normally.
		It is illegal to trade cards of any sort with another player.

A player who plays their next-to-last-card must call "Uno" as a warning to the other players.[5]

The first player to get rid of their last card ("going out") wins the hand and scores points for the cards held by the other players. Number cards count their face value, all action cards count 20, and Wild and Wild Draw Four cards count 50. If a Draw Two or Wild Draw Four card is played to go out, the next player in the sequence must draw the appropriate number of cards before the score is tallied.

The first player to score 500 points wins the game.
Penalties

		If a player does not call "Uno" after laying down their next-to-last card and is caught before the next player in sequence takes a turn (i.e., plays a card from their hand, draws from the deck, or touches the discard pile), they must draw two cards as a penalty. If the player is not caught in time (subject to interpretation) or remembers to call "Uno" before being caught, they suffer no penalty. If a player falsely calls "Uno" while having multiple cards in their hand, they must draw two cards.[4]
		If a player plays a Wild Draw Four card, the following player can challenge its use. The player who used the Wild Draw Four must privately show their hand to the challenging player, in order to demonstrate that they had no matching colored cards. If the challenge is correct, then the challenged player draws four cards instead. If the challenge is wrong, then the challenger must draw six cards; the four cards they were already required to draw plus two more cards.
/*/
// File version: 1 (January 12th 2020)
// End of script
/*
// Start of script
// This was inspired from playing the card game "Arkham Horror" with my friend Michael from last night
// Default card game setup
// Deck system
function deck1 { // Default deck
	var Card1.deck1 = "1";
	var Card2.deck1 = "2";
	var Card3.deck1 = "3";
	// Etc ...
}
// Turn system
boolean isTurn = false;
var currentTurn = "Anonymous1";
// Score system
int score1 = 0;
// Shuffle system
function shuffle1 { // Shuffles the current deck
	// |
}
function shuffleAll { // Shuffles all users decks in the current game
	// |
}
// Audio
// Michael might be a voice actor
// Cardsound0001.ogg - Cardsound9XXX.ogg (Might not go into the thousands)
// Unsorted
function foldCard {
	// |
}
function rollAaDice {
	// |
}
// File version: 1 (January 10th 2020)
// First version: 1 (January 10th 2020)
// Line count: 0,.040
// Character count: 0,.939
// Indent: UNIX (LF)
// Encoding: UTF-8
// Language: JavaScript 1.8
// End of script
*/