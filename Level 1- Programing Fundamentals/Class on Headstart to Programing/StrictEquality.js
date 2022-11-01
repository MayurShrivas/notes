let num1 = 20; // number
let num2 = "20"; // string

console.log (num1 == num2); // true

console.log (num1 === num2); // Strict Equality check. JS will perform through check

let num3 = "twenty";
console.log (num1 == num3); // false

let value1 = 0; // number
let value2 = false; // boolean
console.log (value1 != value2); // false
console.log (value1 !== value2); // Strict Inequality opearation--> true


// Falsy Values :-
// false internally is represented as a 0
console.log ( 0 == false); // 0 --> number; false--> boolean, Still we are getting an output of true
console.log ( 0 === false ); // false  