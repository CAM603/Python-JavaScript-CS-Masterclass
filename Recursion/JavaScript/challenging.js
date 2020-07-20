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
