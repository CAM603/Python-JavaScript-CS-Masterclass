Examples of functions and their Big O using Python and JavaScript.

How to run the code:

JavaScript:

-   Install Quokka (free version works fine)
-   command + shift + p
-   select Quokka.js Toggle
-   any console.log()'s will show up in the editor

Python:

-   Install Python for vscode
-   Press the green play button to execute code
-   Prints will show up in vscode console

# Big O

An algorithm is O(f(n)) if the number of simple operations the computer has to do is eventually less than a constant times f(n) as n increases

-   f(n) could be linear (f(n) = n)
-   f(n) could be quadratic (f(n) = n^2)
-   f(n) could be constant (f(n) = 1)
-   f(n) could be something entirely different!

## Counting Operators

-   The more operations your computer does, the longer the execution time will be
-   Reguardless of the exact number, the number of operations grows roughly
    proportionally with n

## Simplifiying Expressions

Constants don't matter

-   O(2n) -> O(n)
-   O(500) -> O(1): There are 500 operations each time
-   O(13n^2) -> O(n^2)

Smaller terms don't matter

-   O(n + 10) -> O(n)
-   O(1000n + 50) -> O(n)
-   O(n^2 + 5n + 8) -> O(n^2)

Big O Shorthands

1. Arithmetic operations are constant
2. Variable assignment is constant
3. Accessing elements in an array (by index) or object (by key) is constant
4. In a loop, the complexity is the length of the loop times the complexity of whatever happens inside the loop

## Objects

When to use

-   When you don't need order
-   When you need fast access/insertion and removal
    Insertion: O(1)
    Removal: O(1)
    Searching: O(n)
    Access: O(1)

## Arrays

When to use

-   When you need order
-   When you need fast access/ insertion and removal (sort of)
    Insertion: It depends where you insert
    Removal: It depends where you remove
    Searching: O(n)
    Access: O(1)
