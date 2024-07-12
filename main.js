document.getElementById("roll").onclick = function () {
  y = Math.floor(Math.random() * 3) + 1;
  //   console.log(y);
  document.getElementById("choice").innerHTML = y;
};

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
