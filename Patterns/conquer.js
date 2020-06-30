/**
Given a sorted array of integers, write a function called search, that accepts a value and returns the index where the value passed to the function is located. If the value is not found, return -1.
 */

// NAIVE SOLUTION
// Time complexity: O(N)
function search(array, n) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === n) {
            return i;
        }
    }
    return -1;
}

// REFACTORED
// Time Complexity: O(log(N))

function search(arr, n) {
    let min = 0;
    let max = arr.length - 1;

    while (min <= max) {
        let mid = Math.floor((min + max) / 2);

        if (arr[mid] < n) {
            min = mid + 1;
        } else if (arr[mid] > n) {
            max = mid - 1;
        } else {
            return mid;
        }
    }
    return -1;
}

search([1, 2, 3, 4, 5, 6], 4);
