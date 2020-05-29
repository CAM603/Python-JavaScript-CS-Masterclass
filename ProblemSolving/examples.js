// Write a function which takes in a string and returns counts of each character in the string.

charCount("aaaaa"); // {a:5}
charCount("hello"); // {h:1, e:1, l: 2, o:1 }

("my phone number is 420-6969"); // How to handle spaces, numbers?
("Hello"); // How to handle capital letters?
charCount(""); // What to return?

function charCount(str) {
    // do something
    // return an object with keys that are lowercase alphanumeric characters in the string, values should be the count of those characters
}

function charCount(str) {
    // make object
    // loop over string, for each character..
    //// if the character is a number/letter AND is a key in the object, add one to count
    //// if the character is a number/letter AND not in the object, add it to the object and set value to 1
    //// if character is something else (space, period, etc) don't do anything
    // return object
}

function charCount(str) {
    // make object
    let result = {};
    // loop over string, for each character..
    for (let i = 0; i < str.length; i++) {
        // if the character is a number/letter AND is a key in the object, add one to count
        let char = str[i].toLowerCase();
        if (result[char] > 0) {
            result[char]++;
            // if the character is a number/letter AND not in the object, add it to the object and set value to 1
        } else {
            result[char] = 1;
        }
    }
    //// if character is something else (space, period, etc) don't do anything
    // return object
    return result;
}
// First pass
function charCount(str) {
    let result = {};

    for (let i = 0; i < str.length; i++) {
        let char = str[i].toLowerCase();
        if (/[a-z0-9]/.test(char)) {
            if (result[char] > 0) {
                result[char]++;
            } else {
                result[char] = 1;
            }
        }
    }
    return result;
}

// Second pass
function charCount(str) {
    let result = {};
    for (let char of str) {
        char = char.toLowerCase();
        if (/[a-z0-9]/.test(char)) {
            result[char] > 0 ? result[char]++ : (result[char] = 1);
        }
    }
    return result;
}

console.log(charCount("poop "));
