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


print(bubble_sort([8, 6, 7, 4, 5, 3, 1, 2]))
