"use strict";


class Cart {

    add(item) {
        if (!this.goods) {
            this.goods = [];
        }

        this.goods.push(item);
    }
}


class Item {

    constructor(id, name, cost) {
        this.id = id;
        this.name = name;
        this.cost = cost;
    }
}



class UserCart extends Cart {

    amount() {
        let amount = 0;

        if (this.goods) {
            this.goods.forEach(function(element, index, array){
                amount += element.cost;
            });
        }

        return amount;
    }


    updateQnt(id, quantity) {

        let changedItemName = '',
        changedItemCost = 0;

        this.goods.forEach(function(element, index, array){
            if(element.id === id){
                changedItemName = element.name;
                changedItemCost = element.cost;
                array.splice(index, 1);
            }
        });

        for (let i = quantity; i > 0; i--) {
            this.add(new Item(id, changedItemName, changedItemCost));
        }

    }


    remove(id) {
        this.goods.forEach(function(element, index, array){
            if(element.id === id){
                array.splice(index, 1);
            }
        });
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

