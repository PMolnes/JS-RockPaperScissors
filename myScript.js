function randomInt() {
    return Math.floor(Math.random() * (6 - 1 + 1) + 1)
}

function computerPlay() {
    let randomNumber = randomInt();
    let computerChoice; 
    if (randomNumber === 1) {
        computerChoice = "Rock";    
    } else if (randomNumber === 2) {
        computerChoice = "Paper";
    } else {
        computerChoice = "Scissor";
    }
    return computerChoice;
}

console.log(computerPlay());