/* suppose karo ki aap ek shopping application bana rhe ho aur user product ko add to cart kar rha hain aur aap 
ko nhi pata ki kitne argument(product) a rhe hain tab hum function declare karte wakt parameter main rest operator
pass kareinge.
*/


function calculateCartPrice(val1,val2,...num1){ // here ... is a rest operator
    return num1;
}
let TotalPrice = calculateCartPrice(100,200,3000,2000,999);
// console.log(TotalPrice)


// app function parameter main object bhi pass kar sakte ho kuch es tarah se
const user = {
    userName:"Ajay",
    city:"gkp"
}
function printUser(anyobject){
    console.log(`${anyobject.userName} name of user and city is ${anyobject.city}`)
}

printUser(user)


// app function parameter main array bhi pass kar sakte ho kuch es tarah se 
let newArray = ["ajay","gkp",100000];
function aboutUser(anyArray){
    console.log(`${anyArray[0]} this is user name and he is belong to ${anyArray[1]}`);
}

aboutUser(newArray);