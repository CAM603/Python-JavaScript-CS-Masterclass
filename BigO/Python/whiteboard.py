my_list = ['Bob', 'Slack', ['reddit', '89', 101, [
    'alacritty', '(brackets)', 5, 375]], 0, ['{slice, owned}'], 22]


def print_them(a_list):
    for i in a_list:
        if type(i) == list:
            print_them(i)
        else:
            print(i)


print_them(my_list)


def find_max(items):
    # TODO: base case: last item found? return it
    if len(items) == 1:
        return items[0]
# TODO: otherwise get the first item and call the function
# again to operate on the rest of the list
    value1 = items[0]
    print("Value 1:", value1)
    value2 = find_max(items[1:])
    print("Value 2:", value2)
# TODO: perform the comparison when we're down to just two
    if value1 > value2:
        return value1
    else:
        return value2


# test the function
print(find_max(items))
