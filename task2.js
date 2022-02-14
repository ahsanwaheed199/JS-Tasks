// Write a program that takes in an integer as an argument and reverses it i.e. 52 ==> 15 etc
function reverse(a) {
  let str = String(a);
  let sum = "";
  for (let i = str.length - 1; i >= 0; i--) {
    sum += str[i];
  }
  return sum;
}
console.log(reverse(123));
// another way
