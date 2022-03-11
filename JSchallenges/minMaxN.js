function minMax(n) {
    // let max = n[0];
    // let min = n[0];
    let ans = [n[0], n[0]];
    for (let index = 0; index < n.length; index++) {
        const element = n[index];

        if (element < ans[0]) {

            ans[0] = element;
        }
        if (element > ans[1]) {

            ans[1] = element;
        }


    }

    return ans;
}

console.log(minMax([10, 5, 40, 8, 20, 84, 56]));
console.log(minMax([2334454, 5]));
console.log(minMax([10, 5, 0]));
console.log(minMax([1]));

//output shud be
//minMax([1, 2, 3, 4, 5]) ➞ [1, 5]

// minMax([2334454, 5]) ➞ [5, 2334454]

// minMax([1]) ➞ [1, 1]

console.log('*****checking binary******')
let binary = 5 & 3;
console.log(binary)