/* Create a pattern using ‘*’ as shown below using loops.
*
**
***
****
*****
*/


for(let i = 1; i <= 5; i++) {  // This loop is for printing the rows.
    // ith row --> i star.

    let str = '';
    for(let j = 1; j <= i; j++) {
        str = str + '*';
    }

    console.log (str);

}

// number + number --> addition
// 1 + 2 = 3
// string + string --> concatenation
//"Hello" + "Relevel" = "HelloRelevel"
