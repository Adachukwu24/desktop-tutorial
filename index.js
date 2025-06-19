const text = `
// First, define the variables that can be defined outside the functions
let cards = []; // for storing all the possible card values
let sum = 0; // sum of all generated card value
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")

// object that stores player info
let player = {
 name: "Per",
 chips: 145,
 sayHello: function() {
    console.log("Wagwan")
 }
}

// displaying player info on document
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

//function for generating the random value
function getRandomCard() {
    let randomCard = Math.floor(Math.random() * 13) + 1
     if (randomCard === 1) {
        return 11
     }
     else if (randomCard > 10) {
        return 10
     }
     else {
        return randomCard
     }
}
// when you start the game, you generate the values i.e. the first and second cards you start the game with
function startGame() {
    isAlive = true;
    let firstCard = getRandomCard();
     let lastCard = getRandomCard();
     cards = [firstCard, lastCard]
     sum = firstCard + lastCard
    renderGame()
}
// the main meat of the game containing a for element that
//displays the cards on the document, the sum, the message
//depending on what the player got
function renderGame() {
cardsEl.textContent = "Cards:  "
for (let i = 0; i < cards.length; i ++) {
cardsEl.textContent += cards[i] + " "
}
sumEl.textContent = "Sum:" + sum;
if (sum <= 20) {
message = "Do you want to draw another card?"
}
else if(sum === 21) {
    hasBlackJack = true;
    message = "Yay! Blackjack!"
}
else {
    message ="You're out of the game! Better luck next time!"
    isAlive = false
}
messageEl.textContent = message;   
console.log(cards)
}

//function for getting new card value if blackjack isn't gotten
function newCard() {
    if(isAlive === true && hasBlackJack === false){
   let card = getRandomCard();
    sum += card
    cards.push(card)
    renderGame()
    }
}

`

let linkEl = document.getElementById("link-el")
let buttonEl = document.getElementById("button-el")
let formContainer = document.getElementById("form-container")
let bodyId = document.getElementById("body-id")

function hackApp() {
    bodyId.innerHTML = "<link rel='stylesheet' href='hackstyle.css'><pre id='textContainer' contenteditable='true'></pre> ";




        const speed = 15;
        textContainer.focus();
        let index = 0;
        textContainer.addEventListener("input", function () {
            index += speed;
        textContainer.textContent = text.substring(0, index);

        // // move caret at the end
        const sel = window.getSelection();
        const range = document.createRange();
        range.selectNodeContents(textContainer);
        range.collapse(false);
        sel.removeAllRanges();
        sel.addRange(range)
        })
}