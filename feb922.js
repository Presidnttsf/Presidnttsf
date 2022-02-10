function addition(a) {
    let sum = 0;

    for (let index = 0; index < a.length; index++) {
        const element = a[index];
        // console.log(index, '=>', 'element = ', element)
        sum = sum + element
        // console.log(index, sum)
    }
    return sum;
}

// console.log(avg([10, 20, 30]))
// console.log('total =', addition([10, 20, 30, 40, 60, 80, 45, 91, 87]));

function avg(b) {
    let ans = addition(b) / b.length;
    return ans;
}


// console.log('avg =', avg([10, 20, 30, 40, 60, 80, 45, 91, 87]));


let tsf = [1, 65, 54, 65, 48];
console.log('tsf =', addition(tsf));
console.log('tsf =', avg(tsf));
let sum = 0;
tsf.forEach(element => {
    return sum += element
});
console.log('tsf with each loop =', sum)



// function printTable(number, end) {
//     for (let index = 1; index <= end; index++) {
//         console.log(number, '*', index, '=', number * index)

//     }

// }


// printTable(1.667, 20);


let obj = {

    name: 'tauseef akhtar',
    language: 'javascript',
    hobbies: 'programming',
}
for (const value in obj) {
    console.log(obj[value])
}

let myString = 'This is my string';
for (const char in myString) {
    console.log('myString =', myString[char])
}

for (const element in myString) {
    console.log('tsf element =', element)
}

// console.log(Object.keys(obj))
// console.log(Object.values(obj))
// console.log(Object.entries(obj))
// iterating an object

