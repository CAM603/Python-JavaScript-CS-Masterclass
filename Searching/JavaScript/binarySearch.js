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

function binarySearchRecursive(arr, target, start, end) {
    // Base case
    if (start > end) {
        return -1;
    }

    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) {
        return mid;
    }
    if (arr[mid] > target) {
        return binarySearchRecursive(arr, target, start, mid - 1);
    } else {
        return binarySearchRecursive(arr, target, mid + 1, end);
    }
}

binarySearchRecursive([1, 2, 3, 4, 5, 6, 7], 6, 0, 8);
