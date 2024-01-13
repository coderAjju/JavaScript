// singleton :=> when we create object using constructor then singleton is created.
// let tinderObject = new Object(); // this is singleton object

let mySym = Symbol("key1");

// Object literal
const JSuser = {
    name:"Ajay",
    "full name" : "Ajay Upadhyay",
    email:"ajay@google.com",
    password:"322@f3",
    [mySym]:"mykey1",
    city:"Gkp",
    array:[1,2,3,4]
}

// Object.freeze(JSuser)
JSuser.rollNo = 12;
// console.log(typeof JSuser[mySym]);
// console.log(JSuser["full name"]);

JSuser.greeting = function(){
    console.log(`My name is ${this.name}`);
}
JSuser.greeting();


