// Don't modify
class Cart {
    add (item) {
        if (!this.goods) {
            this.goods = [];
        }
        this.goods.push(item);
    }
}

/**
 * You code here
 * Item...
 * UserCart...
 */

class Item {
    constructor (...product){
        this.product = product,
        this.qnt = 1
    }
    
}

class UserCart extends Cart{
   amount () {
        var sum = 0;
        this.goods.forEach(function(item, i, goods){
            sum += (item.product[2] * item.qnt);
        });
        return sum;
    };
   updateQnt (id, qnt) {
        this.goods.forEach(function(item, i, goods){
            if(item.product[0] == id){
                item.qnt = qnt;
            }
        });
    };
    
    remove (id) {
        this.goods.forEach(function(item, i, goods){
            if(item.product[0] == id){
                goods.splice(i, 1);
            }
        });
    };
    
    clear () {
        this.goods = [];
    };
    getAll () {
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