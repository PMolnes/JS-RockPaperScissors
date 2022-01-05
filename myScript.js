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

function playerPlay() {
    let playerChoice = prompt("Choose Rock, Paper, or Scissors!").toLowerCase();
    switch(playerChoice) {
        case "rock": 
            return "rock";
        case "paper":
            return "paper";
        case "scissors":
            return "scissors";
        default:
            alert("Invalid choice. Type:  'Rock', 'Paper', or 'Scissors'!");
    }
}