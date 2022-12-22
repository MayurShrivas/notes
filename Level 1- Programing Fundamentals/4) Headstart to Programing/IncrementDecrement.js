// Increment Operator --- increase value by 1 only
let a = 5;
++a; 
console.log (a);

// Decrement Opeartor --- decrease value by 1 only
let b = 5;
--b; 
console.log (b);

// Postfix Operators
// You get to use old value once; then value gets increment / decrement.
 console.log ("Postfix Operator");
 let c = 5;
 console.log (c++); // prints 5
 console.log (c); // prints 6

 // Prefix Operators
 // You cannot use old value anymore; You have to use new value.
console.log ( "Prefix Operator");
let d = 5;
console.log (++d); // print 6
console.log (d); // print 6


console.log ( "Postfix Decrement")
let num = 5;
let e = num--;
console.log (e);
console.log (e);
console.log (e);
console.log (num);

console.log ( "Quizzzz")
let f = 3;
console.log (f++ + ++f);
