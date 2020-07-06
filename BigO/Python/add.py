import time

# Number of operations is (eventually) bounded by a multiple of n (like 10n)
# O(n)


def addUpTo(n):
    total = 0
    for i in range(n + 1):
        total += i
    return total

# Always 3 operators
# O(1)


def addUpTo2(n):
    return (n * (n + 1)) / 2


t1 = time.time()
addUpTo(1000000000)
t2 = time.time()
print(f'Time elapsed: {t2 - t1} seconds')  # 57-58 seconds

t3 = time.time()
addUpTo2(1000000000)
t4 = time.time()
print(f'Time elapsed: {t4 - t3} seconds')  # 1.19 seconds

# def recurse(list, target):
#     # base case is empty list
#     if len(list) == 0:
#         return False
#     elif list[0] == target:
#         return True
#     else:
#         return recurse(list[1:], target)

# my_list = [2, 4, 5, 3]
