let container = document.querySelector(".container");
let listAll = document.querySelectorAll(".list");
let keys = document.querySelectorAll(".key");
let words = document.querySelector(".words");

document.addEventListener("keydown", function (event) {
  keys.forEach((key) => {
    if (key.innerText == event.key) {
      key.style.background = "green";
      key.style.transform = "scale(1.2)";
    }
  });
words.innerText += event.key
});

document.addEventListener("keyup", function (event) {
  keys.forEach((key) => {
    if (key.innerText == event.key) {
      key.style.background = "darkcyan";
      key.style.transform = "none";
    }
  });
});
