/* Write a program to check whether a given number is prime or not.
Example -
num = 17
Output - true

*/

// Normal Solution :-

let N = 9;
let flag = true; // true --> It is a prime; false --> It is not a prime. 
for (let i = 2; i <= N-1; i++) {
    if (N % i === 0) {
        flag = false; // This line will never executed if N is a prime.
        break;
    }
}

console.log (flag);

// Function Solution :-

function isPrime(N) {
    let flag = true;
    // EDGE case
    if(N ===1) {
        return false;
    }

    for(let i = 2; i <= N - 1; i++) {
        if(N % i === 0) {
            flag = false;
        }
    }

    return flag;
}

console.log (isPrime(7)); // true
console.log (isPrime(9)); // false 
console.log (isPrime(2)); // true 
console.log (isPrime(6)); // false
console.log (isPrime(1)); // true

// In function method we can use multiple input.