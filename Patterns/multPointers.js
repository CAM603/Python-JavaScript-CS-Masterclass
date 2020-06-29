// Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is zero. Return an array that includes bothvalues that sum to zero or undefined if a pair does not exist
function sumZero(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            console.log(arr[i], arr[j]);
        }
    }
}
