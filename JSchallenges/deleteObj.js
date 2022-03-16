// Write a function that takes an object as argument
// It should return an object with all original object properties
// except for the property with key 'b'

function DeleteKeyValue(obj) {

    delete obj['b']
    return obj;


}

console.log('after deleting', DeleteKeyValue({ a: 1, b: 7, c: 3 }))
// Expected { a: 1, c: 3 }f


let tsf = {
    name: 'tauseef',
    age: 29,
    city: 'Nagpur'

}

console.log(delete tsf['age'], tsf)

//function to delete key value pair from an object.

function myFunction(obj) {
    const { b, ...rest } = obj;
    return rest;
}

console.log('deleting by MF', myFunction({ a: 1, b: 7, c: 3 }))


tsf = {
    name: 'tauseef',
    age: 29,
    city: 'Nagpur'

}

const { city, ...rest } = tsf;
console.log('tsf=', rest);


let array = [1, 2, 3, 4];

const { 1, ...rest } = array
console.log(rest)