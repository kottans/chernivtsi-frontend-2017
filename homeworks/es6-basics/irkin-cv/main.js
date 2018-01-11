// Don't modify
function Cart () {}
Cart.prototype.add = function (item) {
    if (!this.goods) {
        this.goods = [];
    }
    this.goods.push(item);
};


function Item (count, name, price) {
    this.count = count;
    this.name = name;
    this.price = price;
}

function UserCart () {}
UserCart.prototype = Cart.prototype;

UserCart.prototype.amount = function () {
    var summ = this.goods.reduce(function(sum, current) {
        return sum + current.price;
    }, 0);
    return summ;
}
UserCart.prototype.updateQnt = function (index, qnt) {
    // выбираем из массива все элементы с нужным индексом
    // и делаем из них промежуточный массив
    var new_arr = this.goods.filter(function(item) {
        return item.count == index;
    });
    // выбираем из массива все остальные элементы элементы с НЕ нужным индексом
    // и делаем из них промежуточный массив-2
    var new_arr2 = this.goods.filter(function(item) {
        return item.count != index;
    });

    // сравниваем количество нужного товара в корзине
    // с тем сколько его должно стать
    var diff_qnt = qnt - new_arr.length;

    // если больше 0 значит добавляем в корзину нужный товар
    // и наоборот если меньше - удаляем
    if (diff_qnt > 0) {
        var copies = Object.assign(new_arr[0]);
        var arr_copies = [].fill.call({length: diff_qnt}, copies);
        this.goods.push.apply(this.goods, arr_copies);
    } else {
        new_arr.length = qnt;
        this.goods = new_arr2;
        this.goods.push.apply(this.goods, new_arr);
    }
}

UserCart.prototype.remove = function (index) {
    for (var i = 0; i < this.goods.length; i++) {
        if(this.goods[i].count == index) {
            this.goods.splice(i, 1);
            break;
        }
    }

}
UserCart.prototype.clear = function () {
    this.goods = [];
}
UserCart.prototype.getAll = function () {
    return this.goods;
}



// Test
const cart = new UserCart();
cart.add(new Item(1, 'Chair', 2000));
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
