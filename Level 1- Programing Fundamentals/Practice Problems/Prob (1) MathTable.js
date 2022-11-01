/*
 * Ques --> Write a program to create a Mathematical calculation table from 0 to given number n.
*/


// Single Arguments solution :

function printAnyTable (num) {
    for (let i = 1; i <= 10; i++) {
    console.log(`${num} * ${i} = ${num * i}`); //This line will print like this --> 4 * 1 = 4
    }
}

printAnyTable(34);


console.log ("-----------------------------------")

// Two Argument solution :

function MathTable (table,n) {
    for (let i = 1; i <= n; i++) {
        console.log(`${table} * ${i} is ${table * i}`)
    }
  }

MathTable (2,15);
