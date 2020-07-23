/*
Define a function called stringSearch that accepts two strings
Loop over the longer string
Loop over the shorter string
If the characters don't match, break out of the inner loop
If the characters match, keep going
If you complete the inner loop and find a match, increment the count
Return the count
*/
// NAIVE SOLUTION
function naiveSearch(str1, str2) {
    let count = 0;

    for (let i = 0; i < str1.length; i++) {
        for (let j = 0; j < str2.length; j++) {
            if (str1[i + j] !== str2[j]) {
                break;
            }
            if (j === str2.length - 1) {
                count++;
            }
        }
    }
    return count;
}

// O(N) SOLUTION
function stringSearch(str1, str2) {
    let count = 0;
    let inner = 0;
    for (let i = 0; i < str1.length; i++) {
        if (str1[i] === str2[inner] && inner === str2.length - 1) {
            inner = 0;
            count++;
        } else if (str1[i] === str2[inner]) {
            inner++;
        } else {
            inner = 0;
        }
    }
    return count;
}

stringSearch("lorie loled", "lol");

function stringSearchRecursive(str1, str2) {
    if (str1.length < str2.length) return 0;

    if (str1.slice(0, str2.length) === str2) {
        return 1 + stringSearchRecursive(str1.slice(str2.length), str2);
    } else {
        return stringSearchRecursive(str1.slice(1), str2);
    }
}

stringSearchRecursive("lorie loled", "lol");
