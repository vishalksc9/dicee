var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var imageSelected1 = "images/" + "dice" + randomNumber1 +".png";
var imageSelected2 = "images/" + "dice" + randomNumber2 +".png";

if (randomNumber1 === randomNumber2) {
  document.querySelector("h1").innerHTML = "Draw!";
}
else if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 wins";
}
else {
  document.querySelector("h1").innerHTML = "Player 2 wins 🚩";

}

document.querySelector(".img1").setAttribute("src", imageSelected1);
document.querySelector(".img2").setAttribute("src", imageSelected2);
