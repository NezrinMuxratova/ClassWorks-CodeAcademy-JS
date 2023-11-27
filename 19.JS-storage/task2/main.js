let fullName="Nazrin"
let age="20"
let stroge="work"

console.log(window.localStorage);


// localStorage.setItem("fullname", "Nazrin")
// localStorage.setItem("age", 20)
// localStorage.setItem("stroge", "work")

localStorage.setItem("fullName", JSON.stringify(fullName))

console.log(JSON.parse(localStorage.getItem("fullName")));