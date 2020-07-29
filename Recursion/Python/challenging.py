"""
Write a recursive function called reverse which accepts a string and returns a new string reversed

reverse('awesome') // 'emosewa'
reverse('rithmschool') // 'loohcsmhtir'
"""


def reverse(string):

    if len(string) == 0:
        return string

    return reverse(string[1:]) + string[0]


def reverse2(string):

    if len(string) == 0:
        return string

    return string[len(string) - 1] + reverse(string[0:-1])


"""
Write a recursive function called is_palindrome which returns true if the string passed in is palindrome (reads the same forward and backward) otherwise return false

is_palindrome('awesome') // false
is_palindrome('foobar') // false
is_palindrome('tacocat') // true
is_palindrome('amanaplanacanalpanama') // true
is_palindrome('amanaplanacanalpandemonium') // false
"""


def is_palindrome(string):
    if len(string) == 0:
        return True
    if string[0] != string[len(string) - 1]:
        return False

    return is_palindrome(string[1:-1])


print(is_palindrome('awesome'))
print(is_palindrome('foobar'))
print(is_palindrome('tacocat'))
print(is_palindrome('amanaplanacanalpanama'))
print(is_palindrome('amanaplanacanalpandemonium'))
"""
Write a recursive function called some_recursive which accepts an array and a callback. The function returns true if a single value in an array returns true when passed to the callback. Otherwise it returns false.

someRecursive([1,2,3,4], isOdd) // true
someRecursive([4,6,8,9], isOdd) // true
someRecursive([4,6,8], isOdd) // false
someRecursive([4,6,8], val => val > 10); // false
"""


def some_recursive():
    pass


"""
Write a function called flatten which accepts an array of arrays and returns a new array with all values flattened

flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
flatten([[1],[2],[3]]) // [1,2,3]
flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]
"""


def flatten():
    pass


"""
Write a function called capitalize_first. Given an array of strings, capitalize the first letter of each string in the array

capitalize_first(["car", "taco", "banana"]) // ["Car", "Taco", "Banana"]
"""


def capitalize_first():
    pass


"""
Write a recursive function called capitalized_words. Given an array of words, return a new array containing each word capitalized

capitalized_words(["i", "am", "learning", "recursion"]) // ["I", "AM", "LEARNING", "RECURSION"]
"""


def capitalized_words():
    pass
