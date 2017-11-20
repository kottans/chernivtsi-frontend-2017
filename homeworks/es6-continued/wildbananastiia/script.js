// Don't modify
function Cart() { }
Cart.prototype.add = function (item) {
    if (!this.goods) {
        this.goods = [];
    }
    this.goods.push(item);
};

class Item {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

class UserCart extends Cart {
    amount() {
        return cart.goods.map(item => item.price).reduce((prev, next) => prev + next);
    }
    updateQnt(itemId, quantity) {
        cart.goods.forEach(item => {
            if (item.id == itemId) {
                item.price *= quantity;
            }
        });
    }
    remove(itemId) {
        cart.goods.forEach((item, index, _goods) => {
            if (item.id == itemId) {
                _goods.splice(itemId - 1, 1)
            }
        });
    }
    clear() {
        return cart.goods = [];
    }
    getAll() {
        return cart.goods;
    }
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