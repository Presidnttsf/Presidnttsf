import prompt_sync from "prompt-sync";
const prompt = prompt_sync({ sign: true });
//plz explain import vs require(), means const prompt = require("prompt-sync")
function promptTest() {
    const count = prompt('enter number of users=>')


    console.log('Number of users=', count);
    let arr = [];
    let obj = {};

    for (let index = 0; index < count; index++) {

        const name = prompt('Enter the name of the user : ')
        console.log('Name of the user', index + 1, '= ', name)
        const age = prompt('Enter the age of the user : ')
        console.log('Age of the user', index + 1, '= ', age)
        const city = prompt('Enter the city of the user : ')
        console.log('City of the user', index + 1, '= ', city)
        obj = { Name: name, Age: age, City: city }
        arr.push(obj);
        console.log(obj)

    }



    return arr;
}

console.log(promptTest());