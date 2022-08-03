// reverse arrays without the .reverse method

const reverseArray = (array) => {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.unshift(array[i]);
  }
  return newArray;
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];


const reverseArrayInPlace = (arr) => {
  const halfArr = Math.floor(arr.length / 2);
  
  for (let i = 0; i <= halfArr; i++) {
    let current = arr[i];    // index within first half
    arr[i] = arr[arr.length - 1 - i]; 	  // assign current index to opposite
    arr[arr.length - 1 - i] = current; 	  // assign opposite index to current
  }
  return arr;
}


console.log(reverseArrayInPlace([1, 2, 3, 4, 5]));
// → [5, 4, 3, 2, 1]
console.log(reverseArrayInPlace([10, 8, 6, 4, 2]));
// → [2, 4, 6, 8, 10]