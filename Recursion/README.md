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

## Example

```js
function countDown(num) {
    if (num <= 0) {
        console.log("Base case!");
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
        print("Base case!")
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
