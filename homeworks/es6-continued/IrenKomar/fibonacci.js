function* fibonacci(n) {
    let prev = 1;
    let numb = 0;
    for (var i = 0; i < n; i++){
        numb+=prev;
        prev = numb - prev;
        yield numb;
    }
}

// console.log first 10 numbers from Fibonacci sequence
for (let i of fibonacci(10)) {
    console.log(i)
}