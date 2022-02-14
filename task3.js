//Remove from the array whatever is in the following arguments. Return the remaining values in an array.
//Ex removeSpecific([2,3,4,6,6, 'hello], [2,6]) == [3,4, 'hello']

function modifyarr(arr, arr2) {
  let c = [];
  arr.forEach((val) => {
    if (!arr2.includes(val)) {
      c.push(val);
    }
  });
  return c;
}

console.log(modifyarr([2, 3, 4, 6, 6, "hello"], [2, 6, 4, 3, "hello"]));
