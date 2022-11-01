/** Write a program to print all the elements of the array, and multiply each element from 5
 *  
 */
let twoDArray = [

    [100,23,45,56,78],
    [200,36,56,89,10],
    [300,48,73,89,93],

];

for(let i = 0; i <= twoDArray.length - 1; i++ ) { 
  for (let j = 0; j <= twoDArray[i].length - 1; j++) { 
 console.log(twoDArray[i][j] * 5);
}
console.log ("---------------------------")
}
    
//------Class Assignments --------------//
// Problem 1 --> Print Matrix in spiral method
/*
1 2 3 4
5 6 7 8
9 10 11 12
print as 1 2 3 4 8 12 11 10 9 5 6 7
*/
let spiralArray