let inputOne = document.querySelector(".inputOne");
let addBtn = document.querySelector(".addBtn");
let container = document.querySelector(".container");
let listElem = document.querySelector(".list");

container.style.gap = "8px";

inputOne.style.border = "3px solid blue";
inputOne.style.width = "30%";

addBtn.style.background = "blue";
addBtn.style.color = "white";
addBtn.style.border = "none";
addBtn.style.borderRadius = "5px";
addBtn.style.padding = "5px";

addBtn.addEventListener("click", function () {
  let buttonElem = document.createElement("button");
  let spanElem = document.createElement("span");
  let liElem = document.createElement("li");

  spanElem.innerText = inputOne.value;
  buttonElem.innerText = "Delete";
  inputOne.value = "";

  liElem.style.background = "pink";
  liElem.style.marginBottom = "5px";
  liElem.style.width = "40%";

  buttonElem.style.margin = "5px";
  buttonElem.style.background = "red";
  buttonElem.style.color = "white";
  buttonElem.style.borderRadius = "5px";
  buttonElem.style.border = "none";
  buttonElem.style.marginLeft = "450px";
  buttonElem.style.padding = "5px";

  listElem.append(liElem);
  liElem.append(spanElem, buttonElem);

  buttonElem.addEventListener("click", function () {
    this.parentElement.remove();
  });
});
