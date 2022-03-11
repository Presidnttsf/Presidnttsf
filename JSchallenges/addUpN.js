function addUp(n) {

    let sum = 0;
    for (let index = 0; index <= n; index++) {
        sum = sum + index;

    }
    return sum;
}

console.log(addUp(600))