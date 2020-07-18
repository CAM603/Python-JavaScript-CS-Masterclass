/*
Write a function called power which accepts a base and an exponent. The function should return the power of the base to the exponent. This function should mimic the functionality of Math.pow - do not worry about negative bases and exponents
power(2,0) -> 1
power(2,2) -> 4
power(2,4) -> 16
2 * 2 * 2 * 2
 */
function power(base, exponent) {
    if (exponent === 0) return 1;
    return base * power(base, exponent - 1);
}

/*
Write a function called factorial which accepts a number and returns the factorial of that number. A factorial is the product of an integer and all the integers below it.
Factorial 4 written like 4! is equal to 24 because 4 * 3 * 2 * 1 = 24
Factorial zero, 0!, is always 1
*/
function factorial(num) {
    if (num === 0) return 1;
    return num * factorial(num - 1);
}

/*
Write a function called productOfArray which takes in an array of numbers and returns the product of them all.
productOfArray([1,2,3]) -> 6
productOfArray([1,2,3,10]) -> 60
*/
function productOfArray(arr) {
    let total = 1;

    function helper(arr) {
        if (arr.length === 0) return;
        total *= arr[0];
        helper(arr.slice(1));
    }
    helper(arr);
    return total;
}

function productOfArrayPure(arr) {
    let total = 1;

    total = total * productOfArray(arr.slice(1));
    return total;
}

/*
Write a function called recursiveRange which accepts a number and adds up all the numbers from 0 to the number passed into the function
recursiveRange(6) -> 21
recursiveRange(10) -> 55
*/
function recursiveRange(num) {}
