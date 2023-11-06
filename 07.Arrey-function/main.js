//printFullName adinda funksiya yaradirsiniz ve 2 parametr qebul edir (firstName :"lorem", lastName:"Ipsum")
//console .log (printFullName())// Ism Nazrin Mukhtarova
function fullName(lastName = `Lorem`, firstName = `Ipsum`) {
  return `I am ${lastName} ${firstName}`;
}
console.log(fullName("Nazrin", "Mukhtarova"));

// 4 funksiya yazin. Her biri 2 parametr qebul etsin ve riyazi emelleri yerine yetirsin

// console.log(sum(2,3)); // 5
// console.log(multiply(2,3)); // 6
// console.log(subtruct(2,3)); // -1
// console.log(divide(2,3)); // 0,6666666

function sum(num1, num2) {
  return num1 + num2;
}
console.log(sum(2, 3));

function multiply(num3, num4) {
  return num3 * num4;
}
console.log(multiply(2, 3));

function subtruct(num3, num4) {
  return num3 - num4;
}
console.log(subtruct(2, 3));

function divide(num3, num4) {
  return num3 / num4;
}
console.log(divide(2, 3));

// Ele bir funksiya yazin ki, 3 parametr qebul etsin, 2 eded ve 1 eded operator . Operatora uygun neticeni return etsin.

function calculater(num1, num2, operator) {
  let result;
  if (operator === "+") {
    result = num1 + num2;
  } else if (operator === "-") {
    result = num1 - num2;
  } else if (operator === "*") {
    result = num1 * num2;
  } else if (operator === "/") {
    result = num1 / num2;
  } else {
    result = "Bele bir emeliyyat movcud deyil";
  }
  return result;
}
console.log(calculater(2, 3, "a"));

// filterEmployees adinda funskiya yaradin, parametr kimi bir array alsin ve salary >60000 olan objectleri return edin
const employees = [
  { namme: "Jamil", salary: 50000, department: "IT" },
  { namme: "Jale", salary: 60000, department: "HR" },
  { namme: "Bayram", salary: 55000, department: "IT" },
  { namme: "Jamil", salary: 75000, department: "HR" },
  { namme: "Jamil", salary: 65000, department: "IT" },
  { namme: "Jamil", salary: 80000, department: "HR" },
  { namme: "Jamil", salary: 70000, department: "IT" },
];
function filterEmployees(array) {
  let newEmployees = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].salary > 60000) {
      newEmployees.push(array[i]);
    }
  }
  return newEmployees;
}
console.log(filterEmployees(employees));

//reverseString - adinda bir function teyin edin, parametr kimi string gonderin ve ters cevirin
//# reverseString ("Hello ") netice olaraq bele gorunmelidir . => olleH

function reverseString(string) {
  let reverse = "";
  for (let i = string.length - 1; i >= 0; i--) {
    reverse += string[i];
  }
  return reverse;
}
console.log(reverseString("Hello"));

//Size verilen cumlenin nece herfden ibaret oldugunu tapin.
let strrrrr =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
function lettersNumber(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " " && str[i] !== "." && str[i] !== "'" && str[i] !== ",") {
      count++;
    }
  }
  return count;
}
console.log(lettersNumber(strrrrr));
