// let array = [1,2,3,4,5]
// console.log( array.at (3)) // Array Sorting

// const recursivefunction = ( ) => {
//     console.log ("My name is Mayur");
//     recursivefunction ( )
// } ;
// recursivefunction ( )  // Recursion function

// Is prime number.
const isprimenumber = (number) => {
    if (number === 1) return;
    if (number === 2) return true;

    for (let i = 2; i < number; i++){
        if (number % i === 0) return;
    }
    return number; // it will return prime  number
};
//for ( i = fromNum; i < toNum; i++) {
const printPrimeNumber = (fromNum, toNum) => {
    if (primeNumber (fromNum) != null) {
        console.log (primeNUmber(fromNum));
    }
    from++; // increase from number by 1 
    if (fromNum <= toNum) {
        printPrimeNumberloist(fromNum, toNum); // recursion
    }
};
function promtInput() {
    let toNum = prompt ("Enter Stating Number");
    let fromNum = prompt (" Enter last number");
    toNum = parenInt(toNum);
    fromNum = parenInt(fromNum);

    printPrimeNumberlist(toNum, fromNum)
}
printPrimeNumber(7,97)    