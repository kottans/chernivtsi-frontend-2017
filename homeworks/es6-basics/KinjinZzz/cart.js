// Don't modify
function Cart () {}
Cart.prototype.add = function (item) {
    if (!this.goods) {
        this.goods = [];
    }
    this.goods.push(item);
};

function Item(id, name, amount){
    this.id = id;
    this.name = name;
    this.amount = amount;
}
function UserCart(){}
UserCart.prototype = new Cart();
UserCart.prototype.amount = function(){
    let sum = 0;
    this.goods.forEach(item => sum += item.amount);
    return sum;
}
UserCart.prototype.updateQnt = function(id, amount){
    item = this.goods.filter(item => item.id === id);
    item[0].amount *= amount;
}
UserCart.prototype.remove = function(id){
    this.goods = this.goods.filter(item => item.id !== id);
}
UserCart.prototype.clear = function(){
    this.goods = [];
}
UserCart.prototype.getAll = function(){
    return this.goods;
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