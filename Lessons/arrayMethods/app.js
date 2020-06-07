const numArr = [2, 32, 1234, 54, 323];

let value;

value = numArr.length;

value = Array.isArray(numArr);
value = numArr.indexOf(32);

value = numArr.push(100);
value = numArr.slice(0, 2);
value = numArr.splice(1, 0, 'one', 'two');
//value = numArr.reverse();
value = numArr.concat(numArr);
value = numArr.join('');
value = 'Hello React'.split(' ');

console.log(value, numArr);
