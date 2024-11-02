const bubbleSort = (arr) => {
    let unsortedIndex = arr.length - 1;
    let sorted = false

    while (!sorted) {
        sorted = true
        for (let i = 0; i < unsortedIndex; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i + 1]
                arr[i + 1] = arr[i]
                arr[i] = temp
                sorted = false
            }
        }
        unsortedIndex -= 1
    }
    return arr
}

const arr = [4, 2, 7, 1, 3]
console.log(bubbleSort(arr))