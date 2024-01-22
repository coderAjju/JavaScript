// for of

let array = [3,4,"tr",3];
for(let a of array){  //ye array ke element ko iterate karte wakt element ko uske acctual type(string,number) main hi rahne deta hai

    // console.log(typeof a);
}

let str = "hello world!";
for(let s in str){
    console.log(str[s]);
}

let map = new Map() //Map objects are collections of key-value pairs. A key in the Map may only occur once; it is unique in the Map's collection. A Map object is iterated by key-value pairs — a for...of loop returns a 2-member array of [key, value] for each iteration. esse for...in loop se iterate nhi kiya ja sakta.
map.set("js","javascript")
map.set(1,"one")
map.set("rb","ruby")
map.set("rb","ruby")

// console.log(map)

for(let [key,value] of map){
    // console.log(`${key} and value is ${value}`)
}

const newObj = {
    name:"javascript",
    price:"9999"
}
// console.log(newObj)
// for(let O of newObj){
    // console.log(O)  // for...of loop se object iterable nhi hote hain inke liye hame for...in loop ka use karna padta hai
// }

