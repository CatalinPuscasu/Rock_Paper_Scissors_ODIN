//  game engine

function computerPlay () {
    let words = ["Scissors", "Rock", "Paper"];
    const algorithm = words[Math.floor(Math.random()* words.length)];
    console.log(algorithm);
}

computerPlay();