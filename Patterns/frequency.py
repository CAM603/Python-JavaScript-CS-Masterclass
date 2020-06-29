# def same(arr1, arr2):
#     print(arr2)
#     for num in arr1:
#         if not num ** 2 in arr2:
#             return False
#         arr2.remove(num ** 2)

#     return True


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

# ANAGRAMS
# Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman
