// how to store string value in variable
let string = "coderAjju"; //first method to create string variable;
console.log(string)
let newString = new String("CoderAjay"); //second method to create string variable and provide 
                                        //multiple operation on string

let stringLength = newString.length;
console.log(stringLength);  //9

let anotherString = newString.toUpperCase();
console.log(anotherString);  //CODERAJAY

let str = "    ajay    ";
console.log(str.trim());  //ajay

let subString = newString.substring(0,4);
console.log(subString);  //Code

let sliceString = newString.slice(1,-2);
console.log(sliceString); // oderAj

let spliceString = newString.split("")
console.log(spliceString); // [C,o,d,e,r,A,j,a,y]

let charString = newString.charAt(4);
console.log(charString); //r

let indexofString = newString.indexOf("A");
console.log(indexofString);  //5

console.log(newString.__proto__)  // empty object {}

let URL = "https:///www.google.com"
console.log(URL.replace("t","_")); // replace first character only

// if we want to know the given string is present in URL or not we use..
let find = newString.includes("Aja");
console.log(find); //true 