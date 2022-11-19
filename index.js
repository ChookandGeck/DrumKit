for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    makeSoumd(this.innerHTML);
    addAnimation(this.innerHTML);
  });
}

document.addEventListener("keydown", function (event) {
  makeSoumd(event.key);
  addAnimation(event.key);
});

function makeSoumd(key) {
  switch (key) {
    case "w":
      let tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      let tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      let tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      let tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      let snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      let crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "l":
      let kickB = new Audio("sounds/kick-bass.mp3");
      kickB.play();
      break;

    default:
  }
  // let currentkey = key;
}

function addAnimation(currentkey) {
  let activeButton = document.querySelector("." + currentkey);

  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.toggle("pressed");
  }, 500);
}
