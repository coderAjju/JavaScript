function showMyName(){
    console.log("A")
    console.log("j")
    console.log("a")
    console.log("y")
}

// showMyName();
let run = showMyName; //  showMyName is the function name but here we assign it to 'run' variable and now run is a function
                    // without parenthesis function name provide reference.
// run();


// here we write a program that add two number

function addTwoNumber (number1,number2){ // here number1,number2 are parameter
    console.log("hello");
    return number1 + number2
}
let result = addTwoNumber(4,5); // here 4,5 are arguments
console.log(result);


//default parameter

function userName(UserName = "sam"){ 
    return `${UserName} this is my name`
}
console.log(userName()); // if we pass any argument here then default value will be override.
