"""
Write a function that receives as input the head of a linked list and an integer k. The function should remove the kth node from the end of the list and return the head node of the updated list.

Example:
20-19-18-17-16-15-14-13-12-11-null
The head node would refer to the node 20. Let k = 4, so pur function should remove the 4th node from the end of the list, node 14. So after, the list should look like:
20-19-18-17-16-15-13-12-11-null

If k is longer than the length of the list, the list should not be changed.

The optimal solution exhibits a runtime complexity of O(N) and space complexity of O(1)
"""


class Node:
    def __init__(self, data):
        self.data = data
        self.next = None


head = Node(20)
head.next = Node(19)
head.next.next = Node(18)
head.next.next.next = Node(17)
head.next.next.next.next = Node(16)
head.next.next.next.next.next = Node(15)
head.next.next.next.next.next.next = Node(14)
head.next.next.next.next.next.next.next = Node(13)
head.next.next.next.next.next.next.next.next = Node(12)
head.next.next.next.next.next.next.next.next.next = Node(11)


def removeNode(head, k):
    # Determine the length
    length = 0
    curr = head
    while curr:
        length += 1
        curr = curr.next

    # Edge case if k is longer than the length
    if k > length:
        return head

    # Gets index of node to remove
    to_remove = length - k

    curr = head
    # Edge case if we need to remove the head
    if to_remove == 0:
        return curr.next

    i = 1
    # stops curr at the node before the node to remove
    while i < to_remove:
        curr = curr.next
        i += 1

    # reassign pointer
    curr.next = curr.next.next

    return head


res = removeNode(head, 4)

curr = res

while curr:
    print(curr.data)
    curr = curr.next
