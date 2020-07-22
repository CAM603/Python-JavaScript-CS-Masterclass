# Sorting

Sorting is the process of rearranging the items in a collection (e.g. an array or list) so that the items are in some kind of order.

Examples:

-   Sorting numbers from smallest to largest
-   Sorting names alphabetically
-   Sorting movies based on a release year

Why do we need to learn this?

-   Sorting is an incredibly common task, so it's good to know how it works
-   There are many different ways to sort things, and different techniques have their own advantages and disadvantages

## Bubble Sort

A sorting algorithm where the largest values bubble up to the top.
Start by comparing two values and if the first is larger than the second, swap the values in the collection (array or list)

_How do we swap?_

```js
function swap(arr, idx1, idx2) {
    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}

const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};
```

_Pseudocode_

-   Write a function called bubbleSort that accepts an array
-   Start looping with a variable called i from the end of the array towards the beginning
-   Start an inner loop with a variable called j from the beginning until i - 1
-   If arr[j] is greater than arr[j + 1], swap those two values
-   Return the array

_Big O_: O(n^2)

## Selection Sort

Similar to bubble sort, but instead of first placing large values into the sorted position, it places small values into the sorted position. A lot less swaps than bubble sort.

_Pseudocode_

-   Write a function called selectionSort that accepts an array
-   Store the first element as the smallest value you've seen so far
-   Compare this item to the next item in the array until you find a smaller number
-   If a smaller number is found, designate that smaller number to be the new 'minimum' and continue until the end of the array
-   If the 'minimum' is not the value (index) you initially began with, swap the two values
-   Repeat this with the next element until the array is sorted

_Big O_: O(n^2)

## Quick Sort

Like merge sort, exploits the fact that arrays of 0 or 1 elements are always sorted. Works by selecting one element called the 'pivot' and finding the index where the pivot should end up in the sorted array. Once the pivot is positioned appropriately, quick sort can be applied on either side of the pivot.

Pivot Helper

-   In order to implement merge sort, it's useful to first implement a function responsible for arranging elements in an array on either side of a pivot
-   Given an array, this helper function should designate an element as the pivot
-   It should then rearrange elements in the array so that all values less than the pivot are moved to the left of the pivot, and all values greater than the pivot are moved to the right of the pivot
-   The order of elements on either side of the pivot doesn't matter
-   The helper should do this in place, that is, it should not create a new array
-   When complete, the helper should return the index of the pivot

Picking a pivot

-   The runtime of quick sort depend in part on how one selects the pivot
-   Ideally, the pivot should be chosen so that it's roughly the median value in the data set you are sorting
-   For simplicity, we'll always pick the pivot to be the first element

Pivot _Pseudocode_

-   Write a function called pivot, it will accept three arguments: an array, a start index, and an end index (these can default to 0 and the array length minus 1, respectively)
-   Grab the pivot from the start of the array
-   Store the current pivot index in a variable (this will keep track of where the pivot should end up)
-   Loop through the array from the start until the end
    -   If the pivot is greater than the current element, increment the pivot index variable and then swap the current element with the element at the pivot index
-   Swap the starting element (the pivot) with the pivot index
-   Return the pivot index

Quicksort _Pseudocode_

-   Call the pivot helper on the array
-   When the helper returns to you the updated pivot index, recursively call the pivot helper on the subarray to the left of that index, and the subarray to the right of that index
-   The base case occurs when you consider a subarray with less than 2 elements
