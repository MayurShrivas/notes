/* Write a program to reverse a number.
Example -
Input - 1234
Output - 4321
*/


let N = 1234;
let reversedNumber = 0;
while (N > 0) {
    let digit = N % 10;
    reversedNumber= reversedNumber * 10 + digit; // This is very Important step in this code.
    N = Math.floor (N / 10); 

}
console.log (reversedNumber);
