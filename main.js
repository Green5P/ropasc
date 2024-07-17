//Players Score
let humanScore = 0;
let computerScore = 0;

document.getElementById("roll").onclick = function () {
  playGame();
};

//Funtion For Computer to make a random choice of rock, paper, scissors.
//Using If...Else to make a decision from the 3 random numbers gotten from the Math.random fxn.
function getComputerChoice() {
  y = Math.floor(Math.random() * 3) + 1;
  if (y === 1) {
    y = "rock";
  } else if (y === 2) {
    y = "paper";
  } else if (y === 3) {
    y = "scissors";
  }
  console.log(`Computer value ${y}`);
  return y;
}

//Funtion to take Human choice.
function getHumanChoice() {
  let userPromt = prompt("Please Enter your choice - Rock, Paper, Scissors!");
  userChoice = userPromt.toLowerCase();
  console.log(`My choice ${userChoice}`);
  if (userChoice === "rock") {
    return userChoice;
  } else if (userChoice === "paper") {
    return userChoice;
  } else if (userChoice === "scissors") {
    return userChoice;
  } else {
    window.alert("Invalid");
  }
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    window.alert(`It's a draw 😐`);
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    computerScore += 1;
    window.alert("Computer won the round");
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    humanScore += 1;
    window.alert("Human won the round");
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    computerScore += 1;
    window.alert("Computer won the round");
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    humanScore += 1;
    window.alert("Human won the round");
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    humanScore += 1;
    window.alert("Human won the round ");
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    computerScore += 1;
    window.alert("Computer won the round");
  }
}

function playGame() {
  x = 0;

  while (x < 5) {
    let humanAnswer = getHumanChoice();
    computerAnswer = getComputerChoice();
    playRound(humanAnswer, computerAnswer);
    console.log(`Computer Score = ${computerScore}`);
    console.log(`Human Score = ${humanScore}`);
    x += 1;
  }
  if (computerScore > humanScore) {
    window.alert("Sorry You lost the game. 😭");
  } else if (computerScore < humanScore) {
    window.alert("Hooray! You won the Game. 😁");
  } else if (computerScore == humanScore) {
    window.alert(`It's a tie. 🙂`);
  }
}
