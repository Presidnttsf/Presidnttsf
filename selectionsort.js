function SelectSort(arr) {
    for (let j = 0; j < arr.length; j++) {
        for (let index = j + 1; index < arr.length; index++) {

            if (arr[j] > arr[index]) {
                let temp = arr[index]
                arr[index] = arr[j]
                arr[j] = temp




            }
            console.log("arr[j] =", arr[j], "arr[index] =", arr[index])
        }
    }
    return arr;

}


console.log(SelectSort([3, 2, 4, 1, 9, 7, 45, 56, 85, 91]))