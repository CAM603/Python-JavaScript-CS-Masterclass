// Using an array
let stack = [];
stack.push("Google");
stack.push("YouTube");
stack.push("Reddit");
stack.pop();

// Using a linked list
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    push(val) {
        let newNode = new Node(val);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            let prevFirst = this.first;
            this.first = newNode;
            this.first.next = prevFirst;
        }
        this.size++;
        return this.size;
    }
    pop() {
        if (!this.first) {
            return null;
        }
        let prevFirst = this.first;
        if (this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return prevFirst.val;
    }
}

let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.pop();
