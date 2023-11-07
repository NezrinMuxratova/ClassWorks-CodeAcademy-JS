// (function (user) {
//     console.log(`I am ${user}`);
// })("Nazrin") // anonim function

// const number = [1,2,3,4,5,6,7,8]
//Tek ededleri filter methodu vasitesile yeni bir deyiskene menimse;
//[1,3,5,7]
//  const oddNumber=number.filter((num=> num%2===1))
//  console.log(oddNumber);

// part II
//1 ve 10 araligindaki reqemleri consol-a cixarin [1,2,3,4,5,6,7,8,9,10]
const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

const numbers = array.filter((num) => num > 0 && num <= 10);
console.log(numbers);

//TASK 2
// part I

//   Verilmiş array-də objectlərin first_name və last_name dəyişkənin aşağıdaki kimi göstərin.

//   =====> ["Mike Sheridan", "Tim Lee", "John Carte"]
const users = [
  {
    first_name: "Mike",
    last_name: "Sheridan",
  },
  {
    first_name: "Tim",
    last_name: "Lee",
  },
  {
    first_name: "John",
    last_name: "Carte",
  },
];
const userName = users.map((element) => {
  return element.first_name + "," + element.last_name;
});
console.log(userName);

//   -------------------------------------------------  TASK 3  -------------------------------------------------

// find metodu vasitəsilə array-in içindəki, yaşı 30-dan yuxarı olan ilk şəxsi "firstPerson" adlı dəyişkənə
// mənimsədib console-a çıxardın. ====> { name: 'Aysu', age: 32 }
const persons = [
  { name: "Akif", age: 25 },
  { name: "Aysu", age: 32 },
  { name: "Ali", age: 35 },
];

const namePersons = persons.find((elem) => elem.age > 30);
console.log(namePersons);
// ------------------------------ part II

// tapdığınız objectin index-ni də ikinci bir console-da çıxardın.(metod ilə)

const namePersonsIndex = persons.findIndex((elem) => elem.age > 30);
console.log(namePersonsIndex);

//-------------------------------------------------  TASK 4  -------------------------------------------------
// Verilmiş array-in hər bir elementini qüvvətə yüksəldin.   ======> [ 1, 16, 81, 256 ]
const array1 = [1, 4, 9, 16];

const array2 = array1.map((element) => {
  return element * element;
});
console.log(array2);

//-------------------------------------------------  TASK 5  -------------------------------------------------

// Verilmiş animals array-ni slice metodu vasitəsilə aşağıdaki kimi yazmağa çalışın.

// const animals = ["ant", "bison", "camel", "duck", "elephant"];

// console.log(animals.slice(2));
// // Gözlənilən çıxış: ["camel", "duck", "elephant"]

// console.log(animals.slice(2, 4));
// // Gözlənilən çıxış: ["camel", "duck"]

// console.log(animals.slice(1));
// // Gözlənilən çıxış: ["bison", "camel", "duck", "elephant"]

// console.log(animals.slice(3));
// // Gözlənilən çıxış: ["duck", "elephant"]

// console.log(animals.slice(2, 4));
// // Gözlənilən çıxış: ["camel", "duck"]

// console.log(animals.slice("ant"));
// // Gözlənilən çıxış: ["ant", "bison", "camel", "duck", "elephant"]

//-------------------------------------------------  TASK 6  -------------------------------------------------

// const months = ["Jan", "March", "April", "June"];
// months.splice(* , * , 'Feb');
// console.log(months);
// // Expected output: ["Jan", "Feb", "March", "April", "June"]

// months.splice(*, *, 'May');
// console.log(months);
// // Gözlənilən çıxış: ["Jan", "Feb", "March", "April", "May"]

// months.splice(1, 0, "Feb");
// console.log(months);
// months.splice(-1, 1, "May");
// console.log(months);

//-------------------------------------------------  TASK 7  -------------------------------------------------

const company = [
  { firstName: "John", lastName: "Doe", salary: 50000, yearsWorked: 5 },
  { firstName: "Alice", lastName: "Johnson", salary: 60000, yearsWorked: 8 },
  { firstName: "Bob", lastName: "Smith", salary: 75000, yearsWorked: 3 },
  { firstName: "Eve", lastName: "Williams", salary: 55000, yearsWorked: 7 },
];

const companyName = company.map((element) => {
  return `${element.firstName} ${element.lastName} illik ${element.salary}$ maas alir ve ${element.yearsWorked} ildir calisir.`

});
console.log(companyName);
