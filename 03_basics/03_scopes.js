/* Javascript ke andar teen tarike ke keyword ka use karke hum variable declare karte hain.
    1. let
    2. const
    3. var

    ab let aur const jo hai ye block scoped hote hain aur var jo hai wo global scope variable hote hain.
    matlab let aur const ka use karke banaye gaye variable ke uske block ke andar hi access kiya ja sakta 
    hai aur var se banaya hua variable block ke bahar bhi access kiya ja sakta hain
*/


/* let:=>yaha error generate hoga kyuki maine a naam ke variable ko globaly declare nhi kiya hai.wo
     kewal ussi block ke andar accessible hai jaha usko declare kiya gya hain.
*/
if(true){
    let a = 32;
}
// console.log(a); 

/* const:=> same process const ka bhi hota hain jo let ka hota hai.const ke baarein main ye baat janna important
    hai ki hum const variable ko declare karke nhi chhod sakte hamein usko koi na koi value assgin karni padegi aur 
    hum const variable ke value ko reassgin nhi kar sakte hain.
*/
if(true){
    //const b  //ye error generate karega kyu ki humne yaha variable declare kiya hai usse koi value assign nhi ki
    //b=1000;
    const c = 12; // ye correct syntax hai
    //c = 34 // ye bhi error generate karega kyu ki hum const se declare value ko reassgin nhi kiya ja sakta..
}
// console.log(c); 

/* var:=> var ek global scope variable hain esko hum block ke andar declare karein ya phir globaly declare karein
    hum esko kahi bhi access kar sakte hain
*/

if(true){
    var d = 32;
}
console.log(d);  // yaha per output 32 aayega kyu var globaly variable declare karta hai




