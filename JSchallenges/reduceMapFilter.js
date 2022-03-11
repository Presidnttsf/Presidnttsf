
let arr = [1, 2, 3, 4, 5];

let arrSum = arr.reduce((acc, curr, i) => {

    acc = acc + curr;
    (console.log(i, 'acc', acc, 'curr', curr))
    return acc;
}, 0)

console.log(arrSum)

const output = arr.reduce((max, curr) => {
    if (curr > max) {
        // console.log(curr)
        max = curr;
    }
    return max;
}, 0)

// console.log(output);