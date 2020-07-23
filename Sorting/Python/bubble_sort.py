def bubble_sort(arr):
    for i in range(len(arr) - 1, -1, -1):
        swapped = False
        for j in range(0, i):
            print(arr, arr[j], arr[j + 1])
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
                swapped = True
        print('made a pass')
        if not swapped:
            break
    return arr


def bubble_sort2(arr):
    swapped = True

    while swapped:
        swapped = False
        for i in range(len(arr) - 1):
            if arr[i] > arr[i + 1]:
                arr[i], arr[i + 1] = arr[i + 1], arr[i]
                swapped = True

    return arr
