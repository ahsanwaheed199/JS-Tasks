// 6. Write a program that takes a string an returns the character that appears the max amount of times.
// For example maxChar(scooter) ==> returns 'o'.
// If there are multiple characters of the max length, return an array of the characters instead
// For example maxChar(zookeeper) ==> retuns ['o', 'e']
// If there are no repeating characters, return null
// For example maxChar(bed)
function maxChar(str) {
  let charObj = {};
  let maxChar = [];
  let maxCount = 1;
  for (let i = 0; i < str.length; i++) {
    console.log((charObj[str[i]] = charObj[str[i]] + 1 || 1));
  }
  console.log(charObj);
  for (x in charObj) {
    if (charObj[x] > maxCount) {
      maxChar.push(x);
    }
  }
  return maxChar;
}
console.log(maxChar("javasscriptt"));
