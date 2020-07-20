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

Similar to bubble sort, but instead of first placing large values into the sorted position, it places small values into the sorted position

_Pseudocode_
