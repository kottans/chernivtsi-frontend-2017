function* fibonacci(max_values){
    let l_value = 1;
    let r_value = 1;
    let count = 0;
    while (count < max_values) {  
        let current = r_value;
        r_value = l_value;
        l_value = l_value + current;
        yield current;
        count++;
    }
}

for (let i of fibonacci(10)) {
  console.log(i)
}