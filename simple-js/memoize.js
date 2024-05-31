const cache = new Map();

function fib(n) {
  const cachedValue = cache.get(n);
  if (cachedValue) {
    console.log('cache hit');
    return cachedValue;
  }
  if (n === 1) return 1;
  if (n === 2) return 2;
  console.log('cache miss');
  const result = fib(n - 1) + fib(n - 2);
  cache.set(n, result);
  return result;
}

function fib(n) {
  if (n === 1) return 1;
  if (n === 2) return 2;
  const result = fib(n - 1) + fib(n - 2);
  return result;
}

function measureFib(n) {
  const start = performance.now();
  console.log(fib(n));
  const end = performance.now();
  console.log(end - start);
}