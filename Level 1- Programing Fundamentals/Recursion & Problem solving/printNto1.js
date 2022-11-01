// Write a code to Print 1 to 10:

// //1 to 10 : from test file
function printNto1(n) {
    if (n===0) {    // Base case
        return;
    }
    printNto1 (n-1); // Recursion
    console.log (n);    
} 
printNto1 (10);

// my file
function printNto1(n) 
{
    if (n === 0) {    // Base case
        return;
    }
    printNto1 (n - 1); 
    console.log (n); 
} 
printNto1 (10);

console.log("-------------------")

// // Write a code to Print 10 to 1:
function printNto1(n) 
{
    if (n === 0) {    // Base case
        return;
    }
    console.log (n);
    printNto1 (n - 1); // Tail Recursion
    
} 
printNto1 (10);