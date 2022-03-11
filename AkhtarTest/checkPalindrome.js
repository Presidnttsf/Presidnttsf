function checkPalindrom(params) {
    let arr = params.split('');


    for (let index = 0; index < params.length / 2; index++) {
        let start = arr[index]
        let end = arr[arr.length - 1 - index]
        console.log('start=', start, 'end=', end)
        if (start == end) {
            return 'Its a palindrom.'

        } return 'Its not palindrom.'
    }
}


console.log(checkPalindrom('tit'));


let string = 'tauseef';
let arr = string.split('');
let rev = arr.reverse();
let revString = rev.join('');

if (string == revString) {
    console.log(true)
} else { console.log(false) }


console.log(revString)


let myString = 'Tauseef';

function char(a, b) {

    return a[b - 1];
}

console.log(char(myString, 3))
console.log(char(myString, 6))

