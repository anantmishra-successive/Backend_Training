const sum = require('lodash/sum');
const subtract = require('lodash/subtract');
const multiply = require('lodash/multiply');
const divide = require('lodash/divide');

let a = 5;
let b = 6;

let c = sum([a,b]);
let d = subtract(a,b);
let e = multiply(a,b)
let f = divide(a,b)
console.log(c);
console.log(d);
console.log(e);
console.log(f.toFixed(2));


module.exports = {sum,subtract,multiply,divide};