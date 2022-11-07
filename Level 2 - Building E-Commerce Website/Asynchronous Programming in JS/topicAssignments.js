/* 
Assignment --> 1

Requirements: "1. Implement a map using the Inversion of Control principle that will perform operations on an array such as:
a. Squaring the elements
b. Dividing them by 5.
c. The root of the element
d. etc" 

*/


function performOperation(array, arrayFunction) {
    const map1 = array.map(arrayFunction);
    return map1;
}

const array = [1,2,3,4,25];

//Squaring the elements

console.log(performOperation(array, x => x * 2))

//Dividing them by 5
console.log(performOperation(array, x => x / 5))

//The root of the elements
console.log(performOperation(array, x => Math.sqrt(x)))


/* 
Assignment --> 2. 

Implement a generator that will return power all the powers of 3.

*/

function* powerOfThree(i) {
    var count = 1;
    // Infinite Generation
    while (true) {
    yield 3 ** count++;
    }
}

var gen = powerOfThree(1);
for (var i = 0; i < 10; i++) {
    document.write(gen.next().value + "<br>");
}


/* 
Assignment --> 3. 

Program to explain difference between Promise.all() and Promise.race().

*/

const promiseAllExample = [
    new Promise((resolve, reject) => setTimeout(resolve, 222, '222')),
    new Promise((resolve, reject) => setTimeout(resolve, 333, '333')),
    new Promise((resolve, reject) => setTimeout(reject, 111, '111')),
    new Promise((resolve, reject) => setTimeout(resolve, 444, '444'))
];

Promise.race(promiseAllExample)
    .then(console.log)
    .catch(console.log);
    
    const promiseRaceExample = [
    new Promise((resolve, reject) => setTimeout(resolve, 222, '222')),
    new Promise((resolve, reject) => setTimeout(resolve, 333, '333')),
    new Promise((resolve, reject) => setTimeout(resolve, 111, '111')),
    new Promise((resolve, reject) => setTimeout(resolve, 444, '444'))
];

Promise.all(promiseRaceExample)
    .then(console.log)
    .catch(console.log);
