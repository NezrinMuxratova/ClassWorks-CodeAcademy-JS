const num = Math.floor(Math.random() * 11);
console.log(num);

let fisrtName = "Nazrin ";
let lastName = "Mukhtarova";
let age = "20";
let a = "Math teacher";
let b = "student";
console.log(`I am ${fisrtName} ${lastName}`);
let c = 5;
let d = 9;
console.log(`${c} greated ${d} ${c < d}`);

console.log(fisrtName.length);

let name = fisrtName[0];
console.log(name);
console.log(fisrtName.toUpperCase());
console.log(fisrtName.toLowerCase());
console.log(fisrtName.substr(2, 3));
let string = "JavaScript";
console.log(string.substr(4, 6));

let fullName = "Nazrin Mukhtarova Math Teacher ";

console.log(fullName.split(" ")); //arraya cevirir
console.log(fullName.trim()); //bosluqlari silir
console.log(fullName.includes("red")); //fullName-de olub olmadigni yoxlayir
console.log(fullName.replace("Nazrin", "Kanan")); //yerini deyyisir
console.log(fullName.replace("Mukhtarova", "Amirov")); //yerini deyisir
console.log(fullName.charAt(0)); //0-ci elementi qaytarir N
console.log(fullName.lastIndexOf("Math")); //Nomresini qaytarir 18
console.log(fullName.concat("Code Acamdy student")); //birlesdirir
console.log(fullName.startsWith("Math")); // bu metod fullNamade olan yazinin ne ile baslandigini gosterir false qaytarir
console.log(fullName.endsWith("Math")); // bu metod fullNamade olan yazinin ne ile bitdigini gosterir false qaytarir
console.log(fullName.search("Teacher")); //23-de yerlesir
console.log(fisrtName.repeat(3)); //3 defe tekrar edir
let strings =
  "I love JavaScript. If you do not love JavaScript what else can you love.";
console.log(strings.match("love"));

console.log(parseInt(12.94)); //tam hisseni qaytarir 12

console.log(parseFloat("456456.645dfghdry")); //reqemi qaytarir

let empty = null;
console.log(empty); // -> null , means no value

let numOne = 5;
let numTwo = 15;
let sum = numOne + numTwo;
let diff = numOne - numTwo;
let multiply = numOne * numTwo;
let div = numOne / numTwo;
let remainder = numOne % numTwo;
let power = numOne ** numTwo;
console.log(sum, diff, multiply, div, remainder, power);  

let countOne = 0;
console.log(countOne++); // 0
console.log(countOne); // 1

let countTwo = 0;
console.log(--countTwo); // -1
console.log(countTwo); // -1

// let number = prompt('Enter number', 'number goes here') // sehife ilk acilanda gelir
// console.log(number)
// let array=alert("hello")
// console.log(array);
// const agree = confirm("Are you sure you like to delete? "); 
//alert and confirm ferqi Məlumatın istifadəçiyə çatmasını istəyiriksə,
//xəbərdarlıq qutusu istifadə olunur. İstifadəçinin nəyisə 
//yoxlamasını və ya qəbul etməsini istəyiriksə, təsdiq qutusu istifadə olunur.

console.log(4 === '4'
);
const now=new Date()
console.log(now);//practise.js:79 Fri Dec 08 2023 04:12:31 GMT-0800 (Pacific Standard Time)
console.log(now.getFullYear());//2023
console.log(now.getDate())//8
console.log(now.getDay())//5
console.log(now.getHours())//saat 4
console.log(now.getSeconds())//saniye

