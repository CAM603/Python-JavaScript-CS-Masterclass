# Singly Linked List

-   A data structure that contains a head, tail, and lenght property.
-   Linked lists consist of nodes, and each node has a value and a pointer to another node or null

## Lists vs Arrays

Lists

-   Do not have indices
-   Connected via nodes with a next pointer
-   Random access is not allowed
-   Good at insertion and deletion

Arrays

-   Indexed in order
-   Insertion and deletion can be expensive
-   Can quickly be accessed at a specific index

## Node Properties

val = peice of data
next = reference to next node

## Linked List Properties and Methods

head =
tail =
length = length of singly linked list

### Push

-   Pushing the first value creates a new node and it is assigned to the head and tail of the list
-   Pushing a second value creates a new node and it is assigned as the tail. The head node's next property will be assigned to the tail
-   Pushing a third value creates a new node, the current tail's next value becomes this new node and then this new node is assigned as the tail value in the linked list

#### Psuedo Code

-   function should accept a value
-   create a new node using the value passed to the function
-   if there is no head property on the list, set the head and tail to be the newly created node
-   otherwise set the next property on the tail to be the new node and set the tail property on the list to be the newly created node
-   increment length by one
-   return linked list
