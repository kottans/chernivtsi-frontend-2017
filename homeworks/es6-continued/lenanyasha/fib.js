function* fibonacci(n) {
	let a = 1;
	let b = 1;
	let i = 2;

	yield a;
	yield b;

	while(i < n) {
		i++;
		let c = a + b;
		yield c;
		a = b;
		b = c;
	}
}

for (let i of fibonacci(10)) {
  console.log(i)
}