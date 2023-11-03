//Task 1
//const elements =[12, 45, 6, 78, 34, 99 ,23]

// Verilmis array-da en boyuk ve en balaca  elementi tapin . En boyek reqem :99; en kicik reqem:6;
let numbers = [12, 45, 6, 78, 34, 99, 23];
let max = numbers[0];
let min = numbers[0];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i];
  } else if (numbers[i] < min) {
    min = numbers[i];
  }
}
console.log("Max:", max, "Min:", min);
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] < min) {
//     min = numbers[i];
//   }
// }
// console.log("Min:", min);

//Task 2 const number=[12, 45, 6, 78, 34, 99 ,23]
//Verilmis arrayin elementlerinin cemini hesablayin.

let number = [12, 45, 6, 78, 34, 99, 23];
let sum = 0;
for (let i = 0; i < number.length; i++) {
  sum += number[i];
}
console.log("Sum", sum);

//Task 3 const elements [1,2,3,4,5];
//Verilmis array-da 2-ci index ile 3 index yerini deyisdirin.: [1,2,4,3,5]

let num = [1, 2, 3, 4, 5];
let temp;
temp = num[2];
num[2] = num[3];
num[3] = temp;
console.log(num);

// Task 4 cost number [12, -5, 6, -3, 34, -1 ,23]
//Verilmis array-da musbet reqemleri consola cixarin

let arr = [12, -5, 6, -3, 34, -1, 23];
let positive = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 0) {
    positive = arr[i];
    console.log(positive);
  }
}

