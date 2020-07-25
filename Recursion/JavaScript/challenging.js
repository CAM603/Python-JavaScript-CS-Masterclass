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
// capitalizeFirst(["car", "taco", "banana"]) // ["Car", "Taco", "Banana"]

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

// Write a recursive funciton called nestedEvenSum. Return the sum of all even numbers in an object which may contain nested objects

function nestedEvenSum(obj) {
    let sum = 0;
    for (let key in obj) {
        if (Number.isInteger(obj[key]) && obj[key] % 2 === 0) {
            sum += obj[key];
        } else if (typeof obj[key] === "object") {
            sum = sum + nestedEvenSum(obj[key]);
        }
    }
    return sum;
}
let obj2 = {
    a: 2,
    b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
    c: { c: { c: 2 }, cc: "ball", ccc: 5 },
    d: 1,
    e: { e: { e: 2 }, ee: "car" },
};

nestedEvenSum(obj2); // 10

// Write a recursive function called capitalizedWords. Given an array of words, return a new array containing each word capitalized
// capitalizedWords(["i", "am", "learning", "recursion"]) // ["I", "AM", "LEARNING", "RECURSION"]

function capitalizedWords(arr) {
    let solution = [];

    if (arr.length === 0) return solution;

    solution.push(arr[0].toUpperCase());

    solution = solution.concat(capitalizedWords(arr.slice(1)));

    return solution;
}

let words = ["i", "am", "learning", "recursion"];
capitalizedWords(words);

// Write a recursive function called stringifyNumbers which takes in an object and finds all of the values which are numbers and converts them to strings.

function stringifyNumbers(obj) {
    let newObj = {};

    for (let key in obj) {
        if (typeof obj[key] === "number") {
            newObj[key] = obj[key].toString();
        } else if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
            newObj[key] = stringifyNumbers(obj[key]);
        } else {
            newObj[key] = obj[key];
        }
    }

    return newObj;
}

let myObj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66,
        },
    },
};

stringifyNumbers(myObj);

// Write a function called collectStrings which accepts an object and returns an array of all the values in the object that have a type of string

function collectStrings(obj) {
    let strings = [];

    for (let key in obj) {
        if (typeof obj[key] === "string") {
            strings.push(obj[key]);
        } else if (typeof obj[key] === "object") {
            strings = strings.concat(collectStrings(obj[key]));
        }
    }

    return strings;
}

const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz",
                    },
                },
            },
        },
    },
};

collectStrings(obj); // ["foo", "bar", "baz"])
