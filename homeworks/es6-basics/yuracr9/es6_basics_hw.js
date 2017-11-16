// Don't modify
function Cart () {}
Cart.prototype.add = function (item) {
  if (!this.goods) {
    this.goods = [];
  }
  this.goods.push(item);
};

// My code
function Item(id, name, amount) {
  this.id = id;
  this.name = name;
  this.amount = amount;
}

function UserCart() {}
UserCart.prototype = Cart.prototype;
UserCart.prototype.amount = function () {
  let sum = 0;
  for(let i in this.goods) {
    sum += this.goods[i].amount;
  }
  return sum;
}
UserCart.prototype.updateQnt = function (id, amount) {
  let item;
  for (let i in this.goods) {
    if (this.goods[i].id == id) this.goods[i].amount *= amount;
  }
}
UserCart.prototype.remove = function (id) {
  for (let i in this.goods) {
    if (this.goods[i].id == id) this.goods.splice(i, 1);
  }
}
UserCart.prototype.clear = function () {
  this.goods = [];
}
UserCart.prototype.getAll = function () {
  return this.goods;
}

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
   console.error('Modify error', amount);
}
cart.clear();
if (cart.getAll().length === 0) {
   console.log('Clear done');
} else {
   console.error('Clear error');
}
