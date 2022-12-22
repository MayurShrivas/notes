function blabla (x, y) {
    return x + y;
}
console.log (blabla (5, 4));  // Output is 9

/**
 * There's an alternate way of writing a function.
 * It is done by assigning function to a variables. 
 * 
 * This the reason why functions in JS are also known as First Class Citizens.
 */
 
let blabla = function (x, y) {
    return x + y;
}
 
console.log (blabla (5, 4)); //Output is 9