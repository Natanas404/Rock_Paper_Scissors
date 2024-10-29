function getComputerChoice () {
    let value = Math.random();
    console.log(value);
    if (value >= 0 && value <= 0.3) { // Rock will come out more often because it includes results >0 and <=0.1
        return "Rock";
    } else if (value >= 0.4 && value <= 0.6) {
        return "Paper";
    } else if (value >= 0.7 && value < 1) {
        return "Scissors";
    } else {
        getComputerChoice(); // to use once I know how to run the first if between 0.1 and 0.3 instead of 0 and 0.3
    }
}
console.log(getComputerChoice());

function getHumanChoice () {
    window.prompt("Rock, Paper or Scissors?");
}
console.log (getHumanChoice());