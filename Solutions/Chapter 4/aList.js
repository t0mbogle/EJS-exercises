const arrayToList = (array) => {
    let list = null;
    for (let i = array.length - 1; i >= 0; i--) { // counts backwards from end of array
        list = {"value": array[i], "rest": list};
    }
    return list;
}

// helper function
const nth = (list, number) => {
    if (!list) return undefined; // if list has no content
    else if (number == 0) return list.value; // only return a value when n gets to 0
    else return nth(list.rest, number - 1); 
    // recall nth function, list.rest is everything in the object after the first key: value pair
  }
  
console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}

console.log(nth(arrayToList([10, 20, 30]), 2));
// → 20

const listToArray = (list) => {
  let newArray = [];
  // after every successful loop, node is set to node.rest within this list ^^
  for (let node = list; node;/* If node has a value keep looping */ node = node.rest) {
    newArray.push(node.value); 
  }
  return newArray;
}

console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]

// helper function
const prepend = (value, list) => {
    return {value, rest: list}; //The whole list object is added after 'rest:'
}