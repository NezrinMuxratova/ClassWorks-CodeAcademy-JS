let form = document.querySelector("form");
let emailLogin = document.querySelector(".email");
let passwordLogin = document.querySelector(".password");
let allInputs = document.querySelectorAll("input");
let faEye=document.querySelector("fa-eye")
let login = JSON.parse(localStorage.getItem("user")) ?? [];

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let text = login.some((item) => item.email === emailLogin.value && item.password === passwordLogin.value);
  console.log(text);

  if (text) {
    window.location = "./home.html";
  } else if (!text) {
    window.location = "./signup.html";
  }
  console.log(text);
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
  