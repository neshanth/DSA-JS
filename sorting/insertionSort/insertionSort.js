const insertionSort = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        let temp_value = arr[i]
        let positionToCompare = i - 1; // left of temp value

        while (positionToCompare >= 0) {
            if (arr[positionToCompare] > temp_value) {
                arr[positionToCompare + 1] = arr[positionToCompare];
                positionToCompare -= 1
            } else {
                break
            }
        }
        // Once you are out of the loop, the positionToCompare === -1. So add + 1 to insert temp value at first position(0th index)
        arr[positionToCompare + 1] = temp_value
    }
    return arr;
}

const arr = [4, 2, 7, 1, 3]
console.log(insertionSort(arr))