document.getElementById("her-btn").addEventListener("click", diceButton);
function diceButton () {
  var randomNumber1 = Math.floor(Math.random() * 6 ) + 1;

  var diceImages = "dice" + randomNumber1 + ".png";

  var diceSource = "images/" + diceImages;

  document.querySelectorAll("img")[0].setAttribute("src", diceSource);



  // Scound Dice

  var randonNumber2 = Math.floor(Math.random() * 6 ) + 1;

  var diceImages2 = "dice" + randonNumber2 + ".png";

  var diceSource2 = "images/" + diceImages2;

  document.querySelectorAll("img")[1].setAttribute("src", diceSource2);

  // Winner Selection

  if (randomNumber1 >   randonNumber2 ) {
      document.querySelector("h1").textContent = "Player 1 Won ! "
  }
  else if (randomNumber1 < randonNumber2 ) {
      document.querySelector("h1").textContent = "Player 2 Won ! "
  }
  else {
        document.querySelector("h1").textContent = "Dice Draw!"
  }
document.querySelector("button").innerHTML = "Replay The Dice"
}
