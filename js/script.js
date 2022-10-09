// dice game script
let player1 = "player1";
let player2 = "player2";
document.getElementById("player1").innerHTML = player1;
document.getElementById("player2").innerHTML = player2;
let score1 = 0;
let score2 = 0;
let number1 = 0;
let number2 = 0;
let counter = 0;
let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
let count_score2 = document.getElementById("count-score2");
let count_score1 = document.getElementById("count-score1");
let result = document.getElementById("result");
document
  .getElementById("start-game")
  .addEventListener("click", function playDice() {
    counter++;
    number1 = Math.floor(Math.random() * 6 + 1);
    number2 = Math.floor(Math.random() * 6 + 1);
    img1.setAttribute("src", "img/" + number1 + ".jpg");
    img2.setAttribute("src", "img/" + number2 + ".jpg");
    if (number1 === number2) {
      result.innerHTML = "Award!";
    } else if (number1 > number2) {
      score1++;

      count_score1.innerHTML = score1;
      result.innerHTML = player1 + " " + "wins!";
    } else {
      score2++;
      count_score2.innerHTML = score2;
      result.innerHTML = player2 + " " + "wins!";
    }

    if (counter >= 5) {
      document.getElementById("start-game").classList.add("disabled");
      if (score1 > score2) {
        result.innerHTML = "player1 wins!!";
      } else if (score2 > score1) {
        result.innerHTML = "player2 wins!!";
      } else {
        result.innerHTML = "Award!";
      }
    }
  });
document
  .getElementById("restart-game")
  .addEventListener("click", function restartDice() {
    number1 = 0;
    number2 = 0;
    score1 = 0;
    score2 = 0;
    counter = 0;
    count_score1.innerHTML = "0";
    count_score2.innerHTML = "0";
    img1.setAttribute("src", "img/6.jpg");
    img2.setAttribute("src", "img/6.jpg");
    result.innerHTML = "";
    document.getElementById("start-game").classList.remove("disabled");
  });
