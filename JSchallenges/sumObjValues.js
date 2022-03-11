// Write a function that takes an object (a) as argument
// Return the sum of all object values

function ObjValSum(n) {
    let values = Object.values(n);
    console.log(values)
    let sum = 0;
    for (let index = 0; index < values.length; index++) {
        const element = values[index];
        sum += element;
    }
    return sum;

    // or second method is 
    // return Object.values(a).reduce((sum, cur) => sum + cur, 0);
}

console.log(ObjValSum({ a: 1, b: 2, c: 3 }));
console.log(ObjValSum({ j: 9, i: 2, x: 3, z: 4 }));

// Expected 6

let tsf = [10, 20, 45, 50]

let ans = tsf.reduce((sum, cur) => sum + cur, 0);


