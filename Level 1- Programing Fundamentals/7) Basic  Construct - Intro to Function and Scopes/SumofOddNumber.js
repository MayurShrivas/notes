function sumOddNumber (N) {
    let sum = 0;
    for (let i =1; i <= N; i+= 2)
    {
        sum += i;

    }
    return sum; // sum returns as output here
}
let returnedValue = sumOddNumber (5);  // Instead of console.log we can get output in this method
console.log (returnedValue);

/*
console.log (sumOddNumber (5)); // 1 + 3 + 5 = 9
console.log (sumOddNumber(10));
console.log (sumOddNumber(7));
*/
