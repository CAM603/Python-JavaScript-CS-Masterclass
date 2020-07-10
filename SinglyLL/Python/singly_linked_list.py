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

    def push(self, val):
        newNode = Node(val)

        if not self.head:
            self.head = newNode
            self.tail = newNode
        else:
            self.tail.next = newNode
            self.tail = newNode
        self.size += 1
        return self


sll = SinglyLinkedList()
sll.push(1)
sll.push(2)
sll.push(3)

curr = sll.head
while curr:
    print(curr)
    curr = curr.next
