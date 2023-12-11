// TASK 1

const employees = [
  { name: "Jamil", salary: 1500, department: "IT" },
  { name: "Jale", salary: 5000, department: "HR" },
  { name: "Bayram", salary: 24000, department: "IT" },
  { name: "Sahil", salary: 6000, department: "HR" },
  { name: "Maryam", salary: 18000, department: "IT" },
  { name: "Elnara", salary: 20000, department: "HR" },
  { name: "Davud", salary: 14000, department: "IT" },
];

// #ortalama maaşı 20000-dən çox olan departamentləri çapa verən program tərtib edin.
//    for (let index = 0; index < employees.length; index++) {
//     if (employees[index].salary>2000) {
//         console.log(employees[index]);
//     }
    
//    }
// #ortalama maaşı 10000-dən çox olan və departamenti "IT" olanları çapa verən program tərtib edin.
// for (let i = 0; i < employees.length; i++) {
// if (employees[i].salary>10000 && employees[i].department==="IT") {
//     console.log(employees[i]);
// }
// }
// #sadecə department "HR" olanları yeni array'a yığıb, həmin arrayı console edin
for (let i = 0; i < employees.length; i++) {
if (employees[i].department==="HR") {
    console.log(employees[i]);
}    
}
// -------------------
// TASK 2

const person = {
  firstName: "John",
  lastName: "Doe",
  city: "Ganja",
  website: "code.edu.az",
  languageInfo: {
    eng: "Advance",
    aze: "Fluenty",
    rus: "Intermediate",
  },
};

// person adlı object-dən firstName-i, languageInfo-dan eng və rus property-ni destructing edin, əlavə olaraq
// personda yerdə qalan bütün property-ləri otherInfo adı altında rest operatoru ilə bir dəyişənə çıxarın.
  let {firstName, languageInfo:{eng,rus},languageInfo ,...otherInfo} =person
console.log(languageInfo);
console.log(otherInfo);
// console.log(eng); // "Advance"
// console.log(otherInfo); // {lastName: 'Doe', city: 'Ganja', website: 'code.edu.az'}


// -------------------------

// TASK 3

// const person = {
//     firstName: 'Michael',
//     lastName: 'Pam',
//     age: 26,
//     city: 'Poland'
// };

// 1. employees object-nin sadəcə key-lərini console-a çıxardın.
const keys=(Object.keys(person));
console.log(keys);
// 2. employees object-nin sadəcə value-lərini console-a çıxardın.
const value=Object.values(person)
console.log(value);
// 3. Aşağıdakı kimi console-a çıxardın.
//     [firstName: 'Michael']
//     [lastName: 'Pam']
//     [age:26]
//     [city: 'Poland']
const enstries=Object.entries(person)
console.log(enstries);
// 4. object-in age propertysini silin.
    delete person.age
    console.log(person);
// 5. Ən uzun string value-nu console-a çıxardın.
// person.replace()


// TASK 4

 const text = "Java is awesome. Java is fun.";
 console.log(text.replace("Java", "Javascript"));

// text dəyişəndə Java sözünün əvəzinə Javascript yazdırın
// ====>> JavaScript is awesome. Javascript is fun.

// ---------------------

// TASK 5


// Sözün palindrom olub olmadığını yoxlayın.
// let strLength=str.length()
// for (let i = strLength-1; i >=0; i++) {
//     const element = array[i];
    
// }
// console.log(isPalindrome("hello"));
// isPalindrome("hello");




// TASK 6


// console.log(longestWord("Hello word hi programmers"));

// Ən uzun sözü tapın.  ======>> programmers
function longestWord(element){
let array=element.split("").reduce((a,b)=>{
    return b.length-a.length ? a: b , ""
})
return longestWord[array]
}
console.log(longestWord("Hello word hi programmers"));

// ------------------

// TASK 7

// const persons = [
//     { name: "Akif", age: 25 },
//     { name: "Aysu", age: 32 },
//     { name: "Ali", age: 35 }
// ];

// find metodu vasitəsilə array-in içindəki, yaşı 30-dan yuxarı olan ilk şəxsi "firstPerson" adlı dəyişkənə
// mənimsədib console-a çıxardın. ====> { name: 'Aysu', age: 32 }

// ------------------------------ part II

// tapdığınız objectin index-ni də ikinci bir console-da çıxardın.(metod ilə)