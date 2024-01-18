// Immediately Invoked Function Expression

function chai(){
    console.log("hello");
}
chai();  // ye to mera regular function hai

(
    function(){ // ese named IIFE function kahte hain kabhi kabhi interviewer puch leta hain
        console.log("IIFE syntax")
    }
)(); // IIFE function ko nhi pata hota hai ki usse function kaha khatam karna hai essi liye IIFE function ke end main semicolon(;) lagana jaroori hai. agar aap uske just baad phir se ek IIFE function likh rhe hai.

(
    ()=>{ // aur ese unnamed IIFE fuznction kahte hain.
        console.log("IIFE second syntax")
    }
)();


//IIFE function main parameter kaise pass karte hain ye bhi jaan lete hain
(
    function (name){   //kuch es tarah se parameter pass kiye jate hain
        console.log(`hello my name is ${name}`)
    }
)('ajay');