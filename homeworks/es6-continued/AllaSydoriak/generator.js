function* fibonacci(n) {
    var arr = new Array(n);
    yield arr[0] = 1;
    yield arr[1] = 1;
    for (let i = 2; i < n; i++) {
        yield arr[i] = arr[i - 1] + arr[i - 2];
    }
}

// console.log first 10 numbers from Fibonacci sequence
for (let i of fibonacci(10)) {
    console.log(i);
}