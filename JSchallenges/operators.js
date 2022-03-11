// Write a function that takes 6 values (a,b,c,d,e,f) as arguments
// Sum a and b
// Then substract by c
// Then multiply by d and divide by e
// Finally raise to the power of f and return the result
// Tipp: mind the order

function tsf(a, b, c, d, e, f) {
    let ans = a;
    ans = ans + b;
    ans = ans - c;
    ans = ans * d;
    ans = ans / e;
    ans = ans ** f;
    return ans;
}


// console.log(tsf(1, 2, 3, 4, 5, 6))
console.log(tsf(6, 5, 4, 3, 2, 1));
console.log(tsf(2, 3, 6, 4, 2, 3));