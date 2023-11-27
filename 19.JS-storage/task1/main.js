let form = document.querySelector("form");
// let allInputs=document.querySelectorAll(".form-control")
let fistName = document.querySelector("#firstName");
let lastName = document.querySelector("#lastName");
let address = document.querySelector("#address");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let data = JSON.parse(localStorage.getItem("personObj")) || [];

  console.log(fistName.value);
  let objects = {
    id: Date.now(),
    fistName: fistName.value,
    lastName: lastName.value,
    address: address.value,
  };

  data.push(objects);
  localStorage.setItem("personObj", JSON.stringify(data));
  lastName.value = "";
  fistName.value = "";
  address.value = "";
});
