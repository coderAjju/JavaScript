/*
question :-> What is variable ?
ans :-> Variable is just like a container that use to hold some value 
        such as :- let , var and const; 
        const value can not be redeclared and let , var can be declared.
*/

const accountId  = 123;
let holderName = "Ajay";
var holderCity = "Gorakhpur";
ammountOfHolder = 100000;

/*
accountId = 23;  // not allowed
const variables can not be redeclared.This will cause an error
*/

console.log(accountId)

//using table method with console we can print all variables in table

console.table([accountId, holderName, holderCity, ammountOfHolder])