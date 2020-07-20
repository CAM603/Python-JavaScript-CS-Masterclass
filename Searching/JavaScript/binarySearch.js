function binarySearch(arr, val) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((right + left) / 2);

        if (arr[mid] > val) {
            right = mid - 1;
        } else if (arr[mid] < val) {
            left = mid + 1;
        } else {
            return mid;
        }
    }
    return -1;
}

binarySearch([1, 2, 3, 4, 5, 6, 7], 6);
