let result = document.querySelector(".result");
let startBtn = document.querySelector(".start");
let stopBtn = document.querySelector(".stop");

startBtn.style.background = "green";
startBtn.style.color = "white";
startBtn.style.padding = "10px 30px";
startBtn.style.border = "none";

stopBtn.style.background = "red";
stopBtn.style.color = "white";
stopBtn.style.padding = "10px 30px";
stopBtn.style.border = "none";

let count = 0;
let countInterval;

startBtn.addEventListener("click", function () {
  this.setAttribute("disabled", "true");
  stopBtn.removeAttribute("disabled");
  countInterval = setInterval(() => {
    result.innerText = ++count;
  }, 1000);
});

stopBtn.addEventListener("click", function () {
  startBtn.removeAttribute("disabled");
  this.setAttribute("disabled", null);
  clearInterval(countInterval);
});

let incremenetBtn = document.querySelector(".increment");
let decremenetBtn = document.querySelector(".decrement");
incremenetBtn.style.padding = "10px 20px";
incremenetBtn.style.background = "teal";
incremenetBtn.style.color = "white";
incremenetBtn.style.border = "none";

decremenetBtn.style.padding = "10px 20px";
decremenetBtn.style.background = "teal";
decremenetBtn.style.color = "white";
decremenetBtn.style.border = "none";

incremenetBtn.addEventListener("click", function () {
  result.innerText = count++;
});
decremenetBtn.addEventListener("click", function () {
  result.innerText = count--;
});

let resetBtn = document.querySelector(".reset");
resetBtn.style.background = "red";
resetBtn.style.padding = "10px 40px";
resetBtn.style.border = "none";
resetBtn.addEventListener("click", function () {
  count = 0;
  result.innerText = 0;
  clearInterval(countInterval);
  startBtn.removeAttribute("disabled");
  stopBtn.removeAttribute("disabled");
});

let inputIncrement = document.querySelector(".inputIncremnt");
let inputDecrement = document.querySelector(".inputDecrement");
let decremenetValueBtn = document.querySelector(".decremenetValue");
let incremenetValueBtn = document.querySelector(".incremenetValue");
let search=documnet.querySelector(".search")

decremenetValueBtn.style.padding = "3px 10px";
incremenetValueBtn.style.padding = "3px 17px";
decremenetValueBtn.style.background = "orange";
incremenetValueBtn.style.background = "orange";
decremenetValueBtn.style.border = "none";
incremenetValueBtn.style.border = "none";

inputDecrement.style.border = "2px solid red";
inputIncrement.style.border = "2px solid red";

incremenetValueBtn.addEventListener("click", function () {
  count += +inputIncrement.value;
  result.innerText = count;
});
decremenetValueBtn.addEventListener("click", function () {
  count -= +inputDecrement.value;
  result.innerText = count;
});

