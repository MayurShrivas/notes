/* Write a program to find the HCF or GCD of two Numbers
*/

const a = 10, b = 15;

let res = Math.min (a, b);
while(res > 0) {
    if(a % res === 0 && b % res === 0) {
        break;
    }

    res --; // Ulta loop
}

console.log (res);
