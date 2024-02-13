AOS.init();

function redirectTo404() {
  window.location.href = "404.html";
}

var button1 = document.getElementById("btn1");
var button2 = document.getElementById("btn2");
var button3 = document.getElementById("btn3");

button1.addEventListener("click", redirectTo404);
button2.addEventListener("click", redirectTo404);
button3.addEventListener("click", redirectTo404);

var images = ["assets/imageRight.jpg", "assets/imageRight2.jpeg"];

var currentIndex = 0;

var inactiveButton = document.getElementById("inactive");
var activeButton = document.getElementById("active");

inactiveButton.addEventListener("click", function () {
  if (currentIndex > 0) {
    currentIndex--;
    displayImage();
  }
  var tempId = activeButton.id;
  activeButton.id = inactiveButton.id;
  inactiveButton.id = tempId;

  var tempBtn = activeButton;
  activeButton = inactiveButton;
  inactiveButton = tempBtn;
});

activeButton.addEventListener("click", function () {
  if (currentIndex < images.length - 1) {
    currentIndex++;
    displayImage();
  }

  var tempId = activeButton.id;
  activeButton.id = inactiveButton.id;
  inactiveButton.id = tempId;

  var tempBtn = activeButton;
  activeButton = inactiveButton;
  inactiveButton = tempBtn;
});

function fadeOut(imgElement, callback) {
  var opacity = 1;
  var lastTime = null;

  function frame(time) {
    if (lastTime !== null) {
      opacity -= (time - lastTime) * 0.003;
      imgElement.style.opacity = Math.max(opacity, 0);
    }
    lastTime = time;
    if (opacity > 0) {
      requestAnimationFrame(frame);
    } else {
      callback();
    }
  }

  requestAnimationFrame(frame);
}

function fadeIn(imgElement) {
  var opacity = 0;
  var lastTime = null;

  function frame(time) {
    if (lastTime !== null) {
      opacity += (time - lastTime) * 0.003;
      imgElement.style.opacity = Math.min(opacity, 1);
    }
    lastTime = time;
    if (opacity < 1) {
      requestAnimationFrame(frame);
    }
  }

  requestAnimationFrame(frame);
}

function displayImage() {
  var imgElement = document.querySelector(".containerImage img");
  if (imgElement) {
    fadeOut(imgElement, function () {
      imgElement.src = images[currentIndex];
      imgElement.style.opacity = 0;
      fadeIn(imgElement);
    });
  }
}
