"use strict";


function *fibonacci(n) {
    let a = 1,
        b = 0,
        c;

    for (let i = 0; i < n; i++) {
        yield c = a + b;
        a = b;
        b = c;
    }
}


// console.log first 10 numbers from Fibonacci sequence
for (let i of fibonacci(10)) {
  console.log(i)
}
