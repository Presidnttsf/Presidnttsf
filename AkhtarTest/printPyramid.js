function pritnPyramid(params) {
    for (let i = 0; i < params.length; i++) {
        let space = '';
        let pyramid = '';
        for (let j = i; j <= params.length; j++) {
            space += ' ';

        }
        for (let k = 0; k <= i; k++) {
            pyramid += params[k] + ' ';

        }
        console.log(space + pyramid);
    };
};

pritnPyramid("*****");