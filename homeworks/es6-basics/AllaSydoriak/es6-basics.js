// Don't modify
function Cart () {}
Cart.prototype.add = function (item) {
    if (!this.goods) {
        this.goods = [];
    }
    this.goods.push(item);
};

// My code)

function Item(id, name, price) {
  this.id = id;
  this.name = name;
  this.price = price;
  this.quontity = 1;
}

function UserCart() {}

UserCart.prototype = Object.create(Cart.prototype);

UserCart.prototype.amount = function () {
  return this.goods.reduce(function(sum, current) {
    return sum + current.price * current.quontity;
  }, 0);
}

UserCart.prototype.clear = function () {
  this.goods = [];
}

UserCart.prototype.getAll = function () {
  return this.goods;
}


UserCart.prototype.remove = function (id) {
     this.goods.forEach(function (item, index, arr) {
         if (item.id == id) {
             arr.splice(index, 1);
         }
     });
 }

UserCart.prototype.updateQnt = function (id, quontity) {
  return this.goods.map(function (item) {
    if (item.id === id){
      item.quontity = quontity;
      return item;
    } else {
      return item;
    }
  })
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
