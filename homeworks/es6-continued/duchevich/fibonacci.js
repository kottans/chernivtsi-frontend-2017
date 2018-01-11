function* fibonacci(n) {
    let [count, num1, num2, sum] = [0, 1, 1, 0];
    while(count < n){
        if (count > 1){
            sum = num1 + num2;
            [num1, num2] = [num2, sum];
            yield sum;
        }
        else{
            yield 1; 
        }
        count++; 
    }
  }
  
  // console.log first 10 numbers from Fibonacci sequence
  for (let i of fibonacci(10)) {
    console.log(i)
  }