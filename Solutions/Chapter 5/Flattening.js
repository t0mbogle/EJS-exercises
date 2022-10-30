// Use reduce and concat to flatten an array of arrays
let arrays = [[1, 2, 3], [4, 5], [6]];

let sum = arrays.reduce((a, b) => a.concat(b));
console.log(sum);
// → [1, 2, 3, 4, 5, 6]