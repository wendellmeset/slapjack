var deck = document.querySelector('.deck');
var cardInPlay = document.querySelector('.play');
var computerHand = [];
var playerHand = [];
var cardsInPlay = [];

function playerPlay() {
  var nextCard = playerHand.pop();
  cardsInPlay.push(nextCard);
  if(nextCard !== undefined) {
    cardInPlay.src = "img/cards/2x/" + nextCard + ".png";
  }
  // remove event listener after player has played
  deck.removeEventListener('click', playerPlay);
  // computer's turn
  computerPlay();
}
//computer plays cards
function computerPlay() {
  setTimeout(function() {
    // computer plays
    var nextCard = computerHand.pop();
    cardsInPlay.push(nextCard);
    if(nextCard !== undefined) {
      cardInPlay.src = "img/cards/2x/" + nextCard + ".png";
    }
  }, 1000);
}

cardInPlay.addEventListener('click', function(e) {
  var src = e.target.src;
  alert('You clicked on a card in play. It\'s file is ' + src);
});

// shuffle and deal
function shuffle() {

  var allPossibleCards = ["club_jack", "club_queen", "club_king", "diamond_jack", "diamond_queen", "diamond_king", "heart_jack", "heart_queen", "heart_king", "spade_jack", "spade_queen", "spade_king"];
  for (i=1; i<=10; i++) {
    allPossibleCards.push("club_" + i);
    allPossibleCards.push("diamond_" + i);
    allPossibleCards.push("heart_" + i);
    allPossibleCards.push("spade_" + i);
  }

  function deal(deck) {
    // deal the cards
      for (i=0; i<26; i++) {
        computerHand.push(deck.pop());
      }

    var playerArray = []
      for (i=0; i<26; i++) {
        playerHand.push(deck.pop());
      }
  }

  var currentIndex = allPossibleCards.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = allPossibleCards[currentIndex];
    allPossibleCards[currentIndex] = allPossibleCards[randomIndex];
    allPossibleCards[randomIndex] = temporaryValue;
  }

  deal(allPossibleCards);
}

function game() {
  shuffle();

  // loop
   while(playerHand.length < 52 && computerHand.length < 52) {
    // add click event listener so player can begin
    deck.addEventListener('click', playerPlay);
    deck.addEventListener('playerPlay', computerPlay);
   }

}

game();
