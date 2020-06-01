# Hash Tables

-   Used to store key value pairs
-   Not numeric
-   They are like arrays but the keys are not ordered
-   Unlike arrays, hash tables are fast for all of the following operations: finding, adding and removing

Examples in the wild:

-   JavaScript: Objects and Maps
-   Python: Dictionaries
-   Java, Go, Scala: Maps
-   Ruby: Hashes

## Example

Imagine we are storing some colors.
We could store them in an arrray:

[#BADA22, #FFF, #FF69B4]
But we won't know which index each color is.
array[1] -> ??? some color ???

It would be better if we used indices to access the colors:
array[pink] -> #ff69b4
array[cyan] -> #00ffff

## Hashing

-   To implement a hash table we will use an array.
-   In order to look up values by key, we need a way to convert keys into valid array indices.
-   A function that performs this task is called a hash function.

If we pass "pink" into our hash function it returns a consistent number that we can use for the index where it is located. This number will always be the same.

Hash functions take an input of arbitrary size (10 or 10,000,000 characters) and returns data of a fixed size.

What makes a good hash?

1. Fast (constant time O(1))
2. Doesn't cluster outputs at specfic indices, but distributes uniformly
3. Deterministic (same input yields same output)
