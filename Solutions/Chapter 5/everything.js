// using for loop
function every(array, test) {
  for (let elem of array) {
    if (test(elem) !== true) return false;
  }
  return true;
}

console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true


// using 'some' HO function
function every2(array, test) {
   if (array.some((x) => test(x) !== true)) {
    return false;
  } 
  return true;
}

console.log(every2([1, 3, 5, 6, 7, 8, 9, 10], n => n < 10));
// → true
console.log(every2([2, 4, 16], n => n < 10));
// → false
console.log(every2([], n => n < 10));
// → true


  