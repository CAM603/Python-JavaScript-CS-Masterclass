# def same(arr1, arr2):
#     print(arr2)
#     for num in arr1:
#         if not num ** 2 in arr2:
#             return False
#         arr2.remove(num ** 2)

#     return True

print('SAME')


def same(arr1, arr2):
    counter1 = {}
    counter2 = {}

    for num in arr1:
        if num not in counter1:
            counter1[num] = 1
        else:
            counter1[num] += 1
    for num in arr2:
        if num not in counter2:
            counter2[num] = 1
        else:
            counter2[num] += 1

    for key in counter1:
        if key ** 2 not in counter2:
            return False
        if counter1[key] is not counter2[key ** 2]:
            return False
    return True


print(same([1, 2, 3, 2], [9, 1, 4, 4]))

# CHALLENGE anagrams
"""
Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman
"""

print('ANAGRAM')


def anagram(s1, s2):
    if len(s1) != len(s2):
        return False

    letters = {}

    for letter in s1:
        if letter not in letters:
            letters[letter] = 1
        else:
            letters[letter] += 1

    for letter in s2:
        if letter not in letters:
            letters[letter] = 1
        else:
            letters[letter] += 1

    for key in letters:
        if letters[key] % 2 != 0:
            return False
    return True


print(anagram("anagram", "nagaram"))

# CHALLENGE: sameFrequency
"""
Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits. The solution must have O(N) time complexity
"""

print("SAME FREQUENCY")


def sameFrequency(n1, n2):
    n1 = str(n1)
    n2 = str(n2)

    nums = {}

    if len(n1) != len(n2):
        return False

    for num in n1:
        if num in nums:
            nums[num] += 1
        else:
            nums[num] = 1

    for num in n2:
        if num in nums:
            nums[num] += 1
        else:
            nums[num] = 1

    for key in nums:
        if nums[key] % 2 != 0:
            return False

    return True


print(sameFrequency(123, 456))
print(sameFrequency(123, 321))
print(sameFrequency(123, 32))

# CHALLENGE: areThereDuplicates
"""
Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in. This can be solved using the frequency counter pattern OR the multiple pointers pattern
"""

print('DUPLICATES')


def areThereDuplicates(*args):
    return len(set(args)) != len(args)


print(areThereDuplicates(1, 2, 2, 3, 4))
