const cards = ["cards\\2_of_clubs.png", "cards\\2_of_diamonds.png", "cards\\2_of_hearts.png", "cards\\2_of_spades.png",
  "cards\\3_of_clubs.png", "cards\\3_of_diamonds.png", "cards\\3_of_hearts.png", "cards\\3_of_spades.png",
  "cards\\4_of_clubs.png", "cards\\4_of_diamonds.png", "cards\\4_of_hearts.png", "cards\\4_of_spades.png",
  "cards\\5_of_clubs.png", "cards\\5_of_diamonds.png", "cards\\5_of_hearts.png", "cards\\5_of_spades.png",
  "cards\\6_of_clubs.png", "cards\\6_of_diamonds.png", "cards\\6_of_hearts.png", "cards\\6_of_spades.png",
  "cards\\7_of_clubs.png", "cards\\7_of_diamonds.png", "cards\\7_of_hearts.png", "cards\\7_of_spades.png",
  "cards\\9_of_clubs.png", "cards\\9_of_diamonds.png", "cards\\9_of_hearts.png", "cards\\9_of_spades.png",
  "cards\\10_of_clubs.png", "cards\\10_of_diamonds.png", "cards\\10_of_hearts.png", "cards\\10_of_spades.png",
  "cards\\jack_of_clubs.png", "cards\\jack_of_diamonds.png", "cards\\jack_of_hearts.png", "cards\\jack_of_spades.png",
  "cards\\queen_of_clubs.png", "cards\\queen_of_diamonds.png", "cards\\queen_of_hearts.png", "cards\\queen_of_spades.png",
  "cards\\king_of_clubs.png", "cards\\king_of_diamonds.png", "cards\\king_of_hearts.png", "cards\\king_of_spades.png",
  "cards\\ace_of_clubs.png", "cards\\ace_of_diamonds.png", "cards\\ace_of_hearts.png", "cards\\ace_of_spades.png"
];

var card1num = (Math.floor(Math.random() * (cards.length)));
var card2num = (Math.floor(Math.random() * (cards.length)));
var card3num = (Math.floor(Math.random() * (cards.length)));
var card4num = (Math.floor(Math.random() * (cards.length)));
var card5num = (Math.floor(Math.random() * (cards.length)));
var currentHand = "";


//this body of code is called whenever the page is loaded
console.log("page just reloaded!");
shuffleCards();

//triggers - events
document.getElementById("card1").onmouseup = changeCard1;
document.getElementById("card2").onmouseup = changeCard2;
document.getElementById("card3").onmouseup = changeCard3;
document.getElementById("card4").onmouseup = changeCard4;
document.getElementById("card5").onmouseup = changeCard5;
document.getElementById("button-Shuffle").onmouseup = shuffleCards;
document.getElementById("button-Hint").onmouseup = hintDeck;
document.getElementById("button-Submit").onmouseup = submitCards;
document.getElementById("button-Next").onmouseup = nextDeck;

//note do not do not call changeLabel here, we just want associate the fn with this property, we do not want to call it here

//event handlers

function changeCard1() {
  //console.log("entered changeCard1");
  card1num = randomCard();
  document.getElementById("card1").src = cards[card1num];
  //console.log(document.getElementById("card1").src);
  whatDeck();
}

function changeCard2() {
  //console.log("entered changeCard2");
  card2num = randomCard();
  document.getElementById("card2").src = cards[card2num];
  //console.log(document.getElementById("card2").src);
  whatDeck();
}

function changeCard3() {
  //console.log("entered changeCard3");
  card3num = randomCard();
  document.getElementById("card3").src = cards[card3num];
  //console.log(document.getElementById("card3").src);
  whatDeck();
}

function changeCard4() {
  //console.log("entered changeCard4");
  card4num = randomCard();
  document.getElementById("card4").src = cards[card4num];
  //console.log(document.getElementById("card4").src);
  whatDeck();
}

function changeCard5() {
  //console.log("entered changeCard5");
  card5num = randomCard();
  document.getElementById("card5").src = cards[card5num];
  //console.log(document.getElementById("card4").src);
  whatDeck();

}

function randomCard() { // min and max included
  while (1) {
    var newcard = (Math.floor(Math.random() * (cards.length)));
    if ((newcard != card1num) && (newcard != card2num) && (newcard != card3num) && (newcard != card4num) && (newcard != card5num)) {
      return newcard;
    }
    console.log(cards[card1num].replace("cards\\", "").replace(".png", "").replace("_of_", ""), cards[card2num].replace("cards\\", "").replace(".png", "").replace("_of_", ""), cards[card3num].replace("cards\\", "").replace(".png", "").replace("_of_", ""), cards[card4num].replace("cards\\", "").replace(".png", "").replace("_of_", ""), cards[card5num].replace("cards\\", "").replace(".png", "").replace("_of_", ""));
    console.log(cards[newcard].replace("cards\\", "").replace(".png", "").replace("_of_", ""));
    console.log("Dup");
  }
}

