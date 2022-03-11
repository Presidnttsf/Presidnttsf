function check(string) {
    let stack = [];
    let obj = {
        '{': '}',
        '(': ')',
        '[': ']',
    }
    let openBr = Object.keys(obj);
    let closeBr = Object.values(obj);
    for (let index = 0; index < string.length; index++) {
        const element = string[index];
        if (openBr.includes(element)) {
            stack.push(element)
        }

        if (closeBr.includes(element)) {
            let a = stack.pop()
            if (element != obj[a]) {
                return (false)
            }
        }


    }

    return stack.length === 0;
}

console.log(check(`function addition(a) {
    // for (let index = 0; index < a.length; index++) {
    //     const element = a[index];
    //     // console.log(index, '=>', 'element = ', element)
    //     sum = sum + element
    //     // console.log(index, sum)
    //     }
    //     return sum;
}

// console.log(avg([10, 20, 30]))
console.log('total =', addition([10, 20, 30, 40, 60, 80, 45, 91, 87]));

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
console.log('************ ----------*************')

let newarr1 = [];
let newarr2 = [];
tsf = [1, 65, 54, 65, 48];

for (let i = 0; i < tsf.length; i++) {
    let element = tsf[i];
    element = element / 2
    console.log(element)
    newarr1.unshift(element)
    newarr2.push(element)

}
console.log('unshift 1 =', newarr1, 'push 2 =', newarr2)
console.log('pop =', newarr1.pop())
console.log('shift =', newarr1.shift())

console.log('*************Here I am testing string methods**************')
let string = 'I am Tauseef Akhtar and I am learning Javascript.'
console.log(tsf.join('+'))
console.log(string.split(''))
console.log(string.split('').join('*'))]



`))