function printTriangle(n) {
    for (let index = 0; index <= n; index++) {
        let triangle = '';
        for (let j = 0; j <= index; j++) {

            triangle += j + ' ';

        }
        console.log(triangle)

    }
}

printTriangle(7);