let btnDark = document.querySelector("#btnDark");
let body = document.querySelector("body");

localStorage.getItem("dark-mode") === "true" &&
  document.body.classList.add("dark-mode");

btnDark.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
  localStorage.getItem("dark-mode") === "true"
    ? localStorage.setItem("dark-mode", false)
    : localStorage.setItem("dark-mode", true);
});

