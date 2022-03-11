// console.log('1', 1)

function myFunction() {
    // console.log('3', 3)
    // console.log('before loop')
    for (let index = 0; index <= 4; index++) {
        let space = '';
        let tri = '';

        console.log('I loop =', index, ' ')
        for (let j = index; j <= 4; j++) {
            space += ' ';
            console.log('J loop =', j);

        }
        for (let k = 0; k <= index; k++) {
            console.log('K loop =', k)
            tri += k + ' ';

        }
        console.log(space + tri);
    }

    return 'This is pyramid'
}

// console.log('2', 2)

let a = myFunction();

// console.log('4', 4);

console.log(a);


// console.log(6);

