/* Write a program to check whether a given number is an Armstrong number.
A number is known as an Armstrong number if sum of cube of digits of the number is equal to the
number itself.
For e.g. : 153 = 1^3 + 5^3 + 3^3
Example -
num = 370
Output
*/

let N = 370;
let copy = N;
let sum = 0;
while(copy > 0) {
    let digit = copy % 10;
    sum += Math.pow (digit, 3); // sum += (digit * digit * digit)
    copy = Math.floor (copy / 10);
}

console.log (sum === N);

