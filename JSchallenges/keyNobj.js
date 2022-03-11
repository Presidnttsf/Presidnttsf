// Write a function that takes an object (a) and a string (b) as argument
// Return true if a has a property with key b
// Return false otherwise

function myFunction(a, b) {
    if (Object.keys(a).includes(b)) {
        return true
    } return false

}



console.log(myFunction({ a: 1, b: 2, c: 3 }, 's'));
console.log(myFunction({ a: 1, b: 2, c: 3 }, 'b'));

function myFunction2(a, b) {
    return b in a;
}

console.log(myFunction2({ a: 1, b: 2, c: 3 }, 's'));

