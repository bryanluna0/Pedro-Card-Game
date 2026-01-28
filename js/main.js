import { Deck } from "./deck.js"

const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

function main()
{
    let deck = new Deck();
    deck.printCards();
    drawGame();
}

// Game Loop
function drawGame()
{
    
    requestAnimationFrame(drawGame);
    clearScreen();
    drawCards();

}

function clearScreen()
{
    context.fillStyle = "black";
    context.fillRect(0, 0, canvas.width, canvas.height);
}

function drawCards()
{
    context.fillStyle = "#e2dadaff";
    context.fillRect(100, 100, 80, 140);
}

main();