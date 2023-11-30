let form = document.querySelector(".form");

let inputName=document.createElement("input")
 inputName.type="text"
 inputName.name="Name"
 inputName.style.display="block"
inputName.placeholder='Name' 



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

let inputConfirm=document.createElement("input")
inputConfirm.type="password"
inputConfirm.name="password"
inputConfirm.placeholder="Confirm Password"


let signupBtn = document.createElement("button");
signupBtn.innerText = "Signup";
signupBtn.style.padding = "5px 70px";
signupBtn.style.borderRadius = "5px";
signupBtn.style.border = "none";
signupBtn.style.background = "blue";
signupBtn.style.color = "white";
signupBtn.style.display = "block";
signupBtn.style.cursor = "pointer";
signupBtn.style.margin = "5px 0";

let textTwo = document.createElement("span");
textTwo.innerText = "Create an account  ";

let textThree = document.createElement("a");
textThree.innerText = "Signup now";
textThree.href = "#";
textThree.style.textDecoration = "none";
textThree.style.color = "blue";
textThree.style.display = "inline";

form.append(inputName,inputEmail, inputPaswword,inputConfirm, signupBtn, textTwo, textThree);

let login = [];
signupBtn.addEventListener("click", function (e) {
  e.preventDefault();
  let users = {
    email: inputEmail.value,
    password: inputPaswword.value,
    name:inputName.value,
    confirname:inputConfirm.value
  };
  if (inputPaswword.value == inputConfirm.value ) {
    login.push(users);
    localStorage.setItem("user", JSON.stringify(login));
    JSON.parse(localStorage.getItem("user"));
    console.log(users);
  } else {
    window.alert("Password incorrect");
  }
  window.location="./index.html"
  document.querySelectorAll("input").forEach((item) => {
    item.value = "";
    console.log(item);
  });
});

