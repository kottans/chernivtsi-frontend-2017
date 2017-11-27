'use strict';

class Cart {
  add(item) {
    if (!this.goods) {
      this.goods = [];
    }
    this.goods.push(item);
  }
}

class Item {
  constructor(id, name, amount) {
    this.id = id;
    this.name = name;
    this.amount = amount;
  }
}

class UserCart extends Cart {
  amount() {
    return this.goods.reduce((sum, current) => {
      return sum + current.amount;
    }, 0);
  }

  updateQnt(id, amount) {
    for (let i in this.goods) {
      if (this.goods[i].id == id) this.goods[i].amount *= amount;
    }
  }

  remove(id) {
    for (let i in this.goods) {
      if (this.goods[i].id == id) this.goods.splice(i, 1);
    }
  }

  clear() {
    this.goods = [];
  }

  getAll() {
    return this.goods;
  }
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
    console.error('Add error', amount);
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
