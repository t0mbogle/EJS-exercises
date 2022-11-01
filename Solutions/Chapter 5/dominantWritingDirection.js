// Given a string of text, return the direction of the language that appears the most,
// from the SCRIPT array. rtl, ltr or ttb.
// See book for countBy() and characterScript() info.

const dominantDirection = (text) => {
  let counted = countBy(text, char => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.direction : "none";
  }).filter(({name}) => name != "none"); // filters out counts of "none" 
     
  let dominant = 0;
  let counter = 0;
  for (let elem of counted) {
    if (elem.count > counter) {
      counter = elem.count;
      dominant = elem.name;
    }
  }
  return dominant; 
}
  
console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl
console.log(dominantDirection("ᠰᠠᠢᠨᠨ ᠥᠥ"));
// -> ttb


// Book solution
function dominantDirection(text) {
  // Adds object to array if first entry. +1 to count if already in array.
  let counted = countBy(text, char => {
    let script = characterScript(char.codePointAt(0)); // loops through every character in 'text' parameter
    return script ? script.direction : "none";
  }).filter(({name}) => name != "none"); // filters out counts of "none"

  if (counted.length == 0) return "ltr";

  return counted.reduce((a, b) => a.count > b.count ? a : b).name;
}
  
console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl