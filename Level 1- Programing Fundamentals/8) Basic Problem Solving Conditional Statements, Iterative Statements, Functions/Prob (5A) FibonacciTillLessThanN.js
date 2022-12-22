/* Write a program to print the fibonacci sequence till less than N.
Fibonacci sequence - 0, 1, 1, 2, 3, 5, 8, …
Example -
N = 7
Output
0
1
1
2
3
5
*/

// Fibonacci Sequence means -> adding two previous numbers eg.

const N = 10;

let a = 0;
let b = 1;
let c = a + b;

// Assuming N to be greater than or equal to 2.
console.log (a);
console.log (b);

while (c < N) {
    console.log (c);
    a = b;
    b = c;
    c = a + b;
}

/*
 *  a = 0, b = 1, c = 1 ( C = a + b) 
 */
