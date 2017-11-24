'use strict';


class Cart {
	constructor(){}
	add(item) {
        if (!this.goods) {
            this.goods = [];
        }
        this.goods.push(item);
    };
}


class Item {
	    constructor(_id,_name,_price) {
	    this.id = _id;
	    this.name = _name;
	    this.price = _price;
	    this.qnt = 1;
	}
}

class UserCart extends Cart {
	constructor() {
        super();
        this.goods = [];
    }

     updateQnt(_id,_qnt) {
       	this.goods[_id-1].qnt = _qnt;
    }


    amount() {
    	let amount = 0;
    		this.goods.forEach(function(item, i, goods) {
       		amount += item.price * item.qnt;
    	});
    	return amount;
    }

    remove(_id) {
        this.goods.forEach(function(item, i, goods) {
           if(item.id == _id) {
                goods = goods.splice(_id-1, 1);
                return;
            }
        });
        return false;
    }

    getAll() {
        return this.goods;
    }

    clear() {
        this.goods = this.goods.splice(0,this.length);
    }
}

       
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

