let number = 100;
// console.log(number);

let newNo = new Number(400);

// console.log(newNo.toString().length); // first newNo converts in string then we use 
                                        //length method to find length of string

let score = 123.4332
let precision = score.toPrecision(4) // it will provide precisize value
// console.log(precision);  //123.4 (string)


let exponential  = newNo.toExponential(); 
// console.log(exponential); // 4e+2

let amount = 10000000;
// console.log(amount.toLocaleString()) // 10,000,000  default format
// console.log(amount.toLocaleString("en-IN")); // 1,00,00,000 indian format

// console.log(score.toFixed(2)); // we can manage the value which come after decimal point
// 123.43

score.valueOf()

// --------------Math----------------------

// console.log(Math);
// console.log(Math.abs(-100)) // it will return positive number as output
// console.log(Math.round(4.3)) // if value is greater then 4.5 output will 5,otherwise 4
// console.log(Math.ceil(4.3)) // it will give only 5 
// console.log(Math.floor(4.6)); // it will give only 4
// let array = [1,232,42,32,31,4,33,32,3,23,434,6768,7,7,656]
// console.log(Math.min(10,232,42,32,31,4,33,32,3,23,434,6768,7,7,656));
// console.log(Math.max(10,232,42,32,31,4,33,32,3,23,434,6768,7,7,656));


let no = Math.round(Math.random()*(20-10+1) + 10);
console.log(no)