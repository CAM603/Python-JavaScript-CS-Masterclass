// Write a function called reverse which accepts a string and returns a new string reversed
// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'

function reverse(str) {
    let reversed = "";

    function helper(str) {
        if (str.length === 0) return;

        reversed += str[str.length - 1];
        helper(str.slice(0, -1));
    }
    helper(str);
    return reversed;
}

function reversePure(str) {
    let reversed = "";

    if (str.length === 0) return reversed;

    reversed = str[str.length - 1] + reversePure(str.slice(0, -1));
    return reversed;
}

reversePure("awesome");

// Write a recursive function called isPalindrome which returns true if the string passed in is palindrome (reads the same forward and backward) otherwise return false
// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

function isPalindrome(str) {
    if (str.length === 0) return true;

    if (str[0] !== str[str.length - 1]) return false;

    return isPalindrome(str.slice(1, -1));
}
isPalindrome("amanaplanacanalpanama");

// Write a recursive function called someRecursive which accepts an array and a callback. The function returns true if a single value in an array returns true when passed to the callback. Otherwise it returns false.
// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false

const isOdd = (val) => val % 2 !== 0;

function someRecursive(arr, cb) {
    if (arr.length === 0) return false;

    if (cb(arr[0])) return true;

    return someRecursive(arr.slice(1), cb);
}
someRecursive([4, 6, 8], isOdd);

// Write a function called flatten which accepts an array of arrays and returns a new array with all values flattened
// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]

function flatten(arr) {
    let flattened = [];

    function helper(arr) {
        if (arr.length === 0) return;

        if (Array.isArray(arr[0])) {
            helper(arr[0]);
        } else {
            flattened.push(arr[0]);
        }
        helper(arr.slice(1));
    }
    helper(arr);
    return flattened;
}

function flattenPure(arr) {
    let flattened = [];

    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            flattened = flattened.concat(flattenPure(arr[i]));
        } else {
            flattened.push(arr[i]);
        }
    }
    return flattened;
}

function flattenPure2(arr) {
    if (arr.length === 0) return arr;

    if (!Array.isArray(arr[0])) {
        return [arr[0]].concat(flattenPure2(arr.slice(1)));
    } else {
        return flattenPure2(arr[0]).concat(flattenPure2(arr.slice(1)));
    }
}

flattenPure([1, 2, 3, [4, 5]]);

// Write a function called capitalizeFirst. Given an array of strings, capitalize the first letter of each string in the array

function capitalizeFirst(arr) {
    let solution = [];

    if (arr.length === 0) {
        return solution;
    }
    let name = arr[0];
    name = name.charAt(0).toUpperCase() + name.slice(1);
    solution.push(name);
    solution = solution.concat(capitalizeFirst(arr.slice(1)));

    return solution;
}

capitalizeFirst(["car", "taco", "banana"]);

// Write a recursive function called capitalizedWords. Given an array of words, return a new array containing each word capitalized

function capitalizedWords(arr) {
    let solution = [];

    if (arr.length === 0) return solution;

    solution.push(arr[0].toUpperCase());

    solution = solution.concat(capitalizedWords(arr.slice(1)));

    return solution;
}

let words = ["i", "am", "learning", "recursion"];
capitalizedWords(words);
