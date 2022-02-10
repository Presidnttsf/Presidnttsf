
// function complement(arr, b) {
//     let ans = [];
//     for (let index = 0; index < arr.length; index++) {
//         const element = arr[index];
//         ans[index] = (element - b);
//     };
//     return ans;
// };

// let list = [5, 8, 9, 4, 6];
// console.log(complement(list, 1));

// let check = complement(list, 1);

// console.log(complement(check, -1))

function isPrime(num) {

    for (let index = 2; index < num; index++) {
        let ans = num % index;
        if (ans == 0) {
            return false
        }
    }
    return true

}

// console.log(isPrime(7));

function findPrimeNum(start, end) {
    if (end < start)
        return 'invalid'
    let arr = [];
    for (let index = start; index < end; index++) {
        let ans = isPrime(index)
        // console.log(isPrime(index))
        if (ans) {
            arr.push(index)
        }
    }
    return arr;
}

// console.log(findPrimeNum(1, 10));


// function converter(num) {
//     let word = num.toWords()
//     return word;
// }

// console.log(toWords(2));

// variable assignement
let a = 10;
let b = 20;

var c = 30;
const d = 40;
// making of array
let arr = [1, 5, 45, 85, 789, 254]
// console.log(arr.length)
// let sum = 0;
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     console.log(sum = sum + element);

// }
// making of function
function sumOfElement(a) {
    let sum = 0;
    for (let index = 0; index < a.length; index++) {
        const element = a[index];
        sum += element;
        // console.log('index =', index, 'value/element =', element, 'sum =', sum)

    }
    return sum;
}

// how functions work and print
// let s = [1, 2, 3, 4, 5];
// console.log("Answer =", sumOfElement([1, 2, 3, 4, 5, 0.5, 45, 8.5, 4.9]), 'count =', [1, 2, 3, 4, 5].length);
// console.log("Answer =", sumOfElement(arr), 'count =', arr.length);
// console.log("Answer = ", sumOfElement("I am Tauseef Akhtar"), " ", 'count =', ("I am Tauseef Akhtar").length);

// function printTable(num, end) {

//     for (let index = 1; index <= end; index++) {
//         console.log(num, '*', index, "=", num * index);
//     }

// }

// printTable(2, 10);
// printTable(2.5, 15);
// // type of data
// let arrays = [1, 2, 5, 4];
// let string = "tauseef."
// let obj = {
//     key: 'value',
//     a: 10,
//     b: 'tauseef',
// }

// console.log(arrays[0]);
// console.log(string[0]);
// console.log(obj.b);

// let car = {
//     name: "Honda City",
//     color: "red",
//     price: 10000000,
//     engine: 1250,
//     avg: 13,
//     model: 2022,
// };

// console.log(car);
// let objArr = [obj, car];
// console.log(objArr);
// console.log(objArr.length);

let doubleArr = [3, 1, 2];

for (let i = 0; i < doubleArr.length; i++) {
    const elementI = doubleArr[i]
    for (let j = 0; j < doubleArr.length; j++) {
        const elementJ = doubleArr[j]
        if (doubleArr[i] < doubleArr[j]) {
            let swipe = doubleArr[j]
            doubleArr[j] = doubleArr[i]
            doubleArr[i] = swipe

        }

        console.log('i=>', i, "=", elementI, 'j=>', j, "=", elementJ, doubleArr[i])

    }
}

console.log(doubleArr)





