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

function Item (number, name = 'items', price = 0) {
    this.number = number;
    this.quantity = 1;
    this.name = name;
    this.price = price;
};

function UserCart () {}
UserCart.prototype = Cart.prototype;

UserCart.prototype.remove = function (item_index) {
    item_index--;
    if(item_index < 0) item_index = 0;
    this.goods.splice(item_index, 1);
};
UserCart.prototype.updateQnt = function (item_index, new_quantity) {
    item_index--;
    if(item_index < 0) item_index = 0;
    this.goods[item_index].quantity = new_quantity;
};
UserCart.prototype.getAll = function() {
    return this.goods;
};
UserCart.prototype.amount = function() {
    return this.goods.reduce(function(sum, current) {
        return sum + current.quantity*current.price;
    }, 0);
};
UserCart.prototype.clear = function() {
    this.goods = [];
};


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
