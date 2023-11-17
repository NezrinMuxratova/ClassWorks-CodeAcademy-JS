// ------------------------------------------------------- TASK 1 -------------------------------------------------------

// Write a JavaScript function that reverse a number.
// Sample Data and output:

// Example x = 32243;
// Expected Output : 34223

function reverseNumber(n) {
  n = n + "";
  return Number(n.split("").reverse().join(""));
}
console.log(reverseNumber(32243));

// ------------------------------------------------------- TASK 2 -------------------------------------------------------

// Write a JavaScript function that returns a passed string with letters in
// alphabetical order.
// Example string : 'webmaster'
// Expected Output : 'abeemrstw'

function order(str) {
  let array = str.split("");
  array.sort();
  let item = array.join("");
  return item;
}
console.log(order("webmaster"));

// ------------------------------------------------------- TASK 3 -------------------------------------------------------

// Write a JavaScript function that accepts a string as a parameter and converts the
// first letter of each word of the string in upper case.
// Example string : 'the quick brown fox'
// Expected Output : 'The Quick Brown Fox '
function uppercase(str)
{
  let array = str.split(' ');
  let newarray = [];
    
  for(var i = 0; i < array.length; i++){
      newarray.push(array[i].charAt(0).toUpperCase()+array[i].slice(1));
  }
  return newarray.join(' ');
}
console.log(uppercase("the quick brown fox"));
// ------------------------------------------------------- TASK 4 -------------------------------------------------------


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
  
//   person adlı object-dən firstName-i, languageInfo-dan eng və rus property-ni destructing edin, əlavə olaraq 
//   personda yerdə qalan bütün property-ləri otherInfo adı altında rest operatoru ilə bir dəyişənə çıxarın.
  
//   console.log(eng); // "Advance"
//   console.log(otherInfo); // {lastName: 'Doe', city: 'Ganja', website: 'code.edu.az'}
  
function name(params) {
    
}