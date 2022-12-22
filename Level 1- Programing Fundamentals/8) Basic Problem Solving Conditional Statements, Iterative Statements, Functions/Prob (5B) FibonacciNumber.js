/* Write a program to find the Nth Fibonacci number.
Fibonacci sequence - 0, 1, 1, 2, 3, 5, 8, …
*/

const N = 10;

if (N === 1) {
    console.log (0);
} else if(N === 2) {
    console.log (1);
} else {
    let a = 0, b = 1, c = a + b;
    for(let i = 3; i <= N; i++) {
        c = a + b;
        a = b;
        b = c;
    }

    console.log (c);
}
