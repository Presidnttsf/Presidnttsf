// function voteKarSaktaHaiKya(num,end) {
//     if (age > 150) {
//         console.log("Invalid age!!!");
//         return;
//     }
//     if (age < 10) {
//         console.log("ye to bacha hai!!!");
//         return;
//     }
//     if(age > 18){
//         console.log("Vote kar sakta hai");
//     }else{
//         console.log("Vote nahi kar sakta hai");
//     }
// }

// let ahmed = 29;

// // voteKarSaktaHaiKya(18,25);
// // voteKarSaktaHaiKya(19);
// // voteKarSaktaHaiKya(ahmed);
// // voteKarSaktaHaiKya(5);
// voteKarSaktaHaiKya(1);

// table("ahend");

function printTable(num,end) {
    for (let index = 1; index <= end ; index++) {
        console.log(num,' * ', index, ' = ', num * index)
    }
}

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("konse number ka table hona ? ", function(number) {
    rl.question("kaha tak hona ? ", function(end) {
        printTable(number,end);
        rl.close();
    });
});

rl.on("close", function() {
    console.log("\nBYE BYE !!!");
    process.exit(0);
});

// function add(num1,num2) {
//     let sum = num1+ num2;

//     return sum;
// }
// function minus(num1,num2) {
//     let result = num2 -  num1;
//     return result;
// }
// add(15,14);

// console.log('Add',add(15,25));
// console.log('Minus',minus(15,25));
