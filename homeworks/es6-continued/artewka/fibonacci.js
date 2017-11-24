function* fibonacci(n) {
    let [f1,f2] =  [1,0];
    for (let i = 0; i < n; i++){
        if (i > 1) {
           f1 +=f2;
           f2 = f1 - f2;
           yield f1;
    }
    else {
     yield 1;
  }
}
}
  // console.log first 10 numbers from Fibonacci sequence
  for (let i of fibonacci(10)) {
    console.log(i)
  }
