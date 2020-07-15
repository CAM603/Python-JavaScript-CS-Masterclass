// peice of data - val
// reference to next node - next

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// Not the best way to implement
// let first = new Node("Cam");
// first.next = new Node("Adam");
// first.next.next = new Node("Sam");
// first.next.next.next = new Node("Rick");

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        let node = new Node(val);

        if (this.head === null) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }

        this.length++;

        return this;
    }
    pop() {
        if (!this.length) {
            return undefined;
        }

        let current = this.head;
        let newTail = current;

        while (current.next) {
            newTail = current;
            current = current.next;
        }

        this.tail = newTail;
        this.tail.next = null;

        this.length--;

        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }
    shift() {
        if (!this.length) {
            return undefined;
        }

        let currentHead = this.head;
        this.head = currentHead.next;

        this.length--;

        if (this.length === 0) {
            this.tail = null;
        }

        return currentHead;
    }
    unshift(val) {
        let newHead = new Node(val);

        if (!this.head) {
            this.head = newHead;
            this.tail = this.head;
        } else {
            newHead.next = this.head;
            this.head = newHead;
        }

        this.length++;

        return this;
    }
    get(index) {
        if (index < 0 || index >= this.length) {
            return null;
        }

        let count = 0;
        let current = this.head;

        while (count < index) {
            current = current.next;
            count++;
        }
        return current;
    }
    set(index, val) {
        let node = this.get(index);

        if (!node) {
            return false;
        }
        node.val = val;

        return true;
    }
    insert(index, val) {
        if (index < 0 || index > this.length) {
            return false;
        }
        if (index === this.length) {
            this.push(val);
            return true;
        }
        if (index === 0) {
            this.unshift(val);
            return true;
        }
        let newNode = new Node(val);

        let prev = this.get(index - 1);
        let newNext = prev.next;

        prev.next = newNode;
        newNode.next = newNext;

        this.length++;

        return true;
    }
    remove(index) {
        if (index < 0 || index >= this.length) {
            return undefined;
        }
        if (index === this.length - 1) {
            return this.pop();
        }
        if (index === 0) {
            return this.shift();
        }
        let prev = this.get(index - 1);
        let removed = prev.next;
        prev.next = removed.next;
        removed.next = null;

        this.length--;

        return removed;
    }
    print() {
        let arr = [];
        let current = this.head;

        while (current) {
            arr.push(current.val);
            current = current.next;
        }

        console.log(arr);
    }
    reverse() {
        let current = this.head;
        this.head = this.tail;
        this.tail = current;

        let prev = null;
        let next;

        while (current) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        return this;
    }
}

let list = new SinglyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
list.push(6);
list.push(7);
