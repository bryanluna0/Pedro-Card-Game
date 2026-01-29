import { Deck } from "./deck.js"

class Player 
{
    // The player's hand
    #hand = []

    constructor()
    {

    }

    drawCard(deck)
    {
        this.#hand.push(deck.getTop);
    }

    printCards()
    {
        for (var v in this.#hand)
        {
            console.log(this.#hand[v]);
        }
    }
}

export { Player }