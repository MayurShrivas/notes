
/** Problem – Given an array of three numbers. You need to find the largest among the three 
numbers. For example –

Input – 25, 15, 20
Output – 25 
 */


const a = 25;
const b = 15;
const c = 20;

if (a > b && a > c) {
    console.log (a);
} else if(b > a && b > c) {
    console.log (b);
} else {
    console.log (c);
} 