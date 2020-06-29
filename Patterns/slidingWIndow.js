/*
Write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array
*/

// NAIVE SOLUTION
// Time complexity: O(n^2)
/*
Loop through the array with i
Inner loop through the array with j that looks ahead an sums together n items
Keep track of the highest sum
*/
function maxSubarraySum(arr, n) {
    if (n > arr.length) {
        return null;
    }

    let count = -Infinity;

    for (let i = 0; i < arr.length - n + 1; i++) {
        let j = 1;
        let newCount = arr[i];
        while (j < n) {
            newCount += arr[i + j];
            j++;
        }
        if (newCount > count) {
            count = newCount;
        }
    }
    return count;
}

function maxSubarraySum(arr, n) {
    if (n > arr.length) {
        return null;
    }
    // accounts for array with negative numbers
    let count = -Infinity;

    for (let i = 0; i < arr.length - n + 1; i++) {
        let newCount = 0;
        for (let j = 0; j < n; j++) {
            newCount += arr[i + j];
        }
        if (newCount > count) {
            count = newCount;
        }
    }
    return count;
}

// REFACTORED
// Time Complexity: O(N)
function maxSubarraySum(arr, n) {
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < n) return null;

    for (let i = 0; i < n; i++) {
        maxSum += arr[i];
    }
    tempSum = maxSum;
    for (let i = n; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}
maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2); // 10
/*
First loop sets maxSum = 3
tempSum = 3
Second loop sets i = 2
tempSum = tempSum - 1 and tempSum + 5 = 7

*/
