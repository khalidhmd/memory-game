/*
 * Create a list that holds all of your cards
 */
const deck = document.getElementsByClassName('deck');
const stars = document.getElementsByClassName('stars');
const moves = document.getElementsByClassName('moves');
const restart = document.getElementsByClassName('restart');
const timer = document.getElementsByClassName('timer');
let openCards = [];
let matchedCards = [];
let movesCount = 0;
let time = 0;

let card_List = ["fa fa-diamond", "fa fa-paper-plane-o", "fa fa-anchor", "fa fa-bolt", "fa fa-cube", "fa fa-anchor", "fa fa-leaf", "fa fa-bicycle", "fa fa-diamond", "fa fa-bomb", "fa fa-leaf", "fa fa-bomb", "fa fa-bolt", "fa fa-bicycle", "fa fa-paper-plane-o", "fa fa-cube"];

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */
setInterval(countTime, 1000);
function displayDeck() {
    card_List = shuffle(card_List);
    deck[0].innerHTML = '';
    for (let i = 0; i < card_List.length; i++) {
        const newCard = document.createElement('li');
        newCard.classList.add('card');
        newCard.innerHTML = '<i class="' + card_List[i] + '"></i>'
        deck[0].appendChild(newCard)
    }
}

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */

 //card click event handler 
function cardClick(event) {
    target = event.target;
    if (target.classList.contains('card')) {
        if (!target.classList.contains('open') && !target.classList.contains('match')) {
            displayCardSymbol(target);
            addToOpenList(target);
        }
    }
    if (openCards.length === 2) {
        if (openCards[0].getElementsByTagName('i')[0].classList[1] === openCards[1].getElementsByTagName('i')[0].classList[1]) {
            matchCards(openCards);
        } else {
            hideCards(openCards);
        }
        movesCount += 1;
        moves[0].innerText = movesCount;
        if ((movesCount > 9) && (stars[0].childElementCount === 3)) {
            stars[0].childNodes[0].remove();
        } else if ((movesCount >15) && (stars[0].childElementCount === 2)) {
            stars[0].childNodes[0].remove();
        }
    }
}

deck[0].addEventListener('click', cardClick);

//display card symbol
function displayCardSymbol(target) {
        target.classList.add('open');
}

//Adds card to open cards list
function addToOpenList(target) {
        openCards.push(target);
}

//function that mark matched cards
function matchCards(openCards) {
    openCards[0].className = 'card match';
    openCards[1].className = 'card match';
    matchedCards.push(openCards.pop());
    matchedCards.push(openCards.pop());
    if (matchedCards.length === card_List.length ) {
        let msg = 'Congratulations!!!\nYou completed the game in: '
        msg += timer[0].innerText + 'm:s\n'
        msg += 'Your star rating is: ' + stars[0].childElementCount;
        msg += '\nPlay new game?'
        result = confirm(msg);
        if (result) {
            restartGame();
        }
    }
}

// Function that hides unmatched cards
function hideCards(openCards) {
    deck[0].removeEventListener('click', cardClick);
    setTimeout(function () {
        openCards[0].className = 'card';
        openCards[1].className = 'card';
        openCards.pop();
        openCards.pop();
        deck[0].addEventListener('click', cardClick);
    }, 600);
}

//add event listener for restart button
restart[0].addEventListener('click', restartGame);

function countTime() {
    if (matchedCards.length < card_List.length) {
        time++;
        timer[0].innerText = parseInt(time / 60) + ':' + (time % 60)
    }
}

function restartGame() {
    displayDeck();
    openCards = [];
    matchedCards = [];
    movesCount = 0;
    moves[0].innerText = movesCount;
    time = 0;
    resetStars();
}

function resetStars() {
    stars[0].innerHTML = '';
    for (let i = 0; i < 3; i++) {
        const newStar = document.createElement('li');
        newStar.innerHTML = '<i class="fa fa-star"></i>';
        stars[0].appendChild(newStar);
    }
}