"""
Write a function called sum_zero which accepts a sorted array of integers. The function should find the first pair where the sum is zero. Return an array that includes both values that sum to zero or undefined if a pair does not exist
"""
# Naive Solution
# Time Complexity: O(n^2)
# Space Complexity: O(1)
print('SUM_ZERO')


def sum_zero(arr):
    for i in range(len(arr)):
        for j in range(i + 1, len(arr)):
            if arr[i] + arr[j] == 0:
                return [arr[i], arr[j]]
    return None


print(sum_zero([-3, -2, -1, 0, 1, 2, 3]))
print(sum_zero([-4, 2, 3, 4, 5]))
# Refactored with multiple pointers
# Time Complexity: O(N)
# Space Complexity: O(1)
print('SUM_ZERO2')


def sum_zero2(arr):
    left = 0
    right = len(arr) - 1

    while left < right:
        if arr[left] + arr[right] == 0:
            return [arr[left], arr[right]]
        if arr[left] + arr[right] > 0:
            right -= 1
        else:
            left += 1

    return None


print(sum_zero2([-3, -2, -1, 0, 1, 2, 3]))
print(sum_zero2([-4, 2, 3, 4, 5]))

"""
Implement a function called countUniqueValues, which accepts a sorted array and counts the unique values in the array. There can be negative numbers in the array but it will always be sorted
"""
print('UNIQUE_VARIABLES')


def countUniqueValues(arr):
    count = 1
    start = 0
    scout = 1

    while scout < len(arr):
        if arr[start] != arr[scout]:
            count += 1
        scout += 1
        start += 1
    return count


print(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]))

"""
Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.
Bonus Constraints:
Time: O(N)
Space: O(1)
"""
print('AVE_PAIR')


def average_pair(arr, target):
    left = 0
    right = len(arr) - 1

    if len(arr) == 0:
        return False

    while left < right:
        ave = (arr[left] + arr[right]) / 2
        if ave == target:
            return True
        if ave > target:
            right -= 1
        else:
            left += 1
    return False


print(average_pair([1, 2, 3], 2.5))  # true
print(average_pair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8))  # true
print(average_pair([-1, 0, 2, 4, 5, 6], 4.1))  # false
print(average_pair([], 4))  # false

"""
Write a function called is_subsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without changing the ordering.
Solution should have:
Time: O(N + M)
Space: O(1)
"""
print('SUBSEQUENCE')


def is_subsequence(str1, str2):
    left = 0
    right = 0

    while right < len(str2):
        if str1[left] == str2[right]:
            left += 1

        if left == len(str1):
            return True

        right += 1
    return False


is_subsequence("hello", "hello world")  # true
is_subsequence("sing", "sting")  # true
is_subsequence("abc", "abracadabra")  # true
is_subsequence("abc", "acb")  # false (order matters)
