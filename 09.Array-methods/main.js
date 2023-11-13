//-------------------------------------TASK 1-------------------------------------------------------------------------

//find_FirstNotRepeatedChar adli bir function yaradin . Bu function gonderdiyiniz string-in ilk tekrarlanmayan
// herfini qaytarsin. Netice "e" console.log(FirstNotRepeatedChar(`abacddbec`));

// function FirstNotRepeatedChar(str) {
//   let string = str.split("");
//   let findChar = "";
//   let count = 0;
//   for (let i = 0; i < string.length; i++) {
//     count = 0;
//     for (let j = 0; j < string.length; j++) {
//       if (string[i] === string[j]) {
//         count += 1;
//       }
//     }
//     if (count < 2) {
//       findChar = string[i];
//       break;
//     }
//   }
//   return findChar;
// }
// console.log(FirstNotRepeatedChar(`abacddbec`));

//-------------------------------------TASK 2-------------------------------------------------------------------------



// charCount adlı function yaradın. Bu function 2 ədəd argument qəbul edir. 2-ci göndərdiyiniz hərf 1-cinin içərisində
// neçə dəfə təkrarlanıbsa onun sayısını göstərin. console.log(charCount('w3rescource.com', 'c'));

// Nəticə: 3

function charCount (item,element){
    let count = 0;
    for (let i = 0; i < item.length; i++) {
     if (item[i]=== element) {
        count++
     }
        
    }
    return count
}
console.log(charCount('w3rescource.com', 'c'));

//----------------------------------------------------- TASK 3 -----------------------------------------------------

// console.log(makeId(8));
// makeId adlı function yaradın. Bu function qəbul etdiyi rəqəm uzunluğunda random ID verməlidir.
// Məsələn =====>> 4SGqCfrz
// var charList = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

function makeID(array) {
    
    
}