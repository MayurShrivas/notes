/** Problem –Given 2 numbers M and N where 
M = number of lectures to be happen
N = number of lectures attended
Your task is to find number of lectures which need to be attended to achieve 75% attendance
For example –
Input – M = 7, N = 6
Output – 0 (75% attendance already achieved) 
*/

let M = 7, N = 1;

let classRequired = Math.ceil(0.75 * M);

if ( N >= classRequired) {
    console.log (0);
} else {
    console.log (classRequired - N);
}
