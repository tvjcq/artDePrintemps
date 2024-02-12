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
