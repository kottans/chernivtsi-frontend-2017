function* fibonacci(n) {
    let i = 1;
    let first = 1;
    let second = 1;
    let output = 1;
    while (i <= n) {
        first = output;
        output = second;
        second = first + output;
        i++;
        yield output;
    }
}

// console.log first 10 numbers from Fibonacci sequence
for (let i of fibonacci(10)) {
    console.log(i)
}