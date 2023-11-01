// 1. 1-100 araliginda sadece cut reqemleri cap edin

// for (let index = 1; index <=100 ; index++) {
//     if(index%2===0){
//         console.log(index)
//     }
// }

// 2. Oz adinizi herflere parcalayin

// let str = "Nazrin"
// let strLength = str.length;
// for (i = 0; i < strLength; i++) {
//     console.log(str[i]);
//   }

// 3. Son reqemi 7 olan butun iki ededleri capa veren prqram tertib edin.
// let a=0;
// while (a < 100) {
//   a++;
//   if (a % 10 === 7) {
//     console.log(a);
//   }
// }

//4. Reqemleri eyni olan butun iki reqemli  ededlerin capa veren proqram tertib edin.
// let b=0;
// while(b<100){
//     b++;
//     if(b %11 === 0){
//         console .log (b)
//     }
// }

// 5.Verilmis ededin butun bolenlerini tapan proqram tertib edin.
// let number=30;
// for (let i=0; i<30; i++){
//     if(number%i==0){
//         console.log(i)
//     }
// }

//6. 0-dan 15-ə qədər rəqəmləri çap edin.
// let e=-1;
// while (e<15){
//     ++e;
//   console.log(e)
// }

//7.12-dən 24-ə qədər rəqəmləri çap edin.
// let f=11;
// while(f<24){
//     ++f;
//     console.log (f)
// }

//8.7-dən 31-ə qədər TƏK nömrələri çap edin.
// let n=6;
// while(n<31){
//     n++;
//     if(n%2==1){
//      console.log(n)
//     }
// }

//9.10-dan 20-yə qədər cüt ədədləri çap edin
// let k=9;
// while(k<20){
//     k++;
//     if(k%2==0){
//         console.log(k)
//     }
// }
//10. 1-den 255-e qeder 3-e bolunende "Fizz" 5-e bolunende "Buzz" 15-e bolunende "FizzBuzz"
// let a=0;
// while (a<255){
//     a++;
//     if(a%3==0){
//         console.log(`${a} Fizz  `)
//     } if(a%5==0){
//         console.log( ` ${a}Buzz `)
//     } if (a%15==0){
//         console.log(`${a} FizzBuzz`)
//     }
// }

//11.Faktorialini hesablayan program.
let a = 5;
let factorial = 1;
for (let i = 1; i <= a; i++) {
  factorial *= i;
}
console.log(`Factorial ${factorial}`);
