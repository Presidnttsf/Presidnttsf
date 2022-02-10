function RemoveDup(arr) {

    let uniqueArr = [];

    for (let index = 0; index < arr.length; index++) {
        const element = arr[index]
        if (uniqueArr.indexOf(element) === -1) {
            uniqueArr.push(element);
        }
    }
    return uniqueArr
}


console.log(RemoveDup([1, 2, 2, 3, 4, 4, 5, 5, 1, 8, 7, 7, 1, 6, 4]))
let sortedArr = RemoveDup([1, 2, 2, 3, 4, 4, 5, 5, 1, 8, 7, 7, 1, 6, 4])
console.log(sortedArr.sort());
