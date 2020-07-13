class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        let newNode = new Node(value);

        if (!this.root) {
            this.root = newNode;
            return this;
        }

        let current = this.root;

        while (current) {
            if (value === current.value) return undefined;
            if (value < current.value) {
                if (!current.left) {
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if (!current.right) {
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            }
        }
    }

    recursiveInsert(value, node = this.root) {
        if (!this.root) {
            this.root = new Node(value);
            return this;
        }
        if (value === node.value) return undefined;

        if (value < node.value) {
            if (!node.left) {
                node.left = new Node(value);
                return this;
            }
            return this.recursiveInsert(value, node.left);
        }

        if (value > node.value) {
            if (!node.right) {
                node.right = new Node(value);
                return this;
            }
            return this.recursiveInsert(value, node.right);
        }
    }

    find(value) {
        if (!this.root) return false;

        let current = this.root;

        while (current) {
            if (current.value === value) return current;

            if (value < current.value) {
                if (!current.left) return false;
                current = current.left;
            } else {
                if (!current.right) return false;
                current = current.right;
            }
        }
    }

    contains(value) {
        if (!this.root) return false;

        let current = this.root;

        while (current) {
            if (current.value === value) return true;

            if (value < current.value) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
        return false;
    }

    bfs() {
        let queue = [this.root];
        let visited = [];

        while (queue.length) {
            let node = queue.shift();
            visited.push(node.value);

            if (node.left) queue.push(node.left);

            if (node.right) queue.push(node.right);
        }
        return visited;
    }

    dfsPre() {
        let visited = [];

        function traverse(node) {
            visited.push(node.value);
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
        }
        traverse(this.root);
        return visited;
    }
}

let tree = new BinarySearchTree();
tree.insert(5);
tree.insert(1);
tree.insert(2);
tree.insert(6);
tree.insert(9);
tree.insert(7);
tree.insert(0);

//      5
//   1     6
// 0   2      9
//          7
