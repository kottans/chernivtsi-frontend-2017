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


 function Item (id, name, quote) {
    this.id = id;
    this.name = name;
    this.quote = quote;
} 

UserCart.prototype = new Cart ();

function UserCart () {

    // getting total quote/amount
    this.amount = function () {
        var total_quote = 0;
        for (var i = 0; i < this.goods.length; i++) {
            total_quote += this.goods[i].quote;
        }
        return total_quote;
    };

    // updateQnt
    // ???

    // removing some item
    this.remove = function (id) {
        for (var i = 0; i < this.goods.length; i++) {
            // looping through items and identifying id match
            if (this.goods[i].id === id) {
                this.goods.splice(i, 1);
            }
        }
    };

    // clearing goods items
    this.clear = function () {
        this.goods.length = 0;
    };

    // getting all goods items
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

console.log(cart.amount());