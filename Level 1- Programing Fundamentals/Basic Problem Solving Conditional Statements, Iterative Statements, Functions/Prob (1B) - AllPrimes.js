/* Write a program to print all prime numbers less than N
Example -
N = 12
Output -
23
57
11

 */

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

const N = 12;
for (let i = 1;i <= N; i++) {
    if(isPrime (i)) {
        console.log (i);
    }
}
