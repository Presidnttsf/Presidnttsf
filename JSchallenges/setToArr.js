// Write a function that takes a Set as argument
// Convert the Set to an Array
// Return the Array

function Myfunc(set) {

    return Array.from(set);
    // return [...set]; this is 2nd method using rest operator
}


//The Array.from() method returns a new Array from an array-like object or iterable

console.log(Myfunc(new Set([1, 2, 3])))
// myFunction(new Set([1, 2, 3]))
// Expected  [1, 2, 3]