function Cart() {}

Cart.prototype.add = function(item) {
    if (!this.goods) {
        this.goods = [];
    }
    this.goods.push(item);
};

function UserCart() {};

UserCart.prototype = Cart.prototype;

UserCart.prototype.amount = function() {
    let totalCost = 0;
    this.goods.forEach(function(item) {
        totalCost += item.price;
    });
    return totalCost;
};

UserCart.prototype.updateQnt = function(idNum, qnt) {
    this.goods.forEach(function(item) {
        if (item.idNum === idNum) {
            item.price *= qnt;
        }
    });
};

UserCart.prototype.remove = function(idNum) {
    this.goods.forEach(function(item, i, goods) {
        if (item.idNum === idNum) {
            goods.splice(i, 1);
        }
    });
};

UserCart.prototype.clear = function() {
    this.goods.length = 0;
};

UserCart.prototype.getAll = function() {
    return this.goods;
};

function Item(idNum, title, price) {
    this.idNum = idNum;
    this.title = title;
    this.price = price;
};

// test
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