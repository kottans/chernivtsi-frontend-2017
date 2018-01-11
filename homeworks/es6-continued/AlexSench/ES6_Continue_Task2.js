
    function* fibonacci(n) {
        let sum;
        let first = 1;
        let second = 1;
      for (let i = 0; i < n; i++){
               sum = first + second;
               first = second;
               second = sum;
               yield sum;
                
       }


    }
      
      // console.log first 10 numbers from Fibonacci sequence
      for (let i of fibonacci(10)) {
        console.log(i)
      }


