/** Problem – Given three numbers as a.bcand c. Your task is to solve quadratic equation and find the roots.

We will follow below scenario - 
If (b*b - 4*a*c) = 0 then root = -b/2 * a
Else If (b*b - 4*a*c) > 0 then root = 
Else “no roots found”

For example –
Input – 1,5,1
Output – -0.4384471871911697 , -4.561552812808831  
 */

const a = 1;
const b = 5;
const c = 1;

let result = b * b - 4 * a * c; // calculating b^2 - 4ac

if(result === 0.0) {
    let root = -b / (2 * a);
} else if (result > 0) {
    let root1 = (-b + Math.sqrt(b * b - 4 * a * c)) / (2 * a);
    let root2 = (-b - Math.sqrt(b * b - 4 * a * c)) / (2 * a);
    console.log (root1, root2);
} else {
    console.log ("No Real Root")
}