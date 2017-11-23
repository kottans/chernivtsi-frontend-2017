function*  fibonacci(n) {
    var f1 = 1;
    var f2 = 1;
    var res = 0;

    yield 1;
    yield 1;

    for (let i = 2; i < n; i++) {
        res = f1 + f2;
        f1 = f2;
        f2 = res;

        yield res;
    }
}

for (let i of fibonacci(10)) {
  console.log(i)
}
