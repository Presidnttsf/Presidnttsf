function printNamePyramid(n) {
    for (let i = 1; i <= n.length; i++) {

        let space = '';
        let t90 = '';
        for (let j = i; j < n.length; j++) {
            space += '-';

        }
        for (let k = 0; k < i; k++) {
            t90 += n[k] + ' ';

        }
        console.log(space + t90);

    }

    for (let i = 1; i < n.length; i++) {

        let space = '';
        let t90 = '';
        for (let j = 0; j < i; j++) {
            space += '-';

        }
        for (let k = i; k < n.length; k++) {
            t90 += n[k] + ' ';

        }
        console.log(space + t90);

    }
}
printNamePyramid('TauseefAkhtar'.split(''));