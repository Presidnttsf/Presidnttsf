import { printTable } from "./dec17.js";

function RotateArr(arr) {
    let ans = [];
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        ans[0] = arr[arr.length - 1]
        ans[index] = arr[index - 1]

    }
    return ans

}

// console.log(RotateArr([1, 2, 3, 4, 5]));



// function PrintEvenOdd(start, end) {

//     for (let index = start; index <= end; index++) {

//         let num = index % 2
//         if (num == 0) {
//             console.log('false')
//         } else {

//             console.log(index, 'number is odd')
//         }

//     }

// }

// // console.log(PrintEvenOdd(70, 85));

// console.log(printTable(15, 10));