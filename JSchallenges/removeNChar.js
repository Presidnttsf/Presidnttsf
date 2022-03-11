// Write a function that takes a string (a) as argument
// Remove the first 3 characters of a
// Return the result


function myFunction(a) {

    return a.slice(3)
}

console.log(myFunction('abcdefg'));

// Write a function that takes a string (a) as argument
// Remove the last 3 characters of a
// Return the result
function myFunction2(a) {
    return a.slice(0, a.length - 3)
}

console.log(myFunction2('abcdefg'))
console.log(myFunction2('1234'))