# Memory Game Project

## Table of Contents

* [Instructions](#instructions)
* [Contributing](#contributing)
* [HTML changes](#htmlchanges)
* [CSS Changes](#csschanges)
* [JavaScript changes](#jschanges)

## Instructions

Before changing the Project, please review the HTML, CSS, and JavaScript files carefullty until you get good understanding of the Project structure.
The changes I have made are in the JavaScript file as described in this README.

## Contributing

I'll be more than happy to reveive a pull request from you!

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).

## htmlchanges

No major changes made to the HTML source file from Udacity.

## csschanges

No major changes made to the CSS source file from Udacity.

## jschanges

All my work falls in the JavaScript file. I created many new functions as described below:

`displayDeck()` this function reconstruct the Deck.

`cardClick(event)` this is the card click event handler.

`displayCardSymbol(target)` this function shows the card when it's clicked. It takes an eventTarget object as input.

`addToOpenList(target)` this function adds clicked card to a list of shown cards. It takes an eventTarget object as input.

`matchCards(openCards)` this function perform the matching process upon detecting matched open cards. It takes open cards list ( of two open cards) as input.

`hideCards(openCards)` this function perform the hiding process upon detecting un-matched open cards. It takes open cards list ( of two open cards) as input.

`countTime()` this function simply increment the time interval ellapsed in millisecond since the game started.

`restartGame()` this function performs initializations to start a new game.

`resetStars()` this finction resets the star indicator on the HTML upon restart button click or upon user response to modal with 'ok'.
