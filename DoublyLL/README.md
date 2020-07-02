# Doubly Linked List

Almost identical to Singly Linked List, except every node has a previous pointer as well as the next pointer.

Taks up more memory, but that gives us more flexibility.

## Methods of the Doubly Linked List

### Push

Adds a new node to the tail of the list

#### Pseudo Code

-   create a new node with the value passed to the function
-   if the head property is null, set the head and tail to be the newly created node
-   if not, set the next property on the tail to be that node
-   set the previous property on the new node to be the tail
-   set the tail to be the new node

### Pop

Removes the node from the end of the list

#### Pseudo Code

-   if there is no head, return undefined
-   store the current tail in a variable to return later
-   if the length is 1, set the head and tail to null
-   update the tail to be the the previous node
-   set the new tail's next to be null
-   decrement the length
-   return the value removed
