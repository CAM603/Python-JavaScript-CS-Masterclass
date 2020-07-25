# Dynamic Programming

A method for solving a complex problem by breaking it down into a collection of simpler subproblems, solving each of the subproblems just once and storing their solutions.

It only works on problems with optimal substructure & overlapping subproblems.

## Overlapping subproblems

A problem is said to have overlapping subproblems if it can be broken down into subproblems which are reused several times.

EX: Fibonacci Sequence. Where every number after the first two is the sum of the two preceding numbers

## Optimal Substructure

A problem is said to have optimal substructure if an optimal solution can be constructed from optimal solutions of its subproblems.

EX: The shortest path from point A to D will also have the shortest path from A to C

## Memoization

Storing the results of expensive function calls and returning the cached result when the same input occur again

## Tabulation

Storing the result of a previous result in a table (usually an array). Usually done using iteration. Better space complexity can be achieved using tabulation.
