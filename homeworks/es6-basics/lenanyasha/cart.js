function Cart () {}

Cart.prototype.add = function(item) {
  if (!this.goods) {
    this.goods = [];
  }
  this.goods.push(item);
};

function UserCart () {}

UserCart.prototype = Cart.prototype;

UserCart.prototype.amount = function() {
  return this.goods.reduce((sum, { price }) => sum + price, 0);
}

UserCart.prototype.remove = function(id) {
  this.goods = this.goods.filter(item => item.id !== id);
}

UserCart.prototype.updateQnt = function(id, qnt) {
  const items = this.goods.filter(good => good.id === id);
  const item = items[0];
  let curQnt = items.length;

  const diff = Math.abs(qnt - curQnt);
  if (curQnt <= qnt) {
    this.goods = [
      ...this.goods,
      ...Array(diff).fill(item)
    ];
  } else {
    this.goods = this.goods.reduce((acc, good) => {
      if ((good.id === id) && (curQnt !== qnt)) {
        curQnt--;
        return acc;
      } else {
        return [...acc, good];
      }
    }, [])
  }
}

UserCart.prototype.getAll = function() {
  return this.goods;
}

UserCart.prototype.clear = function() {
  this.goods = [];
}

function Item (id, name, price) {
  this.id = id;
  this.name = name;
  this.price = price;
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
    console.error('Modify error');
}
cart.clear();
if (cart.getAll().length === 0) {
    console.log('Clear done');
} else {
    console.error('Clear error');
}