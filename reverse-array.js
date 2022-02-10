function reverseArr(arr) {
    let reverse = [];
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        reverse[index] = arr[arr.length - 1 - index];


    }
    return reverse;
}

console.log(reverseArr([1, 2, 3, 4]));
console.log(reverseArr([1, 9, 5, 4, 65, 48, 'tsf', 'amd']));




function reverse2(arr2) {
    let revArr = [];
    for (let index = arr2.length - 1; index >= 0; index--) {
        const element = arr2[index];
        revArr.push(element);
        console.log(element)
    }
    return revArr;
}

console.log('reverse2 =', reverse2([10, 9, 8, 7, 5, 6]));


function countElement(params) {
    let sum = 0;
    let element = params[sum];
    if (element > 0)
        sum += 1
}

console.log('addition in element =', countElement([1, 2, 3, 4, 5]))