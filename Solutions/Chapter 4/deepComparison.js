// Check values of two object are exactly the same

const deepEqual = (a, b) => {
    if (a === b) return true;

    if ((typeof a != "object" || a == null) || (typeof b != "object" || b == null)) {
        return false; // If one of the values is null or not an object return false;
    }
    
    let keysA = Object.keys(a);
    let keysB = Object.keys(b);
    if (keysA.length != keysB.length) return false;
    // Before more specific comparison, check if keys have the same length;

    for (let value of keysA){ // loop through all values in keysA
        if (!keysB.includes(value) || !deepEqual(a[value], b[value])) return false;
        // if keyB doesn't include all values of keyA return false
    }
    return true;    
}



const deepEqualFirstTry = (valueOne, valueTwo) => {
    // JSON.stringify converts an object into a comparable string
    if (JSON.stringify(valueOne) === JSON.stringify(valueTwo)) {
        return true;
    } else {
        return false;
    }
}

let obj = {here: {is: "an"}, object: 2};
let objTwo = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, objTwo));
// → true
// Return true, but converts both values to a string so it is not a strict comparison



