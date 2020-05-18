def addUpTo(n):
    total = 0
    for i in range(n + 1):
        total += i
    return total


print(addUpTo(10))


def addUpTo2(n):
    return (n * (n + 1)) / 2


print(addUpTo2(10))
