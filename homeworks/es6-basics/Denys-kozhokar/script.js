"use strict";

    // Don't modify
    function Cart () {}
    Cart.prototype.add = function (item) {
        if (!this.goods) {
            this.goods = [];
        }
        this.goods.push(item);
    };



    function Item(id, name, cost) {
        this.id = id;
        this.name = name;
        this.cost = cost;
    };

    function UserCart() {};

    UserCart.prototype = Object.create(Cart.prototype);

    UserCart.prototype.amount = function () {
        var amount = 0;

        if (this.goods) {
            this.goods.forEach(function(element, index, array){
                amount += element.cost;
            });
        }

        return amount;
    };

    UserCart.prototype.updateQnt = function (id, quantity) {

        var changedItemName = '',
        changedItemCost = 0;

        this.goods.forEach(function(element, index, array){
            if(element.id === id){
                changedItemName = element.name;
                changedItemCost = element.cost;
                array.splice(index, 1);
            }
        });

        for (var i = quantity; i > 0; i--) {
            this.add(new Item(id, changedItemName, changedItemCost));
        }

    }

    UserCart.prototype.remove = function (id) {
        this.goods.forEach(function(element, index, array){
            if(element.id === id){
                array.splice(index, 1);
            }
        });
    }

    UserCart.prototype.clear = function () {
        this.goods = [];
    }

    UserCart.prototype.getAll = function () {
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

