const isEven = n => {
    if (n == 0) return true;
    else if (n == 1) return false;
    else if (n < 0) return isEven(-n); // If number is negative it gets flipped to a positive and put back into the isEven function
    else return isEven(n - 2); // If positive AND not 1 or 2, minus 2 and return into function
  }
  
  console.log(isEven(50));
  // → true
  console.log(isEven(75));
  // → false
  console.log(isEven(-1));
  // → false