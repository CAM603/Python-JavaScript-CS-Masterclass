// Calculate a consistent number to be returned from he hash function
let total = 0;

// charCodeAt gives us the UTF-16 code unit for the given index
// Subtracting 96 just gives us the letters place in the alphabet
total += "hello".charCodeAt(0) - 96;
total += "hello".charCodeAt(1) - 96;
total += "hello".charCodeAt(2) - 96;
total += "hello".charCodeAt(3) - 96;
total += "hello".charCodeAt(4) - 96;

// Our hash function:
// Pass in a string and the length of the array
// hash("hello", 11)
// The number returned needs to be a valid index for an array of length 11
// We can do this by taking our total and module (%) it by the length of the array
total % 11;

// Simple has function that works on strings only
// Problems with this hash function
// 1. Only hashes strings
// 2. Not constant time - linear in key length
// 3. Could be a little more random
function hash(key, arrLen) {
    let total = 0;
    for (let char of key) {
        // map "a" to 1, "b" to 2 etc
        let value = char.charCodeAt(0) - 96;
        total = (total + value) % arrLen;
    }
    return total;
}
