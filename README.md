# JS-RockPaperScissors

This is a simple rock paper scissors game, where the user will play versus the computer. The result of the match will be displayed in the console using console.log() function.

Steps to solve the problem:

1. Computer picks randomly his choice of rock, paper, or scissors.
2. Player gets asked for his choice.
3. Compare players choice versus the computers choice.
4. Display the winner.

In detail: 

1. computerPlay() function that choose a random number between 1 and 3, where each number is either rock, paper or scissor.
2. playerPlay() function that takes in rock, paper, or scissor, case insensitive. 
3. playRound() function that takes in players choice and computers choice as arguments, and compares them and returns a 
   string that declares the winner.
4. Create a game() function which uses the playRound() function to play set of 5 rounds, and keep track of score to 
   declare one winner. 
   