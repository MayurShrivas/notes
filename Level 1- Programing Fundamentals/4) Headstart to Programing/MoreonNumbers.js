 let num = 4; // Integer -- A number without decimal places.
console.log (num); // print no. 4
console.log (typeof num); // number

// Let mein new num value assign hota hai, const - me reassign hota

num = 4.98; // Decimal Number
console.log ( num);
console.log (typeof num);

// Que - Why we are not usning let in second example?
// Ans - By let function the pervious value ressigned by the new number 4.98

console.log (typeof 5.6); // By this is also we can check type of value.

// EXPONENTIAL NUMBERS --> 
 // 3e9 = 3 * 10^9 ( e9 means 10 to the power 9)
 
 num = 3e9; // Exponential Number
 console.log (num);
 console.log (typeof num);

 num = 4567; // Integer
 console.log (num.toExponential()); // It is mandatory to apply bracket after toExpenentialNumber.


 // SPECIAL NUMBERS ---> 

 // 1. Infinity Numbers (positive)
num = 4/0;
console.log (num);
console.log (typeof num);

// 2. - Infinity Numbers (Negative)
num = 4/-0;
console.log (num);
console.log (typeof num);

// 3. Nan -> Not a Number
num = undefined + 1; // Javascript not known value of undefine.
console.log (num);
console.log (typeof num);  
