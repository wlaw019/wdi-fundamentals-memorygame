console.log("Up and running!");
/*var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";
console.log("User flipped " + cardOne);
console.log("User flipped " + cardTwo);*/

var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"	
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];
var cardsInPlay =[];

function checkForMatch(){
	if (cardsInPlay[0] === cardsInPlay[1]) {
  		console.log("You found a match!");
	} else {
  		console.log("Sorry, try again.");
	}
};

function flipCard(cardId){

	/*var cardOne = cards[0];
	cardsInPlay.push(cardOne);
	console.log("User flipped queen");

	var cardTwo = cards[2];
	cardsInPlay.push(cardTwo);
	console.log("User flipped king");*/

	console.log("User flipped "+cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);

	if(cardsInPlay.length === 2){
		checkForMatch();
	};
};

flipCard(0);
flipCard(2);





