function Cart() {}
Cart.prototype.add = function(item) {
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
    constructor() {
        super();
    }

    updateQnt(id, count) {
        var newId = this.goods.length + 1;
        var name = "";
        var price = 0;
        for (var i = 0; i < this.goods.length; i++) {
            if (this.goods[i].id == id) {
                name = this.goods[i].name;
                price = this.goods[i].price;
                break;
            }
        }
        if (name != "") {
            for (var i = 1; i < count; i++) {
                this.add(new Item(newId, name, price));
                newId++;
            }

        }
    }

    amount() {
        var all = 0;
        for (var i = 0; i < this.goods.length; i++)
            all += this.goods[i].price;
        return all;
    }

    remove(id) {
        for (var i = 0; i < this.goods.length; i++)
            if (this.goods[i].id == id)
                this.goods.splice(i, 1);
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