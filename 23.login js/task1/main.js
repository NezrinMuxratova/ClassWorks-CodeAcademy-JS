let form = document.querySelector(".form");

// let divElem=document.createElement("div")

// // divElem.append(inputEmail)

let inputEmail = document.createElement("input");
inputEmail.type = "email";
inputEmail.name = "email";
inputEmail.placeholder = "Email";
inputEmail.style.display = "block";
inputEmail.style.margin = "5px 0";


let inputPaswword = document.createElement("input");
inputPaswword.type = "password";
inputPaswword.name = "password";
inputPaswword.placeholder = "Password";
inputPaswword.style.display = "block";
inputPaswword.style.margin = "5px 0";

let textOne = document.createElement("a");
textOne.innerText = "Forgot password?";
textOne.style.display = "block";
textOne.style.margin = "5px 0";
textOne.href =
  "https://codepal.ai/live-webpage-generator/query/f9q11N60/login-form-html-css-javascript";
textOne.style.textDecoration = "none";
textOne.style.color = "blue";

let loginBtn = document.createElement("button");
loginBtn.innerText = "Login";
loginBtn.style.padding = "5px 70px";
loginBtn.style.borderRadius = "5px";
loginBtn.style.border = "none";
loginBtn.style.background = "blue";
loginBtn.style.color = "white";
loginBtn.style.display = "block";
loginBtn.style.cursor = "pointer";
loginBtn.style.margin = "5px 0";

let textTwo = document.createElement("span");
textTwo.innerText = "Create an account  ";

let textThree = document.createElement("a");
textThree.innerText = "Signup now";
textThree.href = "#";
textThree.style.textDecoration = "none";
textThree.style.color = "blue";
textThree.style.display = "inline";
form.append(inputEmail, inputPaswword, textOne, loginBtn, textTwo, textThree);

let login = [];
loginBtn.addEventListener("click", function (e) {
  e.preventDefault();
  let users = {
    email: inputEmail.value,
    password: inputPaswword.value,
  };
  login.push(users);
  // if (inputEmail.value != "" || inputPaswword.value != "") {
  //   localStorage.setItem("user", JSON.stringify(login));
  //   JSON.parse(localStorage.getItem("user"));
  //   console.log(users);
  // } else {
  //   window.alert("Error");
  // }

  
  document.querySelectorAll("input").forEach((item) => {
    item.value = "";
    console.log(item);
  });
  login.forEach(item=> {
    if (item.email == inputEmail.value && item.password==inputPaswword.value) {
      window.location.href="./home.html"

    }else{
      window.location.href="./signup.html"
    }
  })
});
