// 7. Find sum of the sum of two diagonals
// arr = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
// ]
// Expected output:
// ((1 + 5 + 9) + (3 + 5 + 7)) => 15 + 15 ==> 30

let arr = [
  [13, 2, 3],
  [4, 45, 6],
  [7, 8, 9],
];
function addDiagonal(arr) {
  let sol1 = 0;
  let sol2 = 0;
  for (i = 0; i < arr.length; i++) {
    sol1 += arr[i][i];
    sol2 += arr[i][arr.length - 1 - i];
  }
  console.log(sol1);
  console.log(sol2);
  console.log(sol1 + sol2);
}
console.log(addDiagonal(arr));
