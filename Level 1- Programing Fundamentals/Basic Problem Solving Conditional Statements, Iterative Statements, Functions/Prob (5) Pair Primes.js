/* Given an even integer, num. Output a pair of numbers (a, b) such that a + b = num and both a and b are prime numbers.
In case multiple pairs exist for a num, output ANYONE of them.
Input - 15
Output - 2, 13
Input - 4
Output - 2, 2
*/

function isPrime(N) {
    if(N === 1) return false;

    for (let i = 2; i < N; i++) {
        if (N % i === 0) return false;
    }
    return true;
}

function pairPrimes (N) {
    for (let a = 2; a < N; a++) {
        let b = N - a;
        if(isPrime (a) && isPrime (b)) {
            return [a, b];
        }
    }
    return "No Output"
}

console.log (pairPrimes (15));
console.log (pairPrimes (4));
console.log (pairPrimes (17));
