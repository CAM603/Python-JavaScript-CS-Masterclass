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

### What makes a good hash?

1. Fast (constant time O(1))
2. Doesn't cluster outputs at specfic indices, but distributes uniformly
3. Deterministic (same input yields same output)

### Prime Numbers?

-   The prime number in the hash is helpufl in spreading out the keys more uniformly
-   It's also helpful if the array that you are putting values into has a prime length
-   Results in less collisions

## Collisions

A collision is where a newly inserted key maps to an already occupied slot in the hash table. Collisions must be handled using some collision handling technique.
There are many strategies for handling collisions, here are two:

### Separate Chaining

Store the pieces of data at the same spot using another nested data structure (another array or a linked list)

With separate chaining, at each index in our array we store values using a more sophisticated data structure (another array or a linked list)

Allows us to store multiple key value pairs at the same index

### Linear Probing

When there is a collision, we search through the array to find the next empty slot.
Only allows us to store a finite amount

## Hash Table Class Methods

### Get

-   Accepts a key
-   Hashes the key
-   Retrieves the key-value pair
-   Returns undefined if key isn't found

### Set

-   Accepts a key and value
-   Hashes the key
-   Stores the key-value pair in the hash table array (via a collision handling technique like separate chaining)

### Keys

-   Loop through the hash table array and return an array of keys in the table

### Values

-   Loops through the hash table array and returns an array of values in the table
-   Possible to have multiple values that are the same

## Big O of Hash Tables

(on average)

-   Insert: O(1)
-   Delete: O(1)
-   Access: O(1)

O(1) beacuse there is a constant number of operations.
Comes down to how good your hash function is, how fast it is itself but also how evenly it distrubutes things.
