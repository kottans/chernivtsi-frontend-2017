class Cart {

    add(item) {
        if (!this.goods) {
            this.goods = [];
        }
        this.goods.push(item);
    }
}

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

    amount() {
        return this.goods.reduce(function(sum, current) {
            return sum + current.price;
        }, 0);
    }

    clear() {
        this.goods = [];
    }

    getAll() {
        return this.goods;
    }

    remove(id) {
        this.goods.forEach(function(item, index, arr) {
            if (item.id == id) {
                arr.splice(index, 1);
            }
        });
    }

    updateQnt(id, quontity) {
        return this.goods.map(function(item) {
            if (item.id === id) {
                item.price *= quontity;
                return item;
            } else {
                return item;
            }
        })
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