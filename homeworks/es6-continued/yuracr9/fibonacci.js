function* fibonacci(n) {
  let [a, b] = [1, 1];

  for (let i = 0; i < n; i++) {
    if (i > 1) {
      [a, b] = [b, a + b];
      yield b;
    } else yield a;
  }

}

for (let i of fibonacci(10)) {
  console.log(i)
}
