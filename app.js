// ---------------GAME START--------------------------

function playRound () {
  
    // --------------------------------------
    let playerSelection = prompt("Welcome the the Rock, Paper, Scissors Game! All you have to do is guess the best choice, in order to win. PLease write your choice:");
    if (playerSelection !== null) {
        console.log("You chose : " + playerSelection);
    }
    
}

playRound();





//  game engine

function computerPlay () {
    let words = ["Scissors", "Rock", "Paper"];
    const algorithm = words[Math.floor(Math.random()* words.length)];
    console.log(algorithm);
}

computerPlay();

// ---------------------------------------------------------------------------------------------