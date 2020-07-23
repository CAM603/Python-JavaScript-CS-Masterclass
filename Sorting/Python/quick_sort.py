def quick_sort(arr, start, end):
    # base case
    if start >= end:
        return arr
    # recursive case
    pivot_index = start
    # for each element in the subarray
    for i in range(start, end):
        if arr[i] < arr[pivot_index]:
            # swap to move smaller elements to the correct index
            # move current element to the right of the pivot
            temp = arr[pivot_index + 1]
            arr[pivot_index + 1] = arr[i]
            arr[i] = temp

            # swap pivot with the element on its right
            temp = arr[pivot_index]
            arr[pivot_index] = arr[pivot_index + 1]
            arr[pivot_index + 1] = temp
            pivot_index += 1
    # conquer
    arr = quick_sort(arr, start, pivot_index)
    arr = quick_sort(arr, pivot_index + 1, end)

    return arr


print(quick_sort([4, 2, 1, 5], 0, 3))
