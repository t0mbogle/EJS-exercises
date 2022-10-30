// answer
const loop = (a, b, c, d) => {
    if (b(a)) {
      d(a);
      a = c(a);
      loop(a, b, c, d);
    }
}
  
loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1
loop(1, n => n < 4, n => n + 1, console.log);
// → 1
// → 2
// → 3
loop(1, n => n < 0, n => n + 1, console.log);
// -> undefined


// Book solution
function loop(start, test, update, body) {
  for (let value = start; test(value); value = update(value)) {
    body(value);
  }
}
  
loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1