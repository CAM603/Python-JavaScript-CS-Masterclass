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
