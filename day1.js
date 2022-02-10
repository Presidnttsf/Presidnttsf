// // Variable decalration 
// let a = 10;
// let b = 20;

// // Print sum of a and b
// console.log("a + b =", a+b);



function SumArr(arr1, arr2) {
    let sum = [];
    for (let index = 0; index < arr1.length; index++) {
        const element1 = arr1[index];
        const element2 = arr2[index];
        sum[index] = element1 + element2;
    }
    return sum;
}

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];

let arr3 = SumArr(arr1, arr2);
console.log(SumArr(arr1, arr2));


function min(nums) {
    let min = Infinity;

    for (let index = 0; index < nums.length; index++) {
        const element = nums[index];

        if (element < min)
            min = element;

    };

    return min;

};
let array = [150, 25, 31, 47, 50, 565];
console.log('a', min(array));
console.log('arr3', min(arr3));



function sumArray(nums) {
    let sum = 0;
    for (let index = 0; index < nums.length; index++) {
        const element = nums[index];
        sum = sum + element;
    };
    return sum;

};

let sArr = [10, 20, 30, 40, 50, 60];
console.log('arrcheck', sumArray(sArr));