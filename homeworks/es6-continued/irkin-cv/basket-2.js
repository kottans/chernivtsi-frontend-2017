class Cart {
    add (item) {
        if (!this.goods) {
            this.goods = [];
        }
        this.goods.push(item);
    }
    amount () {
        var summ = this.goods.reduce(function(sum, current) {
        return sum + current.price*current.qnt;
        }, 0);
        return summ;
    }
    updateQnt (index, qnt) {
        this.goods[index-1].qnt = qnt;
    }
    remove (index) {
        this.goods.splice(index-1, 1);
    }
    clear () {
        this.goods = [];
    }
    getAll () {
        return this.goods;
    }
}
class UserCart extends Cart {}

class Item {
    constructor(count, name, price) {
        this.count = count;
        this.name = name;
        this.price = price;
        this.qnt = 1;
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

