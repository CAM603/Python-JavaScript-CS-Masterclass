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

-   Each node can have as many nodes as it wants

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
