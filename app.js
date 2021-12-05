// ---------------GAME START--------------------------

function playRound (playerSelection, computerSelection) {
       console.log("Welcome the the Rock, Paper, Scissors Game! All you have to do is guess the best choiche, in order to win. PLease write your choice:  ");
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