// ---------------GAME START--------------------------






//  game engine

 function computerPlay () {
    let words = ["Scissors", "Rock", "Paper"];
    const algorithm = words[Math.floor(Math.random()* words.length)];
    return(algorithm);
}


let random = computerPlay();

console.log(random);



// function playRound (playerSelection) {
    
//     if (playerSelection === "Rock" && random === "Rock" ) {
//         console.log("It's a tie");
//     }
//     else if (playerSelection === "Rock" && random === "Paper") {
//         console.log("You lost! Paper beats rock");
//     }
//     else if (playerSelection === "Rock" && random === "Scissors") {
//         console.log("You lost! Scissors beats rock");
//     }
//     else if (playerSelection === "Paper" && random === "Scissors") {
//         console.log("You lost! Scissors beats paper");
//     }
//     else if (playerSelection === "Paper" && random === "Rock") {
//         console.log("You won! Paper beats rock");
//     }
//     else if (playerSelection === "Paper" && random === "Paper") {
//         console.log("It's a tie!");
//     }
//     else if (playerSelection === "Scissors" && random === "Paper") {
//         console.log("You won! Scissors beats paper!");
//     }
//     else if (playerSelection === "Scissors" && random === "Rock") {
//         console.log("You lost! Rock beats Scissors");
//     }
//     else if (playerSelection === "Scissors" && random === "Scissors") {
//         console.log("It's a tie!");
//     }

// }


// let result = playRound("Scissors");

function game() {
    let playerInput = prompt("Choose between Rock, Paper or Scissors");
  
    


    function playRound (playerSelection) {
    
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


let result = playRound("Scissors");

}

game();

   





