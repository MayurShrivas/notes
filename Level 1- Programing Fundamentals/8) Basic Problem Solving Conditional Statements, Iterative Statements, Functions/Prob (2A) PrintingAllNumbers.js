/* Write a program to print the digits of a number in any order.
Example -
num = 435
Output -
53
4
*/

let N = 435;
while (N > 0) {
    let digit = N % 10;
    console.log (digit);
    N = Math.floor (N/10);
}
