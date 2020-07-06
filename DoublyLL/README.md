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

### Shift

Remove a node from the beginning of the list

#### Psuedo Code

-   if the length is 0, return undefined
-   store the current head property in a variable
-   if the length is 1, set the head and tail to be null
-   update the head to be the next of the old head
-   set the head's prev property to be null
-   set the old head's next to be null
-   decrement the length
-   return the old head

### Unshift

Add a node to the beginning of the list

#### Pseudo Code

-   create a new node with the value passed into the function
-   if the length is 0, set the head and tail to the new node
-   else
    -- set the prev property on the head of the list to be the new node
    -- set the next property on the new node to be the head property
    -- update the head to be the new node
-   increment the length

### Get

Accessing a node by its position

#### Psuedo Code

-   if the index is less than 0 or greater than or equal the length, return null
-   if the index is less than or equal to half the length:
    -- loop through the list starting from the head
    -- return node when it is found
-   if the index is greater than half the length:
    -- loop through the list starting from the tail
    -- return the node when it is found

### Set

Replacing the value of a node in the list

#### Pseudo Code

-   create a variable which is the result of the get method at the index passed into the function
    -- if the get method returns a valid node, set the value of that node to be the value passed to the function
    -- return true
-   otherwise return false

### Insert

Adding a node in a list by a certain position

#### Psuedo Code

-   if the index is < 0 or > length, return false
-   if the index is 0, unshift
-   if the index is the same as the length, push
-   use get method to access the index - 1
-   set the next and prev properties on the correct nodes to link everything together
-   increment the length
-   return true

### Remove

Remove a node at a certain position

#### Pseudo Code

-   if the index is < 0 or index >= length, return undefined
-   if the index is 0, shift
-   if the index is the same as the length - 1, pop
-   use the get method to retrieve the to be removed
-   update the next and prev properties to remove the found node from the list
-   set next and prev to null on the found node

## Big O

Insert: O(1)
Removal: O(1)
Searching: O(N)
Access: O(N)
