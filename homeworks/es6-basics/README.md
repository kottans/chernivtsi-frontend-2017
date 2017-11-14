# ES6 Basics Homework

You have to implement `UserCart` — an descendant class of `Cart` class and `Item` — a class that reflects the good.
`UserCard` should be able to:

* add items to cart
* remove items from cart
* get items from cart
* change amount of items in cart
* clear cart
* get total cost of items

All test cases should pass without an error.

When task will be solved, upload your solution here, to the folder with your GitHub username.

## Template

```js
// Don't modify
function Cart () {}
Cart.prototype.add = function (item) {
    if (!this.goods) {
        this.goods = [];
    }
    this.goods.push(item);
};

/**
 * You code here
 * Item...
 * UserCart...
 */

// Test
const cart = new UserCart();
cart.add(new Item(1, 'Сhair', 2000));
cart.add(new Item(2, 'Desk', 3000));
cart.add(new Item(3, 'Sofa', 4000));
let amount = cart.amount();
if (amount === 9000) {
    console.log('Add done');
} else {
     console.error('Add error');
}
cart.updateQnt(3, 10);
cart.remove(2);
amount = cart.amount();
if (amount === 42000) {
    console.log('Modify done');
} else {
    console.error('Modify error');
}
cart.clear();
if (cart.getAll().length === 0) {
    console.log('Clear done');
} else {
    console.error('Clear error');
}
```

## How to upload solution

1. **Fork** this repo (click the *fork* button)
2. **Clone** your fork to your working machine (via `git clone`)
3. **Add and commit your solution** to the `homeworks/es6-basics/username` folder*
4. **Push** your changes to your remote fork
5. **Open a pull-request** to our primary repo 

\* — optionaly you can also checkout new branch for the solution
