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

let computerResult = document.querySelector('.computer');

btns.forEach(function (button) {
    button.addEventListener('click', () => {
     document.querySelector('p').textContent = 'You chose :' + "   " + button.textContent;
     // console.log(button.textContent);

     ComputerChoice().textContent;
     // console.log(ComputerChoice());

   // show computer result
       
    computerResult.style.color = 'black';

    
      
      event.stopPropagation();
 
    //  return btns.value

    if (button.textContent === "Rock" && ComputerChoice() === "Rock") {
        document.querySelector('.result').textContent = 'It is a tie!';
    }

    else if (button.textContent === "Rock" && ComputerChoice() === "Paper") {
         document.querySelector('.result').textContent = 'You lost!  Paper beats Rock';
    }
    else if (button.textContent === "Rock" && ComputerChoice() === "Scissors") {
         document.querySelector('.result').textContent = 'You won!  Rock beats Scissors';
    }
    else if (button.textContent === "Paper" && ComputerChoice() === "Paper") {
         document.querySelector('.result').textContent = 'It is a tie!';
    }
    else if (button.textContent === "Paper" && ComputerChoice() === "Rock") {
         document.querySelector('.result').textContent = 'You won!  Paper beats Rock!';
    }
    else if (button.textContent === "Paper" && ComputerChoice() === "Scissors") {
         document.querySelector('.result').textContent = 'You lost! Scissors cut the Paper!';
    }
    else if (button.textContent === "Scissors" && ComputerChoice() === "Scissors") {
         document.querySelector('.result').textContent = 'It is a tie!';
    }
    else if (button.textContent === "Scissors" && ComputerChoice() === "Paper") {
         document.querySelector('.result').textContent = 'You won! Scissors beats Paper';
    }
    else if (button.textContent === "Scissors" && ComputerChoice() === "Rock") {
         document.querySelector('.result').textContent = 'You lost! Rock beats Scissors';
    }
   
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



//----------------comparison of results -------------------------------------


// function playRound () {

    
    
//     if (PlayerChoice === "Rock" && ComputerChoice === "Rock" ) {
//         console.log("It's a tie");
//     }
//     else if (PlayerChoice === "Rock" && ComputerChoice === "Paper") {
//         console.log("You lost! Paper beats rock");
//     }
//     else if (PlayerChoice === "Rock" && ComputerChoice === "Scissors") {
//         console.log("You lost! Scissors beats rock");
//     }
//     else if (PlayerChoice === "Paper" && random === "Scissors") {
//         console.log("You lost! Scissors beats paper");
//     }
//     else if (PlayerChoice === "Paper" && random === "Rock") {
//         console.log("You won! Paper beats rock");
//     }
//     else if (PlayerChoice === "Paper" && random === "Paper") {
//         console.log("It's a tie!");
//     }
//     else if (PlayerChoice === "Scissors" && random === "Paper") {
//         console.log("You won! Scissors beats paper!");
//     }
//     else if (PlayerChoice === "Scissors" && random === "Rock") {
//         console.log("You lost! Rock beats Scissors");
//     }
//     else if (PlayerChoice === "Scissors" && random === "Scissors") {
//         console.log("It's a tie!");
//     }



// playRound();
// const playerSelection = PlayerChoice;

// const computerSelection = ComputerChoice();