const selectionSort = (arr) => {
    for (let i = 0; i < arr.length - 2; i++) {
        let lowest_num_index = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[lowest_num_index]) {
                lowest_num_index = j
            }
        }
        // Swap the values if the lowest index is not at the correct pos
        if (lowest_num_index !== i) {
            [arr[i], arr[lowest_num_index]] = [arr[lowest_num_index], arr[i]]
        }
    }
    return arr
}

const arr = [4, 2, 7, 1, 3]
console.log(selectionSort(arr))