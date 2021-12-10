// ---------------GAME START--------------------------






//  game engine

 function computerPlay () {
    let words = ["Scissors", "Rock", "Paper"];
    const algorithm = words[Math.floor(Math.random()* words.length)];
    return(algorithm);
}


let random = computerPlay();

// console.log(random);

function Input () {
   let userInput = prompt("Please choose between Rock, Paper or Scissors");
     if (userInput !== null) {
         return userInput;
     }
}

let playerInput = Input();

console.log(playerInput);
console.log(random);



function playRound (playerSelection, computerPlay) {

    
    
    if (playerInput === "Rock" && random === "Rock" ) {
        console.log("It's a tie");
    }
    else if (playerInput === "Rock" && random === "Paper") {
        console.log("You lost! Paper beats rock");
    }
    else if (playerInput === "Rock" && random === "Scissors") {
        console.log("You lost! Scissors beats rock");
    }
    else if (playerInput === "Paper" && random === "Scissors") {
        console.log("You lost! Scissors beats paper");
    }
    else if (playerInput === "Paper" && random === "Rock") {
        console.log("You won! Paper beats rock");
    }
    else if (playerInput === "Paper" && random === "Paper") {
        console.log("It's a tie!");
    }
    else if (playerInput === "Scissors" && random === "Paper") {
        console.log("You won! Scissors beats paper!");
    }
    else if (playerInput === "Scissors" && random === "Rock") {
        console.log("You lost! Rock beats Scissors");
    }
    else if (playerInput === "Scissors" && random === "Scissors") {
        console.log("It's a tie!");
    }

}

const playerSelection = playerInput;

const computerSelection = random;


console.log(playRound(playerSelection, computerSelection));





  
  




