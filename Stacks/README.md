# Stack

An abstract data structure. A collection of data abides by a LIFO priciple
LIFO = Last In First Out

Where have we seen this before?
THE CALL STACK!

## Where are they used?

-   Managing function invocations
-   Undo/redo
-   Routing (the history object) is treated like a stack

## Implementations

### Using an array

-   The array is the stack and you can push and pop which abides by LIFO
-   Instead of push and pop, you can use unshift and shift BUT that would mean the array needs to reindex everything

### Using a linked list

-   Create a Node class with _val_ and _next_ properties
-   Create a Stack class with _first_, _last_ and _size_ properties
-   Implement a push method in the Stack class
-   Implement a pop method in the Stack class
-   IMPORTANT: the push and pop method will not be the same as the push and pop methods implented in the linked list folder. This is becasue push and pop on a linked list traverses through the linked list and is not constant time. The stack linked list push and pop methods will add to and remove from the front of the linked list so the methods will look like the shift and unshift methods in the linked list folder. I hope that makes sense.

#### Push Psuedo Code

-   function accepts a value
-   create a new node with that value
-   if there are no nodes in the stack, set the first and last properties to be the newly created node
-   if there is at least one node, create a variable that stores the current first property on the stack
-   reset the first property to be the newly created node
-   set the next property on the node to be the previously created node
-   increment the size of the stack by 1

#### Pop Psuedo Code

-   if there are no nodes in the stack, return null
-   create a temporary variable to store the first property on the stack
-   if there is only one node, set the first and last property to be null
-   if there is more than one node, set the first property to be the next property on the current first
-   decrement size
-   return the value of the node removed

## Big O

Insertion: O(1)
Removal: O(1)
Search: O(N)
Access: O(N)
