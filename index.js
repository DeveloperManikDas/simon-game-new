const startButton = $(".info button");
const title = $(".heading h1");

let level = 0;
let gamePattern = [];
let userPattern = [];

$(".btn").on("click", (e) => {  
  const color = e.target.id;
  userPattern.push(color);
  playSound(color);
  animateButton(color);
  checkWin(userPattern.length - 1);
  console.log("gamePattern ",gamePattern);
  console.log("userPattern ",userPattern);
});

startButton.click(() => {
  startButton.hide();
  generateRandomColor();
});

function checkWin(level) {
  if (userPattern[level] === gamePattern[level] ) {
    if (userPattern.length === gamePattern.length) {
      setTimeout(() => {
        generateRandomColor();
      }, 1000);
    }
  } else {
    gameOver();
  }
}

function generateRandomColor() {
  userPattern = [];
  level++;
  title.text("Level: " + level);
  let randomNumber = Math.floor(Math.random() * 4);
  let colors = ["green", "red", "yellow", "blue"];
  let randomColor = colors[randomNumber];
  gamePattern.push(randomColor);

  playSound(randomColor);
  animateButton(randomColor);
}

function playSound(color) {
  let audio = new Audio("./sounds/" + color + ".mp3");
  audio.play();
}

function animateButton(color) {
  $("#" + color)
    .fadeOut(100)
    .fadeIn(100);
}

function gameOver() {
  level = 0;
  userPattern = [];
  gamePattern = [];
  playSound("wrong");
  startButton.show();
  startButton.text("Retry")
}
