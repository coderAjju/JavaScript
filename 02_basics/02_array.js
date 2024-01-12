let marvel_heros = ["Thor","IronMan","SpiderMan"];
let dc_heros = ["Batman","SuperMan","Flash"];

// marvel_heros.push(dc_heros); 
//output:=> [ 'Thor', 'IronMan', 'SpiderMan', [ 'Batman', 'SuperMan', 'Flash' ] ]

// --------concat---------
// console.log(marvel_heros.concat(dc_heros)) //use to merge two array
// output:=> [ 'Thor', 'IronMan', 'SpiderMan', 'Batman', 'SuperMan', 'Flash' ]

// spread Operator----------------
let newCreatedArray = new Array(...marvel_heros,...dc_heros)
// console.log(newCreatedArray) // output:=> [ 'Thor', 'IronMan', 'SpiderMan', 'Batman', 'SuperMan', 'Flash' ]

let anotherArray = [43,53,[64,6,5,32,4,[1,7,3,4,5,4]]];
// console.log(anotherArray.flat(Infinity)) //output :=> [43,53,64,6,5,32,4,1,7,3,4,5,4]

// console.log(Array.from("Ajay")) //Now this string is converted in array and each character is separated with comma(,).
// output :=> [A,j,a,y]
// console.log(Array.isArray("apple")) // isArray method checks that given parameter is array or not it will return boolean value.
// output :=> false

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3)); // 'of' method is used to create array using multiple values;
// output :=> [100,200,300]