"""
Write a function that takes a string as input. The string can contain four types of brackets "[]", "()", "{}" and "||". The function should return a boolean indicating if the string is balanced. Pipes brackets use the same character to indicate opening and closing. 

A string is considered balanced if it has as many opening brackets of a given type as it has as closing brackets of the same type. No bracket can be left unmatched if the string is considered to be balanced. A closing bracket also cannot match a corresponding opening bracket that comes after it. Brackets also cannot overlap each other, i.e., "[(])"

Examples:
"[(])" -> false
"foo(bar)baz" -> true
"{{||[]||}}" -> true
"Lots of words and no brackets" -> true
"I (wa)n{t to buy a on}sie[...] b(u{[t] kno}w it) won't suit me" -> true
"Another (rand[om sentence that |makes| no sense]" -> false
"""


def balancedStr(string):
    opening = ["[", "{", "(", "|"]
    closing = ["]", "}", ")", "|"]
    ref = {"[": "]", "(": ")", "{": "}", "|": "|"}
    stack = []
    balanced = True

    for char in string:
        if char in opening:
            stack.append(char)
        elif char in closing:
            if len(stack) == 0:
                balanced = False
            else:
                match = stack.pop()
                # pop until match is not a pipe
                if match == "|":
                    while match == "|":
                        match = stack.pop()
                # check it's matching bracket
                if ref[match] != char:
                    balanced = False
        else:
            continue

    if len(stack) == 0 and balanced:
        return True
    else:
        return False


def balancedStr2(string):
    opening = ["[", "{", "(", "|"]
    closing = ["]", "}", ")", "|"]
    ref = {"[": "]", "(": ")", "{": "}", "|": "|"}
    stack = []
    balanced = True
    pipe_count = 0

    for char in string:
        if char in opening:
            if char == '|' and pipe_count % 2 == 0:
                pipe_count += 1
            elif char == '|' and pipe_count % 2 != 0:
                if len(stack) == 0:
                    balanced = False
                    continue
                else:
                    match = stack.pop()
                    if match != "|":
                        balanced = False
                    pipe_count += 1
                    continue
            stack.append(char)
        elif char in closing:
            if len(stack) == 0:
                balanced = False
            else:
                match = stack.pop()

                if ref[match] != char:
                    balanced = False
        else:
            continue
    if len(stack) == 0 and balanced:
        return True
    else:
        return False


print(balancedStr("[(])"), balancedStr2("[(])"))
print(balancedStr(")"), balancedStr2(")"))
print(balancedStr("foo(bar)baz"), balancedStr2("foo(bar)baz"))
print(balancedStr("{{||[]||}}"), balancedStr2("{{||[]||}}"))
print(balancedStr("Lots of words and no brackets"),
      balancedStr2("Lots of words and no brackets"))
print(balancedStr("a|"), balancedStr2("a|"))
print(balancedStr("|||"), balancedStr2("|||"))
print(balancedStr("a||"), balancedStr2("a||"))
print(balancedStr("||||"), balancedStr2("||||"))
