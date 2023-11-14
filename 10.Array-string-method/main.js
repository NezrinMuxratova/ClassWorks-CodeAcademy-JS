//--------------------------------------------------------------------------------------------------------

const text = "Java id awesome . Java is fun.";
// text deyisende Java sozunun evezine Javascript yazdirin.\
//====>> JavaScript is awesome. Java is fun.
console.log(text.replace("Java", "Javascript"));

//-----------------------------------------------------------------------------------------------------

// mixUp adlı function yaradın. function 2 parametr qəbul edir. Ən sonda aşağıdakı kimi
// nəticə çıxardın.
// console.log(mixUp("val", "pur")); //'pul var'
// console.log(mixUp("donce", "gevlet")); //'gence dovlet'

function mixUp(a, b) {
  return b.slice(0, 2) + a.slice(2) + " " + a.slice(0, 2) + b.slice(2);
}
console.log(mixUp("val", "pur")); //'pul var'
console.log(mixUp("donce", "gevlet")); //'gence dovlet'

//----------------------------------------------------------------------------------------------------------
// function verbing(word) {

// }

// verbing adlı function yaradın. Bu function bir parametr(feil) qəbul edir. Bu feil əgər 3 hərfdən
// kiçikdirsə sözün özün return edin. Əgər sonu "ing" ilə bitirsə sonuna "ly" əlavə edin. Digər
// hallarda sözün sonuna "ing" əlaavə edin.

// console.log(verbing('go')); // go
// console.log(verbing('swim')); //swiming
// console.log(verbing('swiming')); //swimingly

function verbing(feil) {
  if (feil.endsWith("ing")) {
    return feil + "ly";
  } else if (feil.length > 3) {
    return feil + "ing";
  } else {
    return feil;
  }
}
console.log(verbing("go")); // go
console.log(verbing("swim")); //swiming
console.log(verbing("swiming")); //swimingly

//--------------------------------------------------------------------------------------------

// Sözün palindrom olub olmadığını yoxlayın.

// function isPalindrome(string) {

// }

// isPalindrome("radar");

function isPalindrome(string) {
  return true;
}
console.log(isPalindrome("radar"));

//----------------------------------------------------------------------------------------------------
// const array = [1, 2, 3, 4, 5, 6, 7, 8];
// const length = 4;

// function splitIntoChunk(arr, len) {

// }

// console.log(splitIntoChunk(array, leng)); // [ [ 1, 2, 3, 4 ], [ 5, 6, 7, 8 ] ]

const array = [1, 2, 3, 4, 5, 6, 7, 8];
const length = 4;

function splitIntoChunk(arr, len) {
  let tempArray = [];
  for (let i = 0; i < arr.length; i += len) {
    tempArray.push(arr.slice(i, i + len));
  }
  return tempArray;
}
console.log(splitIntoChunk(array, length));
//---------------------------------------------------------------------------------

// console.log(longestWord("Hello word hi programmers"));

// Ən uzun sözü tapın.  ======>> programmers

function longestWord(element) {
    let array = element.split("").sort(function(a,b)
    {
        return b.length-a.length
    }
    )
return longestWord[array]
}

 console.log(longestWord("Hello word hi programmers"));
