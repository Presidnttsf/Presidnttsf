function printPyramid(n) {
    let numString = '';
    for (let index = 0; index <= n; index++) {

        for (let j = index; j <= index; j++) {
            numString += j + ' ';

            console.log(numString);

        }
        for (let k = 0; k <= index; k++) {
            numString += k + '  '

        }

    }

}

printPyramid(11);


function checkPalindrome(text) {
    let reverse = text.split('').reverse().join('');
    if (text == reverse) {
        return 'It is  palindrome'
    }
    return "IT is not palindrome"

}

console.log(checkPalindrome('tits'));

let string = 'tauseef';
console.log('split =', string.split(''))
console.log('reverse =', string.split('').reverse())
console.log('join =', string.split('').reverse().join(''))
console.log(string)

console.log('check=', [1, 2, 3, 4, 5].join(''))
console.log('check=', [1, 2, 3, 4, 5].toString())


let arr = [10, 20, 30, 40, 50];
let newArr = [];
for (let index = arr.length - 1; index > 0; index--) {
    const element = arr[index];
    newArr.push(element);

    console.log('new', newArr);

}

function jhoomar(n) {
    for (let index = 1; index <= n.length; index++) {
        let triangle = '';
        let space = '';

        for (let k = index; k < n.length; k++) {
            space += "-"
        }

        for (let j = 0; j < index; j++) {
            triangle += n[j] + ' ';
        }
        console.log(space + triangle);
    }

    for (let index = 1; index < n.length; index++) {
        let triangle = '';
        let space = '';

        for (let k = 0; k < index; k++) {
            space += "-"

        }

        for (let j = index; j < n.length; j++) {
            triangle += n[j] + ' ';
        }
        console.log(space + triangle);
    }



}
console.log('This is jhoomar')
jhoomar(("AHMEDANWAR".split('')))
jhoomar(("tauseefakhtar".split('')))
jhoomar([1, 2, 3, 4].toString())

let data = [{
    name: "tauseef",
    age: 29,
    city: "Nagpur",
}, {
    name: "Ahmed",
    age: 30,
    city: "banglore",
},];

let data1 = [1, 2, 3]

let v = data.map(test);
function test(a) {
    return a.name + ' is ' + a.age;

}

console.log(v)