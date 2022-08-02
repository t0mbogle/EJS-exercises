const range = (start, end) => {
  let result = [];
  while (start <= end) {
    result.push(start)
    start++;
  }
  return result;
}

const sum = (arrayOfNumbers) => {
  let result = 0;
  for (let number of arrayOfNumbers) {
    result += number;
  }
  return result;
}
  
// console.log(range(1, 10));
// -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(sum(range(1, 10)));
// -> 55