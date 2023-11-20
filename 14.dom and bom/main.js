// --------------------------------------------------------- TASK 1 ---------------------------------------------------------

// Bir dəyişən təyin edin və dəyəri 1 olsun. 1 saniyədən bir consol-da yaratdığınız dəyişənin dəyərini +1 artırın. 4 saniyə
// sonra intervalı sonlandırın.

// let count = 1;
// let countInterval=setInterval(() => {
//     console.log(count++);
// }, 1000)
// setTimeout(() => {
//     clearTimeout(countInterval)
// },4000)

// --------------------------------------------------------- TASK 2 ---------------------------------------------------------

// HTML-də button və text üçün tag yazın. button-a click ettikdə text-içindəki yazı dəyişsin.

// let startBtn = document.querySelector(".start");
// let text=document.querySelector(".text")
// console.log(startBtn);
// console.log(text);

// startBtn.addEventListener("click", element);
// function element() {
//     text.innerHTML="I am developer!!!"
//     text.style.color="green"
//     text.style.fontSize="50px"
// }

// --------------------------------------------------------- TASK 3 ---------------------------------------------------------

// HTML-də birdən çox eyni adda class sahib element yaradın. Hər bir elementi loop ilə tək-tək console-a çıxardın.

//  let allCities = document.querySelectorAll(".city")
//  allCities.forEach(element => {
//     console.log(element.innerText);
//  });

//  --------------------------------------------------------- TASK 4 ---------------------------------------------------------

// // let str = "developer";

// Verilmiş string-in hər bir hərfini 1 saniyədən bir böyük hərf edin.

// Developer
// DEveloper
// DEVEloper
// DEVELOper
// DEVELOPer
// DEVELOPEr
// DEVELOPER

let str = "developer";
let i = 1;
let interval = setInterval(() => {
  if (i <= str.length) {
    str = str.slice(0, i).toLocaleUpperCase() + str.slice(i);
    console.log(str);

    i++;
  } else {
    clearInterval(interval);
  }
}, 1000);

// --------------------------------------------------------- TASK 5 ---------------------------------------------------------

// HTML-də button yaradın və ona click ettikdə body-nin background color-u dəyişsin.

let colors = ["blue", "red", "green", "blueviolet", "dodgerblue", "black"];
let colorBtn = document.querySelector(".colorsbtn");

colorBtn.addEventListener("click", function () {
  document.body.style.backgroundColor =
    colors[Math.floor(Math.random() * colors.length )];
});

