const range = (start, end, step = start < end ? 1 : -1) => {
  // Step defaulted to 1 or -1 or no third param is given
  let result = [];
  if (start < end) {
    while (start <= end) {
      result.push(start)
      start += step;
    }
  } else {
    while (start >= end) {
      result.push(start)
      start += step;
    } // Additional while loop for descending values
  }
  return result;
}

console.log(range(1, 10))
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(range(1, 10, 2));
// → [1, 3, 5, 7, 9]

const sum = (arrayOfNumbers) => {
  let result = 0;
  for (let number of arrayOfNumbers) {
    result += number;
  }
  return result;
}
  
console.log(sum(range(1, 10)));
// -> 55