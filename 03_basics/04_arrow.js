// this keyword jo hai wo current context ko refer karta hai
console.log(this); // ye ek empty object return karega lekin ye code browser per window object return karta yaad rakhiyega


const user = {
    username: "ajay",
    price : 9999,

    welcomeMessage : function(){
        console.log(`${this.username} is the new user`) // yaha per 'this' user object ko refer kar rha hai
        console.log(this)
    }
}
// user.welcomeMessage();


//regular function
function addTwo(){
    let name = "ajay";
    console.log(this.name);
}
addTwo();
// console.log(addTwo(4,3));

const Chai = () =>{
    let name = "ajay";
    console.log(this.name);
}
Chai();

const ExpFun = function (){
    let name = "ajay";
    console.log(this.name);
}
ExpFun();


// ----------- arrow function ------------

const func = (a,b) => (a+b);  // single line statement ke liye hum kuch es tarah value return kar sakte hai
console.log(func(5,6));

const funcObj = () => ({username:"ajay"});  // hum arrow function ke andar object ko es tarah se present karte hai
console.log(funcObj());