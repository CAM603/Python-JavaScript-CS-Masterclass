# Searching

## Linear Search

The simplest way to search for a value is to look at every element in the array and check if it's the value we want.

Psuedo Code

-   This function accepts an array and a value
-   Loop through the array and check if the current array element is equal to the value
-   If it is, return the index at which the element is found
-   If the value is never found, return -1

### Big O

-   Best: O(1)
-   Worst: O(N)
-   Average: O(N)

## Binary Search

A must faster form of search. Rather than eliminating one element at a time, you can eliminate half of the remaining elements at a time. _However_ this only works on sorted arrays. Divide and Conquer.

Psuedo Code

-   This function accepts a sorted array and a value
-   Create a left pointer at the start of the array, and a right pointer at the end of the array.
-   While the left pointer comes before the right pointer:
    -- Create a pointer in the middle
    -- If you find the value you want, return the index
    -- If the value is too small, move the left pointer up
    -- If the value is too large, move the right pointer down
-   If you never find the value, return -1

### Big O

-   Best: O(1)
-   Worst: O(log N)
-   Average: O(log N)
