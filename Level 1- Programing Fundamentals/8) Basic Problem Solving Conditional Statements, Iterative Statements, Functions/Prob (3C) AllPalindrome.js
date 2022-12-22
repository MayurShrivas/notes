/* Write a program to print all palindrome numbers from 1 to N.
*/

const N = 200;
for (let i = 1; i <= N;i++) {
    // check whether i is palindrome or not.
    let copy = i;
    let reversedNumber = 0;
     while(copy > 0) {
        let digit = copy % 10;
        reversedNumber = reversedNumber * 10 + digit;
        copy = Math.floor (copy / 10);
     }
     if(reversedNumber === i) {
        console.log (i);
     }

}