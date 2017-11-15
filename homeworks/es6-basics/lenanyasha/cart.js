function Cart () {}
Cart.prototype.add = function (item) {
    if (!this.goods) {
        this.goods = [];
    }
    this.goods.push(item);
};

function UserCart () {
}

UserCart.prototype = Object.create(Cart.prototype);

UserCart.prototype.amount = function() {
    return this.goods.reduce(function(sum, current) {
        return sum + current.price * current.qnt;
    }, 0);
}

UserCart.prototype.remove = function(id) {
    this.goods = this.goods.filter(function (item) {
        return item.id !== id;
    })
}

UserCart.prototype.updateQnt = function(id, qnt) {
    this.goods = this.goods.map(function(item) {
        if(item.id === id) {
            return Object.assign({}, item, { qnt });
        } else {
            return item;
        }
    })
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
    this.qnt = 1;
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