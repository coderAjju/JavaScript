// ----------- a simple object -------------
let tinderUser = {}

tinderUser.name = "Ajay";
tinderUser.city = "gkp";
tinderUser.isLoggedIn = "true"

// console.log(tinderUser);


// ---------- we can assign nesting object --------------
let regularObject = {
    email:"ajay@google.com",
    fullname:{
        userFulleName:{
            firstName:"ajay",
            lastName:"upadhyay",
        }
    }
}

// console.log(regularObject.fullname.userFulleName.firstName);


// --------------- concatenation of two or more object ----------------
let obj1 = {1:"a",2:"b"}
let obj2 = {3:"c",4:"d"}

let newObj = {obj1,obj2}
// console.log(newObj); // output:=> { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

let anotherObj = Object.assign({},obj1,obj2)
// console.log(anotherObj)  // output:=> { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

let concatnateUsingSpread = {...obj1,...obj2};
// console.log(concatnateUsingSpread)  //output:=> { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }


// --------- we can assign objects in array ------------------

let objectArray = [
    {
        name:"ajay",
        id:1
    },
    {
        name:"suraj",
        id:2
    },
    {
        name:"santosh",
        id:3
    }
]
// console.log(objectArray)
// console.log(objectArray[0].name) //output:=> ajay


// ----------- how to play with keys and values of object ----------------

// console.log(Object.keys(tinderUser)); // object keys are arrange in array
// console.log(Object.values(tinderUser)); // object values are arrange in array
// console.log(Object.entries(tinderUser)) // output:=> [ [ 'name', 'Ajay' ], [ 'city', 'gkp' ], [ 'isLoggedIn', 'true' ] ]

// console.log(tinderUser.hasOwnProperty("isLoggedIn")) // it is used to check the specific property is exist in object or not.



// object destructuring

const course = {
    courseName : "javascript",
    price : "999",
    courseInstructor:"Hitesh"
}

// console.log(course.courseInstructor)

/* NOTE :=> agar hum object ko destructure kar rahe hain to object ke keys ka use kareinge as a variable otherwise 
error will be generate */

const {courseName,price,courseInstructor:instructor} = course;
console.log(courseName,price,instructor);