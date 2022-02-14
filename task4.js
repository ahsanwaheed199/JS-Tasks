//An array contains numbers along with -1. Sort the array in ascening order but the place of -1s should not be changed
//e.g.  a = [-1, 150, 190, -1, -1, 160, 180]. sortByHeinght(a) = [-1, 150, 160, -1 ,-1, 180, 190 ]
function sortByHeinght(array) {
  let arr = [];
  let pos = [];
  // return a.sort();
  array.map((x, i) => {
    if (x !== -1) {
      arr.push(x);
    } else {
      pos.push(i);
    }
  });
  arr.sort();
  for (i = 0; i < pos.length; i++) {
    arr.splice(pos[i], 0, -1);
  }
  return arr;
}
console.log(sortByHeinght([-1, 150, 190, -1, -1, 160, 180]));
