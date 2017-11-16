// Don't modify
function Cart () {}
Cart.prototype.add = function (item) {
    if (!this.goods) {
        this.goods = [];
    }
    this.goods.push(item);
};


function Item (count, name, price) {
    this.count = count;
    this.name = name;
    this.price = price;
    this.qnt = 1;
}

function UserCart () {}
UserCart.prototype = new Cart();

UserCart.prototype.amount = function () {
    var summ = this.goods.reduce(function(sum, current) {
        return sum + current.price*current.qnt;
    }, 0);
    return summ;
}
UserCart.prototype.updateQnt = function (index, qnt) {
    this.goods[index-1].qnt = qnt;
}
UserCart.prototype.remove = function (index) {
    this.goods.splice(index-1, 1);
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
    console.error('Modify error');
}
cart.clear();
if (cart.getAll().length === 0) {
    console.log('Clear done');
} else {
    console.error('Clear error');
}
