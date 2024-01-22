//forEach aur map mein ek main difference hai ki forEach value return nhi karta aur map value return karta hai

let arr = [1,2,3,4,5,6,7,8];
// let retVal = arr.forEach((item)=> console.log(item+1));
//console.log(retVal) // output:=> undefined


console.log("real array "+arr.join(','))
// --------map---------
let mapRetVal = arr.map((item)=>item+1);
console.log("return value by map "+mapRetVal)

// --------chaining of map-----------
mapRetVal = arr.map((item)=>item+1).map((item)=>item-1);
console.log("return value by map chaining "+mapRetVal)