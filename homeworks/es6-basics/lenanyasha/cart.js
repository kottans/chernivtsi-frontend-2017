function Cart () {}
Cart.prototype.add = function (item) {
    if (!this.goods) {
        this.goods = [];
    }
    this.goods.push(item);
};

function UserCart () {
}

UserCart.prototype = Cart.prototype;

UserCart.prototype.amount = function() {
    return this.goods.reduce(function(sum, current) {
        return sum + current.price;
    }, 0);
}

UserCart.prototype.remove = function(id) {
    this.goods = this.goods.filter(function (item) {
        return item.id !== id;
    })
}


// LOOK AT THIS shitcode, but it's working for every case,
//that I can provide for
//let me explain smth what I have done
UserCart.prototype.updateQnt = function(id, qnt) {	
	let curQnt = 0;           						 	
	let diff = 0;
	var item;
	for(let i = 0; i < this.goods.length; i++) {	//find item by id to change it's quantity
		if (this.goods[i].id == id) {				
			item = this.goods[i];					//put the chosen item in variable to marker/save its value
			curQnt++;								//count current qnt of items with the same id/name/price in array 
		}	
	}
	diff = Math.abs(qnt - curQnt);					
	if(curQnt <= qnt) {								//case 1: increase in the qnt of chosen item
		for(let j = 0; j < diff; j++) {				//push missing qnt
			this.goods.push(item);
		}
	} else {										//case 2: reduction in the qnt os item
		for(k = 0; k < this.goods.length; k++) {
			if(this.goods[k].id == id) {			//search  by id chosen item
				this.goods.splice(k, 1);			//delete firt founded item in array
				curQnt--;							//reduce current qnt counter
				if(curQnt == qnt) break;			//when the qnt became the required interrupt cycle
			}
		}
	}

 }

UserCart.prototype.getAll = function() {
    return this.goods;
}

UserCart.prototype.clear = function() {
    this.goods = [];
}

function Item (id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
}
// Test
const cart = new UserCart();
cart.add(new Item(1, 'Сhair', 2000));
cart.add(new Item(2, 'Desk', 3000));
cart.add(new Item(3, 'Sofa', 4000));
console.log(cart.goods);
let amount = cart.amount();
console.log(amount);
if (amount === 9000) {
    console.log('Add done');
} else {
     console.error('Add error');
}

cart.updateQnt(3, 2);
cart.add(new Item(1, 'Сhair', 2000));
cart.add(new Item(1, 'Сhair', 2000));   //longlong test to mahe sure that 
cart.add(new Item(1, 'Сhair', 2000));	//method 'updateQnt' works correctly in many cases
cart.updateQnt(3, 6);
cart.add(new Item(1, 'Сhair', 2000));
cart.add(new Item(1, 'Сhair', 2000));
cart.updateQnt(3, 6);
cart.remove(2);
cart.add(new Item(2, 'Desk', 3000));
cart.add(new Item(2, 'Desk', 3000));
cart.add(new Item(2, 'Desk', 3000));
cart.updateQnt(3, 3);	

amount = cart.amount();
console.log(amount);
if (amount === 33000) {
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