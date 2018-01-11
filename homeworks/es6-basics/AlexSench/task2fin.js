// Don't modify
function Cart () {}
Cart.prototype.add = function (item) {
    if (!this.goods) {
        this.goods = [];
    }
    this.goods.push(item);
};

function Item(id,name,price){
return{
    id,
    name,
    price
    }
}
  
  function UserCart() {}
  UserCart.prototype = Cart.prototype;
  UserCart.prototype.amount = function () {
    let amount = 0;
    for(let i in this.goods) {
      amount += this.goods[i].price;
    }
    return amount;
  }
  UserCart.prototype.updateQnt = function (id, changeTo) {
    let item;
    for (let i in this.goods) {
      if (this.goods[i].id == id) {
        let quntity = 1;
        for(let k=id; k< this.goods.length; k++){   
            if(this.goods[k+1].price == this.goods[k].price){
                quntity+=1;
            }
            break;
        }  

            if (quntity < changeTo){
            for (let j = 0; j < changeTo-1; j++){
                this.goods.splice(id,0,this.goods[i]);
            }
        }  
        else{
            for (let j = 0; j < changeTo-1; j++){
                this.goods.splice(id,quntity-changeTo);  
            }
        }
    }
}

  }
  UserCart.prototype.remove = function (id) {
    for (let i in this.goods) {
      if (this.goods[i].id == id) this.goods.splice(i, 1);
    }
  }
  UserCart.prototype.clear = function () {
    this.goods = [];
  }
  UserCart.prototype.getAll = function () {
    return this.goods;
  }
  


/**
 * You code here
 * Item...
 * UserCart...
 */

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
//console.log(cart);
cart.remove(2);
//console.log(cart);
amount = cart.amount();
//console.log(amount);
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