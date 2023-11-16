let arr= [1,2,2,2,4,3,3,2,4,7,5,7,6,];

//1.remove dublicated values 
// function removeDublicates(arr) {
//     return arr.filter((item,index)=>arr.indexOf(item)===index)
// }

// function removeDublicates(arr) {
//     let result=[];
//     arr.forEach((item) => {
//         !result.includes(item) && result.push(item)
//     })
//     return result;
// }

// function removeDublicates(arr) {
    
// }
// console.log(removeDublicates(arr));
 ///---2.Yuxaridaki arrayda her hansi ededinnece defe tekrarlandigini tapan funksiya tapin
 function findDigitOfArray(number) {
    let count=0;
    number.forEach((num)=>
    num=== number && count++)
return count
 }
 console.log(findDigitOfArray(arr,7));
 console.log(findDigitOfArray(arr,2));

 //3. generate otp (4 reqemli otp kodu yaradan)
 function generateOtp() {
    let digits= "0123456789";
    let OTP= "";
 for (let i = 0; i < 4; i++) {
OTP += digits[Math.floor(Math.random() *10)]    
 }
 return  OTP;
 }
 console.log(generateOtp());


 //4. find all truch values in myArr
 let myArr= [1,4,true,false,0,5 ,"hello", NaN, undefined];
//  let allTrue= myArr.filter(Boolean);
//  console.log(allTrue);
console.log(myArr.filter((item) => Boolean(item)));
console.log(myArr.filter((item) => !Boolean(item)));
 //5.Arraydaki en boyuk reqemi tapan ve nece defe tekrarlandigini gosteren funksiya yazin .

 let max=Math.max(...arr)
 function findMaxDigitOfArray(arr, number) {
    let count=0;
    arr.forEach((num) => num === max && count ++ )
    return count;
 }
 console.log(findMaxDigitOfArray(arr));