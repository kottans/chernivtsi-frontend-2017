// Don't modify
class Cart {
    add(item){
        if (!this.goods) {
            this.goods = [];
        }
        this.goods.push(item);
    }
};

class Item{
        constructor(id, name, amount){
        this.id = id;
        this.name = name;
        this.amount = amount;
    }
}
class UserCart extends Cart{
    amount(){
        let sum = 0;
        this.goods.forEach(item => sum += item.amount);
        return sum;
    }
    updateQnt(id, amount){
        let item = this.goods.filter(item => item.id === id);
        item[0].amount *= amount;
    }
    remove(id){
        this.goods = this.goods.filter(item => item.id !== id);
    }
    clear(){
        this.goods = [];
    }
    getAll(){
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