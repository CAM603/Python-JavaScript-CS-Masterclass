function linearSearch(arr, val) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === val) return i;
    }
    return -1;
}

linearSearch([1, 3, 2, 5, 4, 6, 7], 6); // 5
