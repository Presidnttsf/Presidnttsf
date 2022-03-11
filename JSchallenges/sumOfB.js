// Write a function that takes an array (a) and a number (b) as arguments
// Sum up all array elements with a value greater than b
// Return the sum

function Sum(a, b) {

    let sum = 0;

    for (let index = 0; index < a.length; index++) {
        const element = a[index];
        if (element > b) {
            sum = sum + element;

        }

    }
    return sum;

}

console.log(Sum([1, 2, 3, 4, 5, 6, 7], 2));
// Expected 25

//second method

function Sum2(a, b) {

    let ans = a.reduce((acc, curr) => {
        if (curr > b) {
            return acc + curr
        };
        return acc;
    }, 0)
    return ans;
}




console.log(Sum2([1, 2, 3, 4, 5, 6, 7], 2));
