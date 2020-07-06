class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop() {
        if (!this.head) return undefined;

        let popped = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = popped.prev;
            this.tail.next = null;
            popped.prev = null;
        }
        this.length--;
        return popped;
    }
    shift() {
        if (!this.head) return undefined;
        let shifted = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = shifted.next;
            shifted.next = null;
            this.head.prev = null;
        }
        this.length--;
        return shifted;
    }
    unshift(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    get(index) {
        let mid = Math.floor(this.length / 2);
        if (index < 0 || index >= this.length) return null;
        if (index <= mid) {
            let count = 0;
            let node = this.head;
            while (count !== index) {
                node = node.next;
                count++;
            }
            return node;
        } else {
            let count = this.length - 1;
            let node = this.tail;
            while (count !== index) {
                node = node.prev;
                count--;
            }
            return node;
        }
    }
    set(val, index) {
        let node = this.get(index);
        if (!node) return false;

        node.val = val;
        return true;
    }
    insert(val, index) {
        if (index < 0 || index > this.length) return false;
        if (index === 0) return !!this.unshift(val);
        if (index === this.length) return !!this.push(val);

        let newNode = new Node(val);
        let prev = this.get(index - 1);
        let after = prev.next;

        prev.next = newNode;
        newNode.prev = prev;
        newNode.next = after;
        after.prev = newNode;

        this.length++;
        return true;
    }
    remove(index) {
        if (index < 0 || index >= this.length) return undefined;
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();

        let removed = this.get(index);
        let before = removed.prev;
        let after = removed.next;

        before.next = after;
        after.prev = before;
        removed.next = null;
        removed.prev = null;

        this.length--;
        return removed;
    }
}
let list = new DoublyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
list.push(6);
list.remove(5);
