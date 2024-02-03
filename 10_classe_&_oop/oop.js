// object literal
let obj = {
    name:"ajay",
    email:"email.com",
    objMethod : function(){
        console.log(this.name)
    }
}
// console.log(obj.objMethod())

// constructor function

function User(name,email){
    this.name = name;
    this.email = email;
    this.showMyName = function(){
        console.log(`hey my name is ${name}`)
    }
    return this
}

let userOne =  User("ajay","ajay@gmail.com");
let userTwo =  User("vijay","vijay@gmail.com"); // Note=> yeha aise karne se userOne ke value ko userTwo overwrite kar degi kyu aise koi naya instance create nhi hota hai essi liye hame new keyword ka use karna padta hai jisse ke each user ka ek naya context ban sake jisse joi aur access na kar sake.

// console.log(userOne) // output=> {name:"vijay",email:"vijay@gmail.com"};

let userThree = new User("suraj","suraj@gmail.com"); // Note:=> constructor function (new keyword) jo hota hai naya instance banane ke liye use hota hai on the basis of existing object literal such as User() . agar main new keyword ka use nhi karunga to values overwrite ho jayengi jaise ki upper aapne userOne aur userTwo main dekha
let userFour = new User('santosh',"santosh@gmail.com")
console.log(userThree.showMyName())
console.log(userFour)