/** 
 *(+) Sign has two purposes.
 * 1) Addition Operation
 * 2) Concatenation Operations.
 */

console.log (3 + 4); // Addition --> NUMBER + NUMBER
console.log ("Hello" + "Mayur"); // Concatenation --> String + String

// Type coercion of Number to String: 
// Number + String --> Number gets converted into a string and then a concatenation happens.
console.log ( 1 + "2"); 


// Type coercion of Boolean to String:
console.log (false + "Hello");

// Type coercion of String to NUmber; 
// JS is converting the string "2" into a number and performing the arithmetic operations.
console.log (10 - "2"); // NUmber - String
console.log (10 * "2");
console.log (9 % "2");
console.log (10 / "2");

// Boolean --> Number;
// JS internally converts false -> 0, true -> 1
console.log (20 + true); // Number to Boolean
console.log (20 + false);
console.log (20 - true);


