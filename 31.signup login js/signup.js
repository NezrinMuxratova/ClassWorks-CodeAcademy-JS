let form = document.querySelector("form");
let allInputs = document.querySelectorAll("input");
let textLogin = document.querySelector(".textLogin");
let userNameInput = document.querySelector(".userName");
let emailInput = document.querySelector(".email");
let passwordInput = document.querySelector(".password");
let faEye = document.querySelector(".fa-eye");
let faRegular = document.querySelector(".fa-regular");
let signup = JSON.parse(localStorage.getItem("user")) ?? [];

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let users = {
    userName: userNameInput.value,
    email: emailInput.value,
    password: passwordInput.value,
  };

  signup.push(users);
  localStorage.setItem("user", JSON.stringify(signup));

  window.location = "./login.html";
});

faEye.addEventListener("click", function () {
  console.log(this.className);
  if (this.className === "fa-solid fa-eye") {
    passwordInput.type = "text";
    this.className = "fa-regular fa-eye";
  } else {
    passwordInput.type = "password";
    this.className = "fa-solid fa-eye";
  }
});
