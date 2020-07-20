def selection_sort(arr):
    for i in range(len(arr) - 1):
        smallest = i
        for j in range(i + 1, len(arr)):
            if arr[j] < arr[smallest]:
                smallest = j
        if i != smallest:
            arr[i], arr[smallest] = arr[smallest], arr[i]

    return arr


print(selection_sort([4, 1, 3, 2]))
print(selection_sort([1, 5, 8, 4, 2, 9, 6, 0, 3, 7]))
