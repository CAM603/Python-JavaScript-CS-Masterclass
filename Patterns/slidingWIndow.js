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
        tempSum = tempSum - arr[i - n] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}
maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2); // 10
/*
First loop sets maxSum = 3
tempSum = 3
Second loop sets i = 2
tempSum = 3 - 1 and then 2 + 5 = 7
*/

// CHALLENGE: minSubarrayLen
/*
Write a function called minSubarrayLen which accepts two parameters: an array of positive integers and a positive ineger.
This function should return the minimal length of a contigious subarray of which the sum is greater than or equal to the integer passed to the function. If there is not one, return 0
Time: O(N)
Space: O(1)
*/

function minSubarrayLen(nums, sum) {
    let total = 0;
    let start = 0;
    let end = 0;
    let minLen = Infinity;

    while (start < nums.length) {
        // If current window doesn't add up to the given sum
        // move the window right
        if (total < sum && end < nums.length) {
            total += nums[end];
            end++;
            // if current window adds up to at least the sum given
            // shrink the window
        } else if (total >= sum) {
            minLen = Math.min(minLen, end - start);
            total -= nums[start];
            start++;
            // current total less than required total but we reached the end
            // need this to prevent infinite loop
        } else {
            break;
        }
    }
    return minLen === Infinity ? 0 : minLen;
}

minSubarrayLen([2, 3, 1, 2, 4, 3], 7); // 2 because [4,3]
minSubarrayLen([2, 1, 6, 5, 4], 9); // 2 because [5,4]

// CHALLENGE: findLongestSubstring
/*
findLongestSubstring accepts a string and returns the length of the longest substring with all distinct characters
 */

function findLongestSubstring(str) {
    let longest = 0;
    let seen = {};
    let start = 0;

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (seen[char]) {
            start = Math.max(start, seen[char]);
        }
        // index - beginning of substring + 1
        // includes current in count
        longest = Math.max(longest, i - start + 1);
        // store the index of the next char so as to not double count
        seen[char] = i + 1;
    }
    return longest;
}
