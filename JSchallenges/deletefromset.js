// Write a function that takes a Set and a value as argument
// If existing in the Set, remove the value from the Set
// Return the result

function deleteSet(set, val) {

    let arr = [...set];

    let ans = new Set(arr.filter((curr) => { return curr !== val }))
    return ans;
}

//shortcutz` method
function myFunction(set, val) {
    set.delete(val);
    return set;
}



console.log(deleteSet(new Set([1, 2, 3]), 1))
console.log(deleteSet(new Set('12345'), '3'));
console.log(deleteSet(new Set([1, 2, 3]), 4));
// myFunction(new Set([1, 2, 3]), 1)

// Expected  new Set([2, 3])


//this is how to make new set
let tsf = new Set([1, 2, 6]);
console.log(tsf);

