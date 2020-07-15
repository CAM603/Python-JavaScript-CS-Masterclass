"""
Write a function that takes in a non-empty array of distinct integers and a target integer. The function should find all triplets in the array that sum up to the target sum and return a two dimensional array of all these triplets. Each inner array containing a single triplet should have all three of its elements ordered in ascending order. The triplets themselves should be ordered in ascending order by the first triplet element. If two triplet elements have the same first element, then they should be ordered such that the smaller second element comes first. If the two triplet elements have the same first and second elements, then they should be ordered such that the smaller third element comes first. If no such triplets can be found in the array, the function should return an empty array.
"""


def three_sum(arr, target):
    solution = []
    arr = sorted(arr)
    length = len(arr)

    # i is the first pointer
    for i in range(length - 2):
        second = i + 1
        third = length - 1
        # check all possible combinations
        while second < third:
            triplet = [arr[i], arr[second], arr[third]]
            triplet_sum = sum(triplet)

            if triplet_sum > target:
                third -= 1
            if triplet_sum < target:
                second += 1
            if triplet_sum == target:
                second += 1
                third -= 1
                solution.append(triplet)
    return solution


# print(three_sum([12, 3, 1, 2, -6, 5, -8, 6], 0))
# print(three_sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 15], 30))
# print(three_sum([-4, -3, -2, -1, 0, 1, 2, 3, 4], 0))
#[[-4, 0, 4], [-4, 1, 3], [-3, -1, 4], [-3, 0, 3], [-3, 1, 2], [-2, -1, 3], [-2, 0, 2], [-1, 0, 1]]
print([len(three_sum(range(-i, i + 1), 0)) for i in range(0, 10)])

x = [range(-i, i + 1) for i in range(0, 10)]
for n in x:
    print('Start')
    for m in n:
        print(m)
