// Naive fibonacci sequence
// Big O: O(2^n) exponential :O

function fib(num) {
    if (num <= 2) {
        return 1;
    }
    return fib(num - 1) + fib(num - 2);
}

// Improved fibonacci sequence
// Big O: O(n)

function fib2(num, cache = {}) {
    if (cache[num] !== undefined) return cache[num];

    if (num <= 2) return 1;

    cache[num] = fib2(num - 1, cache) + fib2(num - 2, cache);
    return cache[num];
}

function fib3(num) {
    if (num <= 2) return 1;
    let table = [0, 1, 1];

    for (let i = 3; i <= num; i++) {
        table[i] = table[i - 1] + table[i - 2];
    }
    return table[num];
}
