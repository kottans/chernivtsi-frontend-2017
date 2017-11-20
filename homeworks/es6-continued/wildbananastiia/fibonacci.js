function* fibonacci(n) {
  let current = firstNumber = nextNumber = 1;

  yield 1;

  while (n) {
    current = nextNumber;
    yield current;
    nextNumber += firstNumber;
    firstNumber = current;
    n--;
  }
}
// console.log first 10 numbers from Fibonacci sequence
for (let i of fibonacci(10)) {
  console.log(i)
}