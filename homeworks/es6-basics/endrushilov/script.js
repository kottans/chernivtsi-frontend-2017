// Don't modify
function Cart () {}
Cart.prototype.add = function (item) {
    if (!this.goods) {
        this.goods = [];
    }
    this.goods.push(item);
};

//My Code
function UserCart() {
    this.amount = function(){ 
        var amount = 0;
        for(var i = 0; i < this.goods.length; i++){             
            amount += this.goods[i].price;
        }        
        return amount   
    };
    this.updateQnt = function(id_number, count){  
        for(var i = 0; i < this.goods.length; i++){             
            if(this.goods[i].id == id_number){
                var this_elem = this.goods[i];
            }    
        }
        for(var j = 1; j < count; j++){
            this.goods.push(this_elem); 
        }
    };
    this.remove = function(id_remove){
        for(var i = 0; i < this.goods.length; i++){             
            if(this.goods[i].id == id_remove){ 
                this.goods.splice(i, 1);                   
            }    
        }
    }; 
    this.clear = function(){ 
        this.goods.splice(0, this.goods.length); 
    };
    this.getAll = function(){
        return this.goods
    }; 
}; 
function Item(id, name, price) {
    this.id = id,
    this.name = name,
    this.price = price
};

Item.prototype = new  UserCart();
UserCart.prototype = new Cart();
//My Code end


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