class Cart {
    constructor() {
        this.goods = [];
    };
    add(item){
        this.goods.push(item);
    };
    remove(item_index) {
        item_index--;
        if(item_index < 0) item_index = 0;
        this.goods.splice(item_index, 1);
    };
    updateQnt(item_index, new_quantity) {
        item_index--;
        if(item_index < 0) item_index = 0;
        this.goods[item_index].quantity = new_quantity;
    };
    getAll() {
        return this.goods;
    };
    amount() {
        return this.goods.reduce(function(sum, current) {
            return sum + current.quantity*current.price;
        }, 0);
    };
    clear() {
        this.goods = [];
    };
}
class UserCart extends Cart{}

class Item {
    constructor(number, name = 'items', price = 0) {
        this.number = number;
        this.quantity = 1;
        this.name = name;
        this.price = price;
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


function* fibonacci(n) {
  var f = [1,1];
  yield 1;
  yield 1;
  for (let i = 2; i < n; i++) {
    f[2] = f[0] + f[1];
    f[0] = f[1];
    f[1] = f[2];
    yield f[2];
  }
}

// console.log first 10 numbers from Fibonacci sequence
for (let i of fibonacci(10)) {
  console.log(i);
}

const myUrl = 'https://raw.githubusercontent.com/kottans/chernivtsi-frontend-2017/master/homeworks/es6-continued/response.json';

// function for requesting data from the server
function getUrl(url, cb) {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', url, true);
  xhr.send();

  xhr.onreadystatechange = function () {
    if (this.readyState != 4) return;

    if (this.status != 200) {
      return cb(new Error(this.statusText));
    }

    return cb(null, this.responseText);
  }
}

function promisify(func) {
	return function (url) {
		return new Promise(function(resolve, reject) {
			func(url, (err, data) => {
				if (err) return reject(err);
				resolve(data);
			});
		});
    }
}

// example of usage with callback
getUrl(myUrl, (err, data) => {
  if (err) return console.error(err);
  console.log(data);
})

// promisifying getUrl function
const getUrlP = promisify(getUrl);

// example of usage with promise
getUrlP(myUrl)
  .then(data => console.log(data))
  .catch(err => console.error(err));