class Node:
    def __init__(self, val):
        self.val = val
        self.next = None

    def __str__(self):
        return f'Node {self.val}'


class SinglyLinkedList:
    def __init__(self):
        self.head = None
        self.tail = None
        self.size = 0

    def __str__(self):
        return f'Head: {self.head}. Tail: {self.tail}. Size: {self.size}'

    def push(self, val):
        new_node = Node(val)

        if not self.head:
            self.head = new_node
            self.tail = new_node
        else:
            self.tail.next = new_node
            self.tail = new_node
        self.size += 1
        return self

    def pop(self):
        if not self.head:
            return None

        current = self.head
        new_tail = current

        while current.next:
            new_tail = current
            current = current.next

        self.tail = new_tail
        self.tail.next = None
        self.size -= 1

        if self.size == 0:
            self.head = None
            self.tail = None

        return current

    def shift(self):
        if not self.head:
            return None

        old_head = self.head
        self.head = old_head.next
        self.size -= 1

        if self.size == 0:
            self.tail = None

        return old_head

    def unshift(self, val):
        new_node = Node(val)

        if not self.head:
            self.head = new_node
            self.tail = new_node

        new_node.next = self.head
        self.head = new_node

        self.size += 1

        return self

    def get(self, index):
        if index >= self.size or index < 0:
            return None

        count = 0
        current = self.head

        while count < index:
            current = current.next
            count += 1

        return current

    # set is a reserved word, use assign
    def assign(self, val, index):
        node = self.get(index)

        if not node:
            return False

        node.val = val

        return True

    def insert(self, val, index):
        if index > self.size or index < 0:
            return False

        if index == self.size:
            self.push(val)
            return True

        if index == 0:
            self.unshift(val)
            return True

        new_node = Node(val)

        prev_node = self.get(index - 1)
        new_next = prev_node.next

        prev_node.next = new_node
        new_node.next = new_next

        self.size += 1

        return True

    def remove(self, index):
        if index >= self.size or index < 0:
            return False

        if index == self.size - 1:
            return self.pop()

        if index == 0:
            return self.shift()

        prev_node = self.get(index - 1)
        removed = prev_node.next
        prev_node.next = removed.next
        removed.next = None

        self.size -= 1

        return removed

    def log(self):
        nodes = []

        current = self.head
        while current:
            nodes.append(current.val)
            current = current.next

        print(nodes)

    def reverse(self):
        current = self.head
        self.head = self.tail
        self.tail = current

        prev = None

        while current:
            next = current.next
            current.next = prev
            prev = current
            current = next

        return self


sll = SinglyLinkedList()

sll.push(1)
sll.push(2)
sll.push(3)
sll.push(4)
sll.push(5)
sll.push(6)
sll.log()
print(sll)
sll.reverse()
sll.log()
print(sll)

# curr = sll.head
# while curr:
#     print(curr)
#     curr = curr.next
