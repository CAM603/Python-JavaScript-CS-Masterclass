// Number of operations is (eventually) bounded by a multiple of n (like 10n)
// O(n)
function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}
// Always 3 operators
// O(1)
function addUpTo2(n) {
  return (n * (n + 1)) / 2;
}
// Time elapsed was 2.27 seconds
let t1 = performance.now();
console.log(addUpTo(1000000000));
let t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds`);

// Time elapsed was 0.00012
let t3 = performance.now();
console.log(addUpTo2(1000000000));
let t4 = performance.now();
console.log(`Time Elapsed: ${(t4 - t3) / 1000} seconds`);
