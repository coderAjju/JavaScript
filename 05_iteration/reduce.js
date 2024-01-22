// hum reduce method essi liye use karte hain taki hum array ke saare element ko ek single value main convert kar sake.reduce method do parameter leta hai pahla callback function aur dusra accumulator ki value.
const array1 = [1, 2, 3, 4];

const sumWithInitial = array1.reduce(function (acc,curVal){
    console.log(`${acc} and ${curVal}`)
    return acc+curVal
},0);
//accumulator :=> accumulator ki default value array ka 0th index hota hai.

console.log(sumWithInitial);