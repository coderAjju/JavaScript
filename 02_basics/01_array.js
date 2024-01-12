let array = [1,2,3,4,5,6] // this is a simple array declaration
// console.log(array)

let newArray = new Array(4,3,56,4,3) 
console.log(newArray);

//-------pop---and---push---------
// console.log(newArray.pop()); // use to extract element from last
// newArray.push(100); // use to add element from last
// console.log(newArray)

//-------unshift---and---shift---------
// newArray.unshift(2);   // use to add element in array from front
// console.log(newArray.shift()); // use to extract element in array from front
// console.log(newArray);

//-------slice---and---splice----------
// console.log(newArray.slice(1,3)); // it is used to extract elements from array but will not change actual array
// console.log(newArray)
// console.log(newArray.splice(1,3));//it is also used to extract elements from array but it will change actual array
// console.log(newArray);

//--------includes---and---indexof---------
// console.log(newArray.includes(5)); // it is used to check the elements are present in array or not.it will give boolean value
// console.log(newArray.indexOf(56)); // it will give index number of element which present in array.if the element is not present in array then it will five (-1)

console.log(newArray.join()) // it is used convert array to string with separated symbol.By default it will use comma(,) to separate elements in array.
