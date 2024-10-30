function getComputerChoice() {
    let value = Math.random();
    console.log(value);
    if (value >= 0 && value <= 0.3) { // Rock will come out more often because it includes results >0 and <=0.1
        return "rock";
    } else if (value >= 0.3 && value <= 0.6) { // used 0.3 again (and 0.6 again on the next line) to take into account the numbers between 0.3 and 0.4 (and 0.6 and 0.7)
        return "paper";
    } else if (value >= 0.6 && value < 1) {
        return "scissors";
    } else {
        getComputerChoice(); //In case i've missed any other values.
    }
}

function getHumanChoice() {
    answer = window.prompt("rock, paper or scissors?");
    return answer.toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

const computerSelection = getComputerChoice();
const humanSelection = getHumanChoice();

function playGame() {
    function playRound(computerChoice, humanChoice) {
        if (humanChoice === computerChoice) {
            return `How unlucky, it's a tie! Try again. The score is: you = ${humanScore}; computer = ${computerScore}`;
        } else if (humanChoice === "rock" && computerChoice === "scissors"
            || humanChoice === "scissors" && computerChoice === "paper"
            || humanChoice === "paper" && computerChoice === "rock") {
            return `You've won! Try again if you dare. The score is now:  you = ${++humanScore}; computer = ${computerScore}`;
        } else if (computerChoice === "rock" && humanChoice === "scissors"
            || computerChoice === "scissors" && humanChoice === "paper"
            || computerChoice === "paper" && humanChoice === "rock") {
            return `You've lost. Try again to get your revenge! The score is now: you = ${humanScore}, computer = ${++computerScore}`;
        } else {
            return "You might have spelt that wrong. Try again, please.";
        }
    }
    console.log(playRound(computerSelection, humanSelection));
}

console.log(playGame())