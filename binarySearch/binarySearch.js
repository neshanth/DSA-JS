function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        const element = arr[mid];
        if (element === target) {
            return mid;
        } else if (element > target) {
            right = mid - 1
        } else {
            left = mid + 1
        }
    }
    return -1
}