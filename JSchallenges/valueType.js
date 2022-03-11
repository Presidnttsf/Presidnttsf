// Write a function that takes a value as argument
// Return the type of the value


function myFunction(a) {
    return typeof a;
}

console.log(myFunction(1));
console.log(myFunction(false));
console.log(myFunction([1, 2, 3]));
console.log(myFunction({ a: 1, b: 'g' }));
console.log(myFunction('a'));
console.log(myFunction(null));
console.log(myFunction());
console.log(myFunction(undefined));
console.log(myFunction(123));