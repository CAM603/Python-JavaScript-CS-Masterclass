# Given a n-ary tree find its max depth
# The max depth is the number of nodes along the longest path from the root node down to the farthest leaf node
# N-ary trees can have more than two children


class TreeNode(object):
    def __init__(self, val=None, children=None):
        self.val = val
        self.children = children


def maxDepth(root):
    if root is None:
        return 0

    q = [root]
    depth = 0

    while q:
        size = len(q)
        for _ in range(size):
            node = q.pop(0)
            for child in node.children:
                q.append(child)
        depth += 1

    return depth


def maxDepth2(root):

    max_depth = 1

    if root is None:
        return 0

    def getMaxDepth(node, depth):

        nonlocal max_depth

        if node is None:
            return

        max_depth = max(depth, max_depth)

        for child in node.children:
            getMaxDepth(child, depth + 1)

    getMaxDepth(root, 1)
    return max_depth
