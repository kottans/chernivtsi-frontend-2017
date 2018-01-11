function Cart () {}
Cart.prototype.add = function (item) {
            if (!this.goods) {
                this.goods = [];
            }
            this.goods.push(item);
        };

        function Item(_id,_name,_price) {
            this.id = _id;
            this.name = _name;
            this.price = _price;
            this.qnt = 1;
        }

        function UserCart() {
            this.goods = [];
        }

        UserCart.prototype = Object.create(Cart.prototype);

        UserCart.prototype.updateQnt = function(_id,_qnt) {
            this.goods[_id-1].qnt = _qnt;
        }

        UserCart.prototype.amount = function() {
            let amount = 0;
            this.goods.forEach(function(item, i, goods) {
               amount += item.price * item.qnt;
            });
            return amount;
        }

        UserCart.prototype.remove = function(_id) {
            this.goods.forEach(function(item, i, goods) {
               if(item.id == _id) {
                    goods = goods.splice(_id-1, 1);
                    return;
                }
            });
            return false;
        }

        UserCart.prototype.getAll = function() {
            return this.goods;
        }

        UserCart.prototype.clear = function() {
            this.goods = this.goods.splice(0,this.length);
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