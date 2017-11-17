// Don't modify
function Cart() { }
Cart.prototype.add = function (item) {
    if (!this.goods) {
        this.goods = [];
    }
    this.goods.push(item);
};

function Item(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
}

function UserCart() {
    Cart.call(this);
}

UserCart.prototype = Object.create(Cart.prototype);

UserCart.prototype.amount = function () {
    const _quantity = [];
    cart.goods.forEach(function (item) { _quantity.push(item.price) });
    return _quantity.reduce(function (_amount, _value) { return _amount + _value })
}

UserCart.prototype.updateQnt = function (itemId, quantity) {
    cart.goods.forEach(function (item) {
        if (item.id == itemId) {
            item.price *= quantity;
        }
    });
}

UserCart.prototype.remove = function (itemId) {
    cart.goods.forEach(function (item, index, _goods) {
        if (item.id == itemId) {
            _goods.splice(itemId - 1, 1)
        }
    });
}

UserCart.prototype.clear = function () {
    return cart.goods = [];
}

UserCart.prototype.getAll = function () {
    return cart.goods;
}

// Test
const cart = new UserCart();
cart.add(new Item(1, 'Chair', 2000));
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