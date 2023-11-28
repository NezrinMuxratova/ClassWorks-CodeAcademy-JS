const employees = [
  { name: "Jamil", salary: 50000, department: "IT" },
  { name: "Jale", salary: 60000, department: "HR" },
  { name: "Bayram", salary: 55000, department: "It" },
  { name: "Sahil", salary: 75000, department: "HR" },
  { name: "Maryam", salary: 65000, department: "It" },
  { name: "David", salary: 70000, department: "HR" },
];

const fruits = ["banana", "orange"];
let add = document.querySelector(".btn-add");
let list = document.querySelector(".list");
let remove = document.querySelector(".remove");

add.addEventListener("click", function () {
  window.localStorage.setItem("fruits", JSON.stringify(fruits));
  JSON.parse(localStorage.getItem("fruits")).forEach((element) => {
    list.innerHTML += `<li>${element}</li>`;
  });
});
remove.addEventListener("click", function() {
  window.localStorage.removeItem("fruits");
  list.innerHTML = "";
});
