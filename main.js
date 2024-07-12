//Players Score
let humanScore;
let computerScore;

document.getElementById("roll").onclick = function () {
  // y = Math.floor(Math.random() * 3) + 1;
  //   console.log(y);

  document.getElementById("choice").innerHTML = getHumanChoice();
};

//Funtion For Computer to make a random choice of rock, paper, scissors.
//Using If...Else to make a decision from the 3 random numbers gotten from the Math.random fxn.
function getComputerChoice() {
  y = Math.floor(Math.random() * 3) + 1;
  if (y === 1) {
    y = "Rock";
  } else if (y === 2) {
    y = "Paper";
  } else if (y === 3) {
    y = "Scissors";
  }
  console.log(y);
}

//Funtion to take Human choice.
function getHumanChoice() {
  let userChoice = prompt("Please Enter your choice - Rock, Paper, Scissors!");
  console.log(userChoice);
  return userChoice;
}

function playRound(val1, val2) {
  humanChoice = val1.toLowerCase();
  console.log(humanChoice);
}
