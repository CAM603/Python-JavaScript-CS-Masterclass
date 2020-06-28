// Using an array
let queue = [];
queue.push("FIRST");
queue.push("SECOND");
queue.push("THIRD");
queue.shift();

queue.unshift("FIRST");
queue.unshift("SECOND");
queue.unshift("THIRD");
queue.pop();

// Using a linked list
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    enqueue(val) {
        let newNode = new Node(val);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.size++;
        return this.size;
    }
    dequeue() {
        if (!this.first) {
            return null;
        }
        let dequeued = this.first;
        if (this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return dequeued.val;
    }
}

let q = new Queue();
q.enqueue("FIRST");
q.enqueue("SECOND");
q.enqueue("THIRD");
