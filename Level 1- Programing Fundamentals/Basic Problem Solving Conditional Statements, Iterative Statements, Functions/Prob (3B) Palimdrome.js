/* Write a program to check whether a given number is palindrome or not.
A number is considered as a palindrome if reads the same from left to right as from right to left
Example -
num = 121
Output - true
num = 17
Output = false
*/


const num = 121;

let copy = num;
let reversedNumber = 0;
while (copy > 0) {
    let digit = copy % 10;
    reversedNumber = reversedNumber * 10 + digit;
    copy = Math.floor (copy / 10);
}
console.log(reversedNumber === num);

