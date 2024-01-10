/*
question :-> What is datatype ?
ans :-> Datatype define the variable type.Suppose
*/
let holderName = "ajay"
/*
        So here the type of name is String.
*/

//JavaScript provide datatype which identify the type of variable in program.

/*In javascript datatype categories in two type.
    1) :-> Primitive 
    2) :-> Non-primitive

    There are seven primitive datatype variable exist in js.
    1. Number  => 2 to power 53
    2. Bigint  // it is used to hold big number
    3. String  => ""
    4. Boolean => true/false
    5. Symbol  => Mostly used in react for uniqueness
    6. Null  // Basically 'null' is not any datatype it is a standolone value but it is 
             // consider as a datatype. when you check the type of it using 
             // typeof operator then you will get object. 
    7. Undefined

    Object,array,function is the non-primitive datatype.
*/  

let number  = 123;
let string = "coderAjju";
let bigint = BigInt("643");
let nullIsValue = null;
let boolean = true;  //or false
let symbol = Symbol('newsymbol') // create new symbol
let Undefined;

console.table([number, string, bigint, nullIsValue, boolean, symbol, Undefined])