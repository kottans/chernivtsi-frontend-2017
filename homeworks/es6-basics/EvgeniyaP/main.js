function Cart () {

}
Cart.prototype.add = function (item) {
    if (!this.goods) {
        this.goods = [];
    }
    this.goods.push(item);
};




function Item (idNum, title, price) {
	this.idNum = idNum;
	this.title = title;
	this.price = price;
	this.qnt = 1;
};


function UserCart () {
	this.amount = function () {
		let totalCost = 0;
		this.goods.forEach(function(item) {
			totalCost += (item.price * item.qnt); 
		});
		return totalCost;
	};
	
	this.updateQnt = function(idNum, quantity) {
		this.goods.forEach(function(item) {
			if(item.idNum == idNum) {
				item.qnt = quantity;
			}
		});
	};

	this.remove = function (idNum) {
        this.goods.forEach(function(item, i, goods){
            if(item.idNum == idNum){
                goods.splice(i, 1);
            }
        });
    };

    this.clear = function () {
        this.goods.length = 0;
    };

    this.getAll = function () {
        return this.goods;
    };
};


UserCart.prototype = new Cart();


// test
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