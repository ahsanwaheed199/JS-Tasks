// 9. Write a program to group duplicates in an array
// Grouping duplicates in an array
// let arr = [1, 2, 4, 1, 3, 1, 2, 6];
// group(arr);

// Expected outcome: { '1': 3, '2': 2, '3': 1, '4': 1, '6': 1 }

function duplicate(arr) {
  return arr.reduce((tally, val) => {
    [tally[val]] = [tally[val]] + 1 || 1;
    return tally;
  }, {});
}
console.log(duplicate([1, 2, 4, 1, 3, 1, 2, 6]));
