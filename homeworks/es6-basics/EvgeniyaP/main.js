//don't modify
function Cart() {}

Cart.prototype.add = function(item) {
    if (!this.goods) {
        this.goods = [];
    }
    this.goods.push(item);
};



//my code
function UserCart() {};

UserCart.prototype = Cart.prototype;

UserCart.prototype.amount = function() {
    let totalCost = 0;
    this.goods.forEach(function(item) {
        totalCost += item.price;
    });
    return totalCost;
};


UserCart.prototype.updateQnt = function(idNum, qnt) {

    //get the quantity of specific product
    let getQnt = function(idNum, goods) {
        let count = 0;
        for (let item in goods) {
            if (goods[item].idNum === idNum) {
                count++;
            };
        };
        return count;
    };

    //get first object's index with the given ID
    let getObjIndex = function(idNum, goods) {
        for (let index in goods) {
            if (goods[index].idNum === idNum) {
                return index;
            };
        };
    };

    //get difference between the required quantity of goods and the current
    let diff = qnt - getQnt(idNum, this.goods);
    if (diff > 0) {
        for (let i = 0; i < diff; i++) {
            this.goods.push(Object.assign({}, this.goods[getObjIndex(idNum, this.goods)]))
        };

    } else {
        for (let i = 0; i < -diff; i++) {
            this.goods.splice(getObjIndex(idNum, this.goods), 1);
        };
    };
};


UserCart.prototype.remove = function(idNum) {
    this.goods.forEach(function(item, i, goods) {
        if (item.idNum === idNum) {
            goods.splice(i, 1);
        }
    });
};

UserCart.prototype.clear = function() {
    this.goods.length = 0;
};

UserCart.prototype.getAll = function() {
    return this.goods;
};

function Item(idNum, title, price) {
    this.idNum = idNum;
    this.title = title;
    this.price = price;
};


// test --> don't modify
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