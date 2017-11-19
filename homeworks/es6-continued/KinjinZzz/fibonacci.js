function* fibonacci(n) {
    let  [num1, num2] = [1, 1];
    for(let i=0; i<n; i++){
        if (i > 1){
            let sum = num1 + num2;
            [num1, num2] = [num2, sum];
            yield sum;
        }
        else{
            yield 1; 
        }
    }
}
// console.log first 10 numbers from Fibonacci sequence
for (let i of fibonacci(10)) {
    console.log(i)
}