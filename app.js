// ---------------GAME START--------------------------






// //  game engine


//  function computerPlay () {
//     let words = ["Scissors", "Rock", "Paper"];
//     const algorithm = words[Math.floor(Math.random()* words.length)];
//     return(algorithm);
    
// }


// let random = computerPlay();

// console.log(random);

// function Input () {
//    let userInput = prompt("Please choose between Rock, Paper or Scissors");
//      if (userInput !== null) {
//          return userInput;
//      }
// }

// let playerInput = Input();

// console.log(playerInput);
// console.log(random);






// console.log(playRound(playerSelection, computerSelection));
// //   Game function

// function game(playerSelection, computerPlay) {
//     // this function will include all the game

//     function playRound (playerSelection, computerPlay) {

    
    
//     if (playerInput === "Rock" && random === "Rock" ) {
//         console.log("It's a tie");
//     }
//     else if (playerInput === "Rock" && random === "Paper") {
//         console.log("You lost! Paper beats rock");
//     }
//     else if (playerInput === "Rock" && random === "Scissors") {
//         console.log("You lost! Scissors beats rock");
//     }
//     else if (playerInput === "Paper" && random === "Scissors") {
//         console.log("You lost! Scissors beats paper");
//     }
//     else if (playerInput === "Paper" && random === "Rock") {
//         console.log("You won! Paper beats rock");
//     }
//     else if (playerInput === "Paper" && random === "Paper") {
//         console.log("It's a tie!");
//     }
//     else if (playerInput === "Scissors" && random === "Paper") {
//         console.log("You won! Scissors beats paper!");
//     }
//     else if (playerInput === "Scissors" && random === "Rock") {
//         console.log("You lost! Rock beats Scissors");
//     }
//     else if (playerInput === "Scissors" && random === "Scissors") {
//         console.log("It's a tie!");
//     }
//     console.log(playRound(playerSelection, computerSelection));
//   }

// }

// console.log(game(playerSelection, computerSelection));
// console.log("To play another round, reload the page with the F5 key!");

// trebuie sa ma gadnesc la cum sa apara si in consola rezultatul de la playerchoice, ca sa fac comparatia


const btns = document.querySelectorAll('button');

let Rock = document.querySelector('.Rock');
let Paper = document.querySelector('.Paper');
let Scissors = document.querySelector('.Scissors');


const PlayerChoice = btns.forEach(function (button) {
    button.addEventListener('click', () => {
     document.querySelector('p').textContent = 'You chose :' + "   " + button.textContent;
     console.log(button.textContent);

    })
});

//  game engine


const ComputerChoice =  function computerPlay () {
    let words = ["Scissors", "Rock", "Paper"];
    const algorithm = words[Math.floor(Math.random()* words.length)];
    document.querySelector('.computer').textContent = 'The computer chose:' + "  " + algorithm;
    return algorithm;
    
}



ComputerChoice();


function playRound (playerSelection, computerPlay) {

    
    
    if (PlayerChoice === "Rock" && random === "Rock" ) {
        console.log("It's a tie");
    }
    else if (PlayerChoice === "Rock" && random === "Paper") {
        console.log("You lost! Paper beats rock");
    }
    else if (PlayerChoice === "Rock" && random === "Scissors") {
        console.log("You lost! Scissors beats rock");
    }
    else if (PlayerChoice === "Paper" && random === "Scissors") {
        console.log("You lost! Scissors beats paper");
    }
    else if (PlayerChoice === "Paper" && random === "Rock") {
        console.log("You won! Paper beats rock");
    }
    else if (PlayerChoice === "Paper" && random === "Paper") {
        console.log("It's a tie!");
    }
    else if (PlayerChoice === "Scissors" && random === "Paper") {
        console.log("You won! Scissors beats paper!");
    }
    else if (PlayerChoice === "Scissors" && random === "Rock") {
        console.log("You lost! Rock beats Scissors");
    }
    else if (PlayerChoice === "Scissors" && random === "Scissors") {
        console.log("It's a tie!");
    }

}

const playerSelection = PlayerChoice;

// const computerSelection = random;






  
  




