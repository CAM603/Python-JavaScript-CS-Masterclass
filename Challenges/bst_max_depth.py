# Given a binary tree, find its maximum depth. The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.


class TreeNode(object):
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


def maxDepth(root):

    if root is None:
        return 0

    left = maxDepth(root.left)
    right = maxDepth(root.right)

    return max(left, right) + 1


def maxDepthIterative(root):
    if root is None:
        return 0

    maximum = 1

    nodes = [root]
    depths = [1]

    while nodes:
        node = nodes.pop()
        depth = depths.pop()

        if node.left is None and node.right is None:
            maximum = max(maximum, depth)

        if node.left:
            nodes.append(node.left)
            depths.append(depth + 1)

        if node.right:
            nodes.append(node.right)
            depths.append(depth + 1)

    return maximum


root = TreeNode(3)
root.left = TreeNode(9)
root.right = TreeNode(20)
root.right.left = TreeNode(15)
root.right.right = TreeNode(7)
root.right.right.left = TreeNode(35)

print(maxDepth(root))
print(maxDepthIterative(root))
