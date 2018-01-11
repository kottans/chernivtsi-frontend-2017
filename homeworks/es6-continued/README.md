# ES6 Continued

In this homework you have 3 tasks: `UserCart` class, Fibonacci generator and `promisify` function.

## Task 1: `UserCart` class

Remember your `UserCart` implementation from [previous task](../es6-basics/README.md)?
In this task you need to rewrite this code with ES6 classes.

## Task 2: Fibonacci generator

In case you don't know about **Fibonacci numbers**, here's the definition:

> In mathematics, the **Fibonacci numbers** are the numbers in the following integer sequence, called the **Fibonacci sequence**, and characterized by the fact that every number after the first two is the sum of the two preceding ones:
>
> 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, …
> 
> — [Fibonacci number](https://en.wikipedia.org/wiki/Fibonacci_number) on Wikipedia

Here's a siple algorithm for Fibonacci sequence:

> The sequence Fn of Fibonacci numbers is defined by the recurrence relation:
>
> ![image](https://user-images.githubusercontent.com/3459374/32888786-22c5b30c-cad1-11e7-8825-b8d5cd234e6d.png)
>
> with seed values
>
> ![image](https://user-images.githubusercontent.com/3459374/32888808-34fb7854-cad1-11e7-88c6-a64e0cc752e3.png)

In this task you need to implement a Fibonacci sequence generator, using ES6 generators. Don't forget to let your generator know about how mamy Fibonacci numbers you want, otherwise you're going to get an infinite loop.

You may use this template:

```js
function* fibonacci(n) {
  // your code here
}

// console.log first 10 numbers from Fibonacci sequence
for (let i of fibonacci(10)) {
  console.log(i)
}
```

## Task 3: `promisify`

> This task is optional, for those who want to learn more

Try to implement your own [`promisify` function](http://2ality.com/2017/05/util-promisify.html). Boilerplate:

```js
const myUrl = 'https://raw.githubusercontent.com/kottans/chernivtsi-frontend-2017/master/homeworks/es6-continued/response.json';

// function for requesting data from the server
function getUrl(url, cb) {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', url, true);
  xhr.send();

  xhr.onreadystatechange = function () {
    if (this.readyState != 4) return;

    if (this.status != 200) {
      return cb(new Error(this.statusText));
    }

    return cb(null, this.responseText);
  }
}

function promisify(func) {
  // your code here
}

// example of usage with callback
getUrl(myUrl, (err, data) => {
  if (err) return console.error(err);
  console.log(data);
})

// promisifying getUrl function
const = getUrlP = promisify(getUrl);

// example of usage with promise
getUrlP(myUrl)
  .then(data => console.log(data))
  .catch(err => console.error(err));
```

## How to upload solutions

1. **Fork** this repo (click the *fork* button)
2. **Clone** your fork to your working machine (via `git clone`)
3. **Add and commit your solution** to the `homeworks/es6-continued/username` folder*
4. **Push** your changes to your remote fork
5. **Open a pull-request** to our primary repo 

\* — optionaly you can also checkout new branch for the solution
