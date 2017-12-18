

class Cart{
        add(item) {
            if (!this.goods){
                this.goods = [];
            }
            this.goods.push(item);
        }
    };

class Item{

        constructor(id,name,price){
            return {
                id,
                name,
                price
            };
        }
};

class UserCart extends Cart{

    amount(){
        let amount = 0;
        for(let i in this.goods) {
            amount += this.goods[i].price;
            }
             return amount;
        }
   
    updateQnt(id, changeTo){            
        let item;
        for (let i in this.goods) {
            if (this.goods[i].id == id) {
            let quntity = 1;
                for(let k=id; k< this.goods.length; k++){   
                    if(this.goods[k+1].name == this.goods[k].name){
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

    remove(id){
        for (let i in this.goods) {
            if (this.goods[i].id == id) 
             this.goods.splice(i, 1);
        }          
    }
    
    clear() {
    this.goods = [];
    }

    getAll() {
    return this.goods;
    }

};
 
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