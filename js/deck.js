class Card 
{
    constructor (value, suit)
    {
        this.value = value;
        this.suit = suit;
    }

    get getValue ()
    {
        return this.value;
    }

    get getSuit ()
    {
        return this.suit;
    }

    set setValue(value)
    {
        this.value = value;
    }

    set setSuit(suit)
    {
        this.suit = suit;
    }
};

const Suits =
{
    Clubs: "Clubs",
    Diamonds: "Diamonds",
    Hearts: "Hearts",
    Spades: "Spades"
};

const MAX_VALUE = 13;

class Deck
{
    #stack = [];

    constructor ()
    {
        for (let x in Suits)
        {
            for (let val = 1; val <= MAX_VALUE; val++)
            {
                this.#stack.push(new Card(val, Suits[x]));
            }
        }
        this.#stack.push(new Card(0, "Joker"))
        this.#stack.push(new Card(0, "Joker"))
    }

    shuffle() {
        let currentIndex = this.#stack.length;

        // While there remain elements to shuffle...
        while (currentIndex != 0) 
        {
            // Pick a remaining element...
            let randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [this.#stack[currentIndex], this.#stack[randomIndex]] = [
            this.#stack[randomIndex], this.#stack[currentIndex]];
        }
    }

    printCards()
    {
        for (let card in this.#stack)
        {
            console.log(this.#stack[card]);
        }
    }
};

export { Deck }