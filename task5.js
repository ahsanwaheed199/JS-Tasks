//5 .Sum All Primes
//Pass in a number to loop upto and add all prime numbers
//for example sumAllPrimes(20) =>  2 + 3 + 5 + 7 + 11 + 13 + 17 + 19 = 77
// Hint: create a separate function to check if the number is prime
function sumPrimes(num) {
  //create an array with values from 1 to 10
  debugger;
  var val = Array.from({ length: num }, (_, i) => i + 1);

  val = val

    .filter((number) => {
      for (var i = 2; i < number; i++) {
        if (number % i === 0) {
          return false;
        }
      }
      return number > 1; // [2, 3, 5, 7]
    })
    .reduce(function (a, b) {
      return a + b; //sum = 17
    });
  debugger;
  return val;
}

console.log(sumPrimes(20));
