// comparision operators are ==,>=,<=,>,<,===

console.log(null > 0);  //false
console.log(null == 0);  //false
console.log(null >= 0);  //true

/*
NOTE :----------
    The reason is that an equality check == and comparision >, <, >=, <= work differently.
    Comparision converts null to a number, treating it as 0.
    That's why(3) null >= 0 is true and (1) null > 0 is false.
*/


let string = "aj"; //string type
let no = 12;  // number type
console.log(string === no); // checks equality and type of both operands