function shuffleCards() {
  changeCard1();
  changeCard2();
  changeCard3();
  changeCard4();
  changeCard5();
}

function whatDeck() {
  sortCards();
  console.log("whatDeck");
  cardsinDeck = [cards[card1num].replace("cards\\", "").replace(".png", ""), cards[card2num].replace("cards\\", "").replace(".png", ""), cards[card3num].replace("cards\\", "").replace(".png", ""), cards[card4num].replace("cards\\", "").replace(".png", ""), cards[card5num].replace("cards\\", "").replace(".png", "")]
  console.log(cardsinDeck);
  //var label1 = document.getElementById("label-output");
  //label1.innerHTML = "High Card";
  currentHand = "High Card";
  straightEvents = [
    ["10_", "jac", "que", "kin", "ace"],
    ["9_o", "10_", "jac", "que", "kin"],
    ["8_o", "9_o", "10_", "jac", "que"],
    ["7_o", "8_o", "9_o", "10_", "jac"],
    ["6_o", "7_o", "8_o", "9_o", "10_"],
    ["5_o", "6_o", "7_o", "8_o", "9_o"],
    ["4_o", "5_o", "6_o", "7_o", "8_o"],
    ["3_o", "4_o", "5_o", "6_o", "7_o"],
    ["2_o", "3_o", "4_o", "5_o", "6_o"]
  ];
  let cardsinDeck3 = cardsinDeck.map(function(cardsinDeck) {
    return cardsinDeck.substring(0, 3)
  });
  console.log(cardsinDeck3);

  //Flush Done
  if (card1num % 4 == card2num % 4 && card2num % 4 == card3num % 4 && card3num % 4 == card4num % 4 && card4num % 4 == card5num % 4) {
    console.log("Flush");
    //label1.innerHTML = "Flush";
    currentHand = "Flush";
  }
  //Straight Done
  if (straightEvents.some(a => cardsinDeck3.every((v, i) => v === a[i]))) {
    console.log("Straight");
    //label1.innerHTML = "Straight";
    currentHand = "Straight";
  }
  //Straight Flush Done
  if (card1num + 4 == card2num && card2num + 4 == card3num && card3num + 4 == card4num && card4num + 4 == card5num) {
    console.log("Straight Flush");
    //label1.innerHTML = "Straight Flush";
    currentHand = "Straight Flush";
  }
  //1 Pair Done
  if (cardsinDeck[0].substring(0, 3) == cardsinDeck[1].substring(0, 3) ||
    cardsinDeck[1].substring(0, 3) == cardsinDeck[2].substring(0, 3) ||
    cardsinDeck[2].substring(0, 3) == cardsinDeck[3].substring(0, 3) ||
    cardsinDeck[3].substring(0, 3) == cardsinDeck[4].substring(0, 3)) {
    console.log("1 Pair");
    //label1.innerHTML = "1 Pair";
    currentHand = "1 Pair";
  }
  //2 Pair Done
  if ((cardsinDeck[0].substring(0, 3) == cardsinDeck[1].substring(0, 3)) && (cardsinDeck[2].substring(0, 3) == cardsinDeck[3].substring(0, 3)) ||
    (cardsinDeck[0].substring(0, 3) == cardsinDeck[1].substring(0, 3)) && (cardsinDeck[3].substring(0, 3) == cardsinDeck[4].substring(0, 3)) ||
    (cardsinDeck[1].substring(0, 3) == cardsinDeck[2].substring(0, 3)) && (cardsinDeck[3].substring(0, 3) == cardsinDeck[4].substring(0, 3))) {
    console.log("2 Pair");
    //label1.innerHTML = "2 Pair";
    currentHand = "2 Pair";
  }
  //3 of a Kind Done
  if ((cardsinDeck[0].substring(0, 3) == cardsinDeck[1].substring(0, 3)) && (cardsinDeck[1].substring(0, 3) == cardsinDeck[2].substring(0, 3)) ||
    (cardsinDeck[1].substring(0, 3) == cardsinDeck[2].substring(0, 3)) && (cardsinDeck[2].substring(0, 3) == cardsinDeck[3].substring(0, 3)) ||
    (cardsinDeck[2].substring(0, 3) == cardsinDeck[3].substring(0, 3)) && (cardsinDeck[3].substring(0, 3) == cardsinDeck[4].substring(0, 3))) {
    console.log("3 of a Kind");
    //label1.innerHTML = "3 of a Kind";
    currentHand = "3 of a Kind";
  }
  //Full House Done
  if (((cardsinDeck[0].substring(0, 3) == cardsinDeck[1].substring(0, 3)) && (cardsinDeck[2].substring(0, 3) == cardsinDeck[3].substring(0, 3)) ||
      (cardsinDeck[0].substring(0, 3) == cardsinDeck[1].substring(0, 3)) && (cardsinDeck[3].substring(0, 3) == cardsinDeck[4].substring(0, 3)) ||
      (cardsinDeck[1].substring(0, 3) == cardsinDeck[2].substring(0, 3)) && (cardsinDeck[3].substring(0, 3) == cardsinDeck[4].substring(0, 3))) &&
    ((cardsinDeck[0].substring(0, 3) == cardsinDeck[1].substring(0, 3)) && (cardsinDeck[1].substring(0, 3) == cardsinDeck[2].substring(0, 3)) ||
      (cardsinDeck[1].substring(0, 3) == cardsinDeck[2].substring(0, 3)) && (cardsinDeck[2].substring(0, 3) == cardsinDeck[3].substring(0, 3)) ||
      (cardsinDeck[2].substring(0, 3) == cardsinDeck[3].substring(0, 3)) && (cardsinDeck[3].substring(0, 3) == cardsinDeck[4].substring(0, 3)))) {
    console.log("Full House");
    //label1.innerHTML = "Full House";
    currentHand = "Full House";
  }
  //4 of a Kind Done
  if ((cardsinDeck[0].substring(0, 3) == cardsinDeck[1].substring(0, 3) && cardsinDeck[1].substring(0, 3) == cardsinDeck[2].substring(0, 3) && cardsinDeck[2].substring(0, 3) == cardsinDeck[3].substring(0, 3)) ||
    (cardsinDeck[1].substring(0, 3) == cardsinDeck[2].substring(0, 3) && cardsinDeck[2].substring(0, 3) == cardsinDeck[3].substring(0, 3) && cardsinDeck[3].substring(0, 3) == cardsinDeck[4].substring(0, 3))) {
    console.log("4 of a Kind");
    //label1.innerHTML = "4 of a Kind";
    currentHand = "4 of a Kind";
  }
  //Royal Flush Done
  if ((cardsinDeck[0] == "10_of_clubs" && cardsinDeck[1] == "jack_of_clubs" && cardsinDeck[2] == "queen_of_clubs" && cardsinDeck[3] == "king_of_clubs" && cardsinDeck[4] == "ace_of_clubs") ||
    (cardsinDeck[0] == "10_of_hearts" && cardsinDeck[1] == "jack_of_hearts" && cardsinDeck[2] == "queen_of_hearts" && cardsinDeck[3] == "king_of_hearts" && cardsinDeck[4] == "ace_of_hearts") ||
    (cardsinDeck[0] == "10_of_spades" && cardsinDeck[1] == "jack_of_spades" && cardsinDeck[2] == "queen_of_spades" && cardsinDeck[3] == "king_of_spades" && cardsinDeck[4] == "ace_of_spades") ||
    (cardsinDeck[0] == "10_of_diamonds" && cardsinDeck[1] == "jack_of_diamonds" && cardsinDeck[2] == "queen_of_diamonds" && cardsinDeck[3] == "king_of_diamonds" && cardsinDeck[4] == "ace_of_diamonds")) {
    console.log("Royal Flush");
    //label1.innerHTML = "Royal Flush";
    currentHand = "Royal Flush";
  }
  var label1 = document.getElementById("label-output");
  label1.innerHTML = "";
  var label2 = document.getElementById("label-hand");
  label2.innerHTML = "What hand?";
}

function sortCards() {
  var ordercards = [card1num, card2num, card3num, card4num, card5num].sort(function(a, b) {
    return a - b;
  });
  card1num = ordercards[0];
  card2num = ordercards[1];
  card3num = ordercards[2];
  card4num = ordercards[3];
  card5num = ordercards[4];
  document.getElementById("card1").src = cards[card1num];
  document.getElementById("card2").src = cards[card2num];
  document.getElementById("card3").src = cards[card3num];
  document.getElementById("card4").src = cards[card4num];
  document.getElementById("card5").src = cards[card5num];
}


function submitCards() {
        console.log("val");
        var handval = document.getElementById("select-whathand").value;
        console.log(handval);
        console.log(currentHand);
        var label2 = document.getElementById("label-hand");
        if (handval == currentHand) {
            console.log("Correct!");
            label2.innerHTML = "Correct!";
        }
        else {
          console.log("Wrong");
          label2.innerHTML = "Wrong";
        }
    }

function nextDeck(){
  shuffleCards();
  var label2 = document.getElementById("label-hand");
  label2.innerHTML = "What hand?";
}

function hintDeck(){
  var label1 = document.getElementById("label-output");
  label1.innerHTML = currentHand;
}
