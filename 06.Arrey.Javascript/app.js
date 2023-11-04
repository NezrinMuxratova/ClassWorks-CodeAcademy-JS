// let array = Array();
// let itCompanies = [
//   "Facebook",
//   "Google",
//   "Microsoft",
//   " Apple",
//   "IBM",
//   "Oracle",
//   "Amazon",
// ];
//---------------------------------------------------------------------------------------------------------------
// console.log(itCompanies.length);
//---------------------------------------------------------------------------------------------------------------
// console.log(itCompanies);
//---------------------------------------------------------------------------------------------------------------
// console.log(
//   "Ilk element:",
//   itCompanies[0],
//   "Sonuncu elementi:",
//   "Orta element:",
//   itCompanies[(itCompanies.length - 1) / 2],
//   "Orta element:",
//   itCompanies[itCompanies.length - 1]
// );
//----------------------------------------------------------------------------------------------------------------
// for (let i = 0; i < itCompanies.length; i++) {

//     array.push(itCompanies[i].toLocaleUpperCase(`TR`))
// }
// console.log(array);
//----------------------------------------------------------------------------------------------------------------
// console.log(itCompanies.toString(), "boyek It sirketleridir");

//----------------------------------------------------------------------------------------------------------------
// Verilmis  array-in en uzun sozunu ekrana cixaran program yazin.
// let itCompanies = [
//   "Facebook",
//   "Google",
//   "Microsoft",
//   " Apple",
//   "IBM",
//   "Oracle",
//   "Amazon",
// ];
// let maxCompanies=itCompanies[0].length;
// let maxIndex=0;
// for (let i = 0; i < itCompanies.length; i++) {
//   if (itCompanies[i].length > maxCompanies) {
//     maxCompanies = itCompanies[i].length;
//     maxIndex=i;
//   }
// }

// console.log(maxCompanies); //9
// console.log (itCompanies[maxIndex]) // Microsoft

let compaines = [
  "Facebook",
  "Google",
  "Microsoft",
  "APPLE",
  "IBM",
  "Oracle",
  "Amazon",
];

for (let i = 0; i < compaines.length; i++) {
  if (compaines[i] === compaines[i].toLocaleUpperCase()) {
    console.log(`${i}. ${compaines[i]}`);
  }
}// 3.APPLE 
// 4.IBM

