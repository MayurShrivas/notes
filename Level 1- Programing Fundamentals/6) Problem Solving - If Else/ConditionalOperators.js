// AND Operators : Both condition needs to be true

let a = 5;
let b = 6;
let c = 7;

console.log ((a < b) && (b === c) && (c === a)); // First condition --> (5 < 6) = true; But 2nd  condition --> (6 === 7) = false

// OR Operator : Anyone condition can be true

console.log ((a < b) || (b === c) || (c === b)); // First condition  --> (5 < 6) = true; But 2nd condition --> (6 === 7) = false

// NOT Operator : Flips the output --> true -> false; false -> true.
console.log ((5 < 7)); // true
console.log (!(5 < 7)); // false

console.log (!(5 !== 5));
 
