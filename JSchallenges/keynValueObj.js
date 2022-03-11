// Write a function that takes two arrays (a and b) as arguments
// Create an object that has properties with keys 'a' and corresponding values 'b'
// Return the object
function setAsKeyValue(a, b) {
    let obj = {};

    for (let i = 0; i < a.length; i++) {
        obj[a[i]] = b[i];


    }
    return obj;
}

console.log(setAsKeyValue(['a', 'b', 'c'], [1, 2, 3]));

// let a = ['a', 'b', 'c'];
// let t = Object.assign(key => (...a.map({[key]: 0})))

// let myArr = [1, 2, 3, 4];
// let amd = myArr.reduce((acc, val) => acc + val, 0);
// console.log(amd);

function myFunctionAuth(a, b) {
    return a.reduce((acc, cur, i) => ({ ...acc, [cur]: b[i] }), {});
}

console.log(myFunctionAuth(['a', 'b', 'c'], [1, 2, 3]));

