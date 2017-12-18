function* fibonacci(n) {
  let [value_1, value_2, sum, count] = [0, 1, 0, 0];
  if(n > count){
    for(let i = 0; i<n; i++){
        if(i == 0){
            sum = 0;
        }
        else if(i == 1){
            sum = 1;
        }
        else{
            sum = value_1 + value_2; 
            value_1 = value_2; 
            value_2 = sum;
        }
        yield sum
    }
  }
  else{
    yield 1
  }
}

// console.log first 10 numbers from Fibonacci sequence
for (let i of fibonacci(10)) {
  console.log(i)
}