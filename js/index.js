window.addEventListener("load", function () {
  var element = document.querySelector(".intro__block");
  var position = element.getBoundingClientRect().top;
  var windowHeight = window.innerHeight;
  if (position < windowHeight) {
    element.classList.add("appear");
  }
});

window.addEventListener("scroll", function () {
  var element = document.querySelector(".block_title");
  var position = element.getBoundingClientRect().top;
  var windowHeight = window.innerHeight;
  if (position < windowHeight) {
    element.classList.add("appear");
  }
});

window.addEventListener("scroll", function () {
  var element = document.querySelector(".novosti_block");
  var position = element.getBoundingClientRect().top;
  var windowHeight = window.innerHeight;
  if (position < windowHeight) {
    element.classList.add("appear");
  }
});

window.addEventListener("scroll", function () {
  var element = document.querySelector(".novosti_block2");
  var position = element.getBoundingClientRect().top;
  var windowHeight = window.innerHeight;
  if (position < windowHeight) {
    element.classList.add("appear");
  }
});

window.addEventListener("scroll", function () {
  var element = document.querySelector(".novosti_block3");
  var position = element.getBoundingClientRect().top;
  var windowHeight = window.innerHeight;
  if (position < windowHeight) {
    element.classList.add("appear");
  }
});
