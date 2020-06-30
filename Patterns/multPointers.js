// Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is zero. Return an array that includes bothvalues that sum to zero or undefined if a pair does not exist

// NAIVE EXAMPLE
// Time Complexity: O(n^2)
// Space Complexity: O(1)
function sumZero(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === 0) {
                return [arr[i], arr[j]];
            }
        }
    }
    return undefined;
}

sumZero([-3, -2, -1, 0, 1, 2, 3]); // [-3, 3]
sumZero([-2, 0, 1, 3]); // undefined
sumZero([1, 2, 3]); // undefined

// REFACTORED USING MULTIPLE POINTERS
// Time Complexity: O(N)
// Space Complexity: O(1)
function sumZero(arr) {
    // points to last element in array
    let right = arr.length - 1;
    // points to first element in array
    let left = 0;
    while (left < right) {
        let sum = arr[left] + arr[right];
        if (sum === 0) {
            return [arr[left], arr[right]];
        }
        if (sum > 0) {
            right++;
        }
        if (sum < 0) {
            left++;
        }
    }
    return undefined;
}

sumZero([-3, -2, -1, 0, 1, 2, 3]); // [-3, 3]

// CHALLENGE: countUniqueValues
/*
Implement a function called countUniqueValues, which accepts a sorted array and counts the unique values in the array. There can be negative numbers in the array but it will always be sorted
*/

// Approach 1:
/*
Start a pointer at the beginning and another pointer at the beginning + 1
Compare the two
If they are not equal, add to count count
Increase second pointer
*/
function countUniqueValues(arr) {
    let first = 0;
    let scout = 1;
    let count = 1;
    while (scout < arr.length) {
        if (arr[first] !== arr[scout]) {
            count++;
        }
        scout++;
        first++;
    }
    return count;
}

countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]);

// Approach 2:
/*
Use the array to store unique values by building the unique values at the beginning of the array
Start a pointer, i, at the beginning and another pointer, j, at the beginning + 1
Compare them 
if they are the same: increment j
if they are different: increment i, set arr[i] = j and then increment j
return i + 1
*/
function countUniqueValues(arr) {
    if (!arr.length) {
        return 0;
    }
    i = 0;
    for (let j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];
        }
    }
    return i + 1;
}

// CHALLENGE: averagePair
/*

 */
