document.getElementById("roll").onclick = function () {
  y = Math.floor(Math.random() * 3) + 1;
  //   console.log(y);
  document.getElementById("choice").innerHTML = y;
};
