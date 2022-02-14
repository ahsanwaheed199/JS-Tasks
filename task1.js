// Write a program to check if a string (passed in as an argument) is a palindrome i.e. a word that reads the same backwards as forwards, e.g. madam.

function palindrome(str) {
  return str == str.split("").reverse().join("");
}
console.log(palindrome("almostomla"));
// another Method

// function palindrome(str) {
//   for (let i = 0; i < str.length / 2; i++) {
//     if (str[i] !== str[len - 1 - i]) {
//       return " not a palindrom";
//     }
//   }
//   return " palindrome";
// }
// console.log(palindrome("almostsomla"));
