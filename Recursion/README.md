# Recursion

A process (a function in our case) that calls itself

_Examples_

-   JSON.parse/ JSON.stringify
-   document.getElementById and DOM traversal algorithms
-   Object traversal
-   Inside complex data structures

_The Call Stack_

-   A stack data structure
-   Any time a function is invoked it is placed (pushed) on top of the call stack
-   When JavaScript sees the return keyword or when the function ends, the compiler will remove (pop)

As functions are invoked, they are added to the top of the stack and then they are popped off one at a time from the top of the stack.

When we write recursive functions, we keep pushing new functions onto the call stack.

## How recursive functions work

Two essential parts of a recursive funciton:

-   The base case, the condition when the recursion ends. This is the most important concept to understand.
-   Each time the recursive function calls itself, it is given different input

So essentially, invoke the same function with a different input until you reach your base case!

## Common Pitfalls

-   No base case: Infinite Loop!
-   Forgetting to return or returning the wrong thing: Returning will pop off the call stack
-   Stack overflow: too many frames on the stack

## Example

```js
function countDown(num) {
    if (num <= 0) {
        console.log("This is the base case!");
        // Don't forget to return
        return;
    }
    console.log(num);
    num--;
    countDown(num);
}
```

```py
def count_down(num):
    if num <= 0:
        print("This is the base case!")
        # Don't forget to return
        return

    print(num)
    num -= 1
    count_down(num)
```

Let's invoke one of these and see what happens.

count_down(3)
-> 3

count_down(2)
-> 2

count_down(1)
-> 1

count_down(0)
-> "Base case!"

## A more complex example

```js
function sumRange(num) {
    if (num === 1) return 1;
    return num + sumRange(num - 1);
}
```

```py
def sum_range(num):
    if num == 1:
        return 1
    return num + sum_range(num - 1)
```

```
sumRange(3)
    return 3 + sumRange(2)
                return 2 + sumRange(1)
                            return 1
                return 2 + 1
    return 3 + 3
return 6
```

## Helper method recursion

Uses a helper function to call recursively.

```js
function collectOddValues(arr) {
    let result = [];

    function helper(helperInput) {
        // Base case
        if (helperInput.length === 0) return;

        if (helperInput[0] % 2 !== 0) {
            result.push(helperInput[0]);
        }
        helper(helperInput.slice(1));
    }

    helper(arr);

    return arr;
}
```

## Pure recursion

Tips

-   For arrays, use methods like splice, the spread operator, and concat that makes copies of arrays so you do not mutate them
-   Strings are immutable so you will need to use methods like slice, substr, or substring to make copies of strings
-   To makes copies of objects use Object.assign, or the spread operator

```js
function collectOddValues(arr) {
    let newArr = [];

    if (arr.length === 0) return newArr;

    if (arr[0] % 2 !== 0) {
        newArr.push(arr[0]);
    }
    newArr = newArr.concat(collectOddValues(arr.slice(1)));
    return newArr;
}
```
