/* Write a program to calculate the sum of digits of a number.
Example -
num = 435
Output -
12
*/

let N = 435;
let sum = 0;
while(N > 0) {
    let digit = N % 10;
    sum += digit;
    N = Math.floor (N / 10);
}

console.log (sum);
