function bubbleSort(arr) {
    let swapped;
    for (let i = arr.length; i > 0; i--) {
        swapped = false;
        for (let j = 0; j < i - 1; j++) {
            console.log(arr, arr[j], arr[j + 1]);
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true;
            }
        }
        console.log("A pass has completed");
        if (!swapped) break;
    }

    return arr;
}

bubbleSort([8, 6, 7, 4, 5, 3, 1, 2]);
