// Write a function that takes an object with two properties and a string as arguments
// It should return the value of the property with key equal to the value of the string

function myFunction(obj, key) {


    return obj[key]; //obj.key is not working, plz explain why?
}

// console.log(myFunction({ continent: 'Asia', country: 'Japan' }, 'continent'));
// console.log(myFunction({ country: 'Sweden', continent: 'Europe' }, 'country'));

let obj = { country: 'Sweden', continent: 'Europe' };
// console.log(obj.country);


/*
obj.key --> Key 
obj["conti"] --> key is string 

let a ="key"
obj[a]
*/

let t = { continent: 'Asia', country: 'Japan', city: 'Honkong' };

let k = Object.keys(t);
let v = Object.values(t);

// console.log({ k });
// console.log(v);

let n = { tsf: 'me', ...t };
console.log('This is n =', n)