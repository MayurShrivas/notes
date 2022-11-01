/* Create full Pyramid.
Like this :
    *
   * *
  * * * 
 * * * *  
* * * * *

*/

for (let i = 1; i <= 5;i++) {
    let spaces = '';
    for (let j = 1; j <= 5 - i;j++) {
        spaces = spaces + " ";
    }
    let stars = '';
    for (let j = 1; j <= i; j++) {
        stars += "* ";
    }

    console.log (spaces + stars);
}
