// Naive solution...O(N^2)
function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        let correctIndex = arr2.indexOf(arr1[i] ** 2);
        if (correctIndex === -1) {
            return false;
        }
        arr2.splice(correctIndex, 1);
    }
    return true;
}
same([1, 2, 3, 2], [9, 1, 4, 4]);

// Linear time
function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    // counts frequencies of individual values
    let counter1 = {};
    let counter2 = {};
    for (let val of arr1) {
        counter1[val] = (counter1[val] || 0) + 1;
    }
    for (let val of arr2) {
        counter2[val] = (counter2[val] || 0) + 1;
    }
    for (let key in counter1) {
        if (!(key ** 2 in counter2)) {
            return false;
        }
        if (counter1[key] !== counter2[key ** 2]) {
            return false;
        }
    }
    return true;
}
same([1, 2, 3, 2], [9, 1, 4, 4]);

// ANAGRAMS
// Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman

function anagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }
    for (let i = 0; i < str1.length; i++) {
        let index = str2.indexOf(str1[i]);
        if (index === -1) {
            return false;
        }
        str2 = str2.slice(0, index) + str2.slice(index + 1);
        console.log(str2);
    }
    return true;
}

anagram("anagram", "nagaram");

function anagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }
    let frequencies = {};

    for (letter of str1) {
        frequencies[letter]
            ? (frequencies[letter] += 1)
            : (frequencies[letter] = 1);
    }
    for (letter of str2) {
        frequencies[letter]
            ? (frequencies[letter] += 1)
            : (frequencies[letter] = 1);
    }
    for (key in frequencies) {
        if (frequencies[key] % 2 !== 0) {
            return false;
        }
    }
    return true;
}

anagram("anagram", "nagaram");
