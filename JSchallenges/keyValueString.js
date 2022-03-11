// Write a function that takes two strings (a and b) as arguments
// Create an object that has a property with key 'a' and a value of 'b'
// Return the object

function myFunction(a, b) {
    // let obj = {};
    // obj[a] = b;
    // return obj;
    return { [a]: b };
}

console.log(myFunction('a', 'b'));
console.log('check', myFunction('tsf', 'car'));
console.log('check2', myFunction('amd', 'java'));

// Expected {a:'b'}