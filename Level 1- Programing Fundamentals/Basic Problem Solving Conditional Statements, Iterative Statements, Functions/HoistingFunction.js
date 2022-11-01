// Function Decration 

console.log (add (3, 4)); // Hoisting of function

function add (x, y) {
    return x  + y;
}

//console.log (add (3, 4)); // Traditional method.


// Function expression are not Hoisted

console.log (add (3, 4));
let add = function (x, y) {
    return x + y;
}
