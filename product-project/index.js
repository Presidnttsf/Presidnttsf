import PRODUCTDATA from "./product-data.js";
import { printBill, printDiscountBill, maxof2, min, maxProduct } from "./math-helper.js";
// console.log(PRODUCTDATA[0]);

// let p1 = PRODUCTDATA [1];

// printDiscountBill(p1);

// console.log("Minimum =", min(0.002, 1, 1.101, 0.2102, 2, 3, 9, 10, 15, 81, 69));
// console.log("Maximum =", max(0.002, 1, 1.101, 0.2102, 2, 3, 9, 10, 15, 81, 69));

// console.log(maxof2(10, 50));
// console.log(max(10, 50));

console.log(maxProduct(
    PRODUCTDATA[0],
    PRODUCTDATA[1],
    PRODUCTDATA[2],
    PRODUCTDATA[3],
    PRODUCTDATA[4],
    PRODUCTDATA[5],
    PRODUCTDATA[6],
    PRODUCTDATA[7],
    PRODUCTDATA[8],
    PRODUCTDATA[9],
    PRODUCTDATA[10],
));

