export const percentage = function (a, b) {
    let res = a * b / 100;
    return Number(res.toFixed(2));
};

export const getSGST = function (a) {
    return percentage(a, 9);
};

export const getCGST = function (a) {
    return percentage(a, 9);
};

export const getIGST = function (a) {
    return getSGST(a) + getCGST(a);
};

export const getDiscountAmount = function (a, b) {
    return a - percentage(a, b);
};

export const printBill = function (a) {
    console.log("Amount:", a);
    console.log("SGST:", getSGST(a));
    console.log("CGST:", getCGST(a));
    console.log("IGST:", getIGST(a));
    console.log("Grand Total:", a + getIGST(a));
};

export const printDiscountBill = function (p) {
    let a = p.price;
    let b = p.discount;
    console.log("Name:", p.name);
    console.log("Stock:", p.stock);
    console.log("Amount:", a);
    console.log("Discount:", b, '%');

    let amount = getDiscountAmount(a, b);
    console.log("Discount Amount", amount);

    printBill(amount);

};

export const maxof3 = function (a, b, c) {
    if (a > b && a > c) {
        return a
    };
    if (b > a && b > c) {
        return b
    };
    return c
};

export const max = function () {
    let params = arguments;
    // console.log(params);

    let maxNum = 0;

    for (let index = 0; index < params.length; index++) {
        const num = params[index];
        if (num > maxNum) {
            maxNum = num;
        };

    };
    return maxNum
};

export const min = function () {
    let params = arguments;
    // console.log(params);

    let minNum = Infinity;

    for (let index = 0; index < params.length; index++) {
        const num = params[index];
        if (num < minNum) {
            minNum = num;
        };

    };
    return minNum
};

export const maxof2 = (a, b) => {
    if (a > b) {
        return a
    };
    return b
};

export const maxProduct = function () {
    let params = arguments;
    // console.log(params);

    let maxPro = params[0];

    for (let index = 0; index < params.length; index++) {
        const pro = params[index];
        if (pro.price > maxPro.price) {
            maxPro = pro;
        };

    };
    return maxPro
};
