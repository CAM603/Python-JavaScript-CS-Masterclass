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


sll = SinglyLinkedList()

sll.push(2)
print(sll.unshift(3))


# curr = sll.head
# while curr:
#     print(curr)
#     curr = curr.next
