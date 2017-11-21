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

function Item (id, name, amount) {
    this.id = id;
    this.name = name;
    this.amount = amount;
}

function UserCart () {}

    // linking prototypes
UserCart.prototype = Cart.prototype;

    // getting total quote/amount
UserCart.prototype.amount = function () {
    var total_amount = 0;
    this.goods.forEach(function (item) {
        total_amount += item.amount;
    });
    return total_amount;
};

    // updating quantity
UserCart.prototype.updateQnt = function (id, amount) {
    item = this.goods.filter(function (item) {
        return item.id === id;});
    item[0].amount *= amount;
};

    // removing some item
UserCart.prototype.remove = function (id) {
    this.goods.forEach(function(item, i, goods){
        if(this.goods[i].id === id){
            goods.splice(i, 1);}
    });
};

UserCart.prototype.remove = function(id){
    this.goods = this.goods.filter(item => item.id !== id);
};

    // clearing goods items
UserCart.prototype.clear = function () {
    this.goods.length = 0;
};

    // getting all goods items
UserCart.prototype.getAll = function () {
    return this.goods;
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

console.log(cart.amount());