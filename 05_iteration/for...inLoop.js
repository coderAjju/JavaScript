// for in

let array = [3,4,"tr",3];
for(let a in array){  //ye array ke element ko iterate karte wakt element ko string main convert kar deta hai
    // console.log(a);
}
    
let str = "hello world!";
for(let s in str){
    // console.log(str[s]);
}

let map = new Map() //Map objects are collections of key-value pairs. A key in the Map may only occur once; it is unique in the Map's collection. A Map object is iterated by key-value pairs — a for...of loop returns a 2-member array of [key, value] for each iteration. ese for...in loop se iterate nhi kiya ja sakta.
map.set("js","javascript")
map.set(1,"one")
map.set("rb","ruby")
map.set("rb","ruby")

// console.log(map)

for(let key in map){
    console.log(key);  //yeha ye kuch nhi print karega kyu map for..in loop ke through iterable nhi hai
}

const newObj = {
    name:"javascript",
    price:"9999",
}
console.log(newObj)
for(let key in newObj){
    // console.log(typeof key)
    console.log(`${key} value is ${newObj[key]}`)  // for...of loop se object iterable nhi hote hain kyu object ke andar enumerable properties hoti hain inke liye hame for...in loop ka use karna padta hai
}