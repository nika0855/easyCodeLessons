let car = {
  name: 'Lexus',
  age: 10,
  lastService: '1 month',
  create: 2008,
  needRepair: false,
};
car.lastService = '6 month'
num =  parseInt(car.lastService);
console.log('car.lastService: ', num);

// if(num > 5) {
//   car.needRepair= true;
// } else {
//   car.needRepair= false;
// }
num > 5 ? car.needRepair= true :car.needRepair= false;
console.log('needRepair: ', car.needRepair);

let product = {
  name: 'apple',
  price: '10$'
}

let min = 10;
let max = 20;

if(parseInt(product.price) >= min && parseInt(product.price) <= max ) {
  console.log(product.name);
}else {
  console.log('product not found');
}

let str = 'JavaScript is a pretty good language';
 let arr = '';
 

for(let i = 0; i < str.length; i++) {
  arr += (str[i - 1] === ' ') ? str[i].toUpperCase() : str[i];
}
console.log(arr);
 arr = arr.split(' ').join('');
console.log(arr);