function randomInt() {
    return Math.floor(Math.random() * 2)
}

function computerPlay() {
    let randomNumber = randomInt();
    let computerChoice; 
    if (randomNumber === 0) {
        computerChoice = "Rock";    
    } else if (randomNumber === 1) {
        computerChoice = "Paper";
    } else {
        computerChoice = "Scissors";
    }
    return computerChoice;
}

function playerPlay() {
    let playerChoice = prompt("Choose Rock, Paper, or Scissors!").toLowerCase();
    switch(playerChoice) {
        case "rock": 
            return "Rock";
        case "paper":
            return "Paper";
        case "scissors":
            return "Scissors";
        default:
            alert("Invalid choice. Type:  'Rock', 'Paper', or 'Scissors'!");
    }
}

function playRound(computerSelection, playerSelection) {
    computerSelection = computerPlay();
    console.log(computerSelection);
    playerSelection = playerPlay();
    let playerWins = false;
    if (computerSelection === playerSelection) {
        return "Draw";
    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        playerWins = true;
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        playerWins = true;
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        playerWins = true;
    }
    return playerWins;
}

function game(rounds) {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 1; i <= rounds; i++) {
        playerWins = playRound();
        if (playerWins === true) {
            console.log("Player wins this round, with a score of " + ++playerScore);
        } else if (playerWins === "Draw") {
            console.log("This round was a draw, player score:  " + playerScore + " and computer score: " + computerScore);
        } else {
            console.log("Computer wins this round, with a total score of " + ++computerScore);
        }
    }
    console.log("Results: Playerscore " + playerScore + " , Computer score " + computerScore);
}

console.log(game(5));
