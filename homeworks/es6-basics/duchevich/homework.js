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

function Item(num, product, price){
    this.num = num,
    this.product = product,
    this.price = price,
    this.qnt = 1
}

var cartProto = new Cart;

function UserCart () {
    this.__proto__ = cartProto;

    this.amount = function () {
        var sum = 0;
        this.goods.forEach(function(item, i, goods){
            sum += (item.price * item.qnt);
        });
        return sum;
    };

    this.updateQnt = function (id, qnt) {
        this.goods.forEach(function(item, i, goods){
            if(item.num == id){
                item.qnt = qnt;
            }
        });
    };

    this.remove = function (id) {
        this.goods.forEach(function(item, i, goods){
            if(item.num == id){
                goods.splice(i, 1);
            }
        });
    };

    this.clear = function () {
        this.goods = [];
    };
    this.getAll = function () {
        return this.goods;
    };
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