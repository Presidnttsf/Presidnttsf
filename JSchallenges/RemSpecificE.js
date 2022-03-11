// Write a function that takes an array (a) and a value (b) as argument
// The function should clean a from all occurrences of b
// Return the filtered array

function Remove(a, b) {
    let removeEle = [];
    let remainEle = [];
    for (let index = 0; index < a.length; index++) {
        const element = a[index];

        if (element === b) {
            removeEle.push(element)

        } else {
            remainEle.push(element)

        }
    }
    return remainEle;
}

console.log(Remove([1, 2, 3], 3));
console.log(Remove([1, 2, '2'], '2'));

// second method

function Remove2(a, b) {
    return a.filter(cur => cur !== b)
}


console.log(Remove2([1, 2, 3], 3));
console.log(Remove2([1, 2, '2'], '2'));


// myFunction([1,2,3], 2)
// Expected
// [1, 3]
// myFunction([1,2,'2'], '2')
// Expected
// [1, 2]
// myFunction([false,'2',1], false)
// Expected
// ['2', 1]
// myFunction([1,2,'2',1], 1)
// Expected
// [2, '2']

