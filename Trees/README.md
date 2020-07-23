# Trees

Data structures that consist of nodes in a parent / child relationship.

A linked list is an example of a tree, but not all trees are linked lists. Compared to lists, which are linear, trees are non-linear.

To ba a tree, nodes can't point to other nodes that are on the same level. Nodes can only point from parent to child. The nodes all point away from the root node.

-   Root: Top node in the tree.
-   Child: A node directly connected to another node when moving away from the root.
-   Parent: The converse notion of a child.
-   Siblings: A group of nodes with the same parent.
-   Leaf: A node with no children.
-   Edge: The connection between one node and another.

## Uses

-   HTML/DOM: Elements have a parent child relationship.
-   Network Routing.
-   Abstract syntax trees: A statement sequence, a loop, and then a condition.
-   Descision tree used by artificial intelligence. Considering all possible choices based on something
-   Folders in an operating system

## Types

### Trees

-   Each node can have as many nodes attached as it wants

### Binary Trees

-   Each node can have at most 2 children

### Binary Search Trees

-   Special case of a binary tree
-   They are sorted in a particular order
-   Used to compare data that is sortable
-   If we take any node of a particular value, all nodes with a lesser value are located on the left side of that node and all nodes with a greater value are located on the right side.
-   Every parent node has at most two children
-   Every node to the left of a parent node is always less than the parent
-   Every node to the right of a parent node is always greater than the parent

#### Searching a BST

-   Start at the root and compare
    -   Is the root value less than, equal or greater than the target?
-   If less, search left and compare again
-   If more, search right and compare again
-   If equal, you found it!

#### Inserting Psuedo Code

-   Create a new node
-   Starting at the root
    -   Check if there is a root. If not, the root now becomes that new node
    -   If there is a root, check if the value of the new node is greater than or less than the value of the root
    -   If the value is greater
        -   Check to see if there is a node to the right
            -   If there is, move to that node and repeat these steps
            -   If there is not, add that node as the right property
    -   If the value is less
        -   Check to see if there is a node to the left
            -   If there is, move to that node and repeat these steps
            -   If there is not, add that node as the left property

#### Finding Psuedo Code

Starting at the root

-   Check if there is a root, if not...there is nothing to find!
-   If there is a root, check if the value of the new node is the value we are looking for.
-   If not, check to see if the value is greater than or less than the value of the root.
-   If it is greater:
    -   Check to see if there is a node to the right.
        -   If there is, move to that node and repeat these steps
        -   If there is not, we are done searching!
-   If it is less:
    -   Check to see if there is a node to the left.
        -   If there is, move to that node and repeat these steps.
        -   If there is not, we are done searching!

## Big O

_When sorted_

Best case, on average...
Insertion: O(log n)
Searching: O(log n)

Worst case, every node from the root only has nodes to the left or right of it's parent and it looks like a linked list...
Insertion: O(n)
Searching: O(n)

## Tree Traversal

How do we visit every node once? Two ways:

-   Breadth First Search
-   Depth First Search

### Breadth First Search

Iterative Steps

-   Create a queue (can be an array) and a variable to store the values of nodes that have been visited
-   Place the root node in the queue
-   Loop as long as there are nodes in the queue
    -   Dequeue a node from the queue and push the value of the node into the variable that stores the visited nodes
    -   If there is a left property on the node dequeued, add it to the queue
    -   If there is a right property on the node dequeued, add it to the queue
-   Return the variable that stores the visited node values

### Depth First Search

#### Pre Order Recursive Steps

Visit the root, traverse the left subtree, and then traverse the right subtree.

-   Create a variable to store the values of nodes visited
-   Store the root of the BST in a variable called current
-   Write a helper function which accepts a node
    -   Push the value of the node to the variable that stores the visited values
    -   If the node has a left property, call the helper function with the left property on the node
    -   If the node has a right property, call the helper function with the right property on the node
-   Invoke the helper function with the current variable
-   Return the array of visited values

#### Post Order Recursive Steps

Traverse the left subtree, traverse the right subtree, and then visit the root.

-   Create a variable to store the values of nodes visited
-   Store the root of the BST in a variable called current
-   Write a helper function which accepts a node
    -   If the node has a left property, call the helper function with the left property on the node
    -   If the node has a right property, call the helper function with the right property on the node
    -   Push the value of the node to the variable that stores the visited values
-   Invoke the helper function with the current variable
-   Return the array of visited values

#### In Order Recursive Steps

Traverse the left subtree, visit the root, and then visit the right subtree.

-   Create a variable to store the values of nodes visited
-   Store the root of the BST in a variable called current
-   Write a helper function which accepts a node
    -   If the node has a left property, call the helper function with the left property on the node
    -   Push the value of the node to the variable that stores the visited values
    -   If the node has a right property, call the helper function with the right property on the node
-   Invoke the helper function with the current variable
-   Return the array of visited values

## Use Cases

DFS

-   When the tree is wide, less nodes will be stored when compared to a BFS

BFS

-   When there are less nodes to keep track of

DFS In Order

-   Gets all nodes in the tree in their underlying order

DFS Pre Order

-   Can be used to export a tree structure so tha it can be easily reconstructed
