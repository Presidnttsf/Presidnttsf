// Write a function that takes a Set and a value as argument
// If existing in the Set, remove the value from the Set
// Return the result

function findEle(set, val) {

    return set.has(val);

}

console.log(findEle(new Set([1, 2, 3]), 1));
console.log(findEle(new Set([1, 2, 3]), 4));




// myFunction(new Set([1, 2, 3]), 1)

// Expected new Set([2, 3])