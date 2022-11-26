/*
Given a positive number n and precision p, find the square root of the number upto decimal places using binary search. 

Examples: 
Input : number = 50, precision = 3
Output : 7.071

Input : number = 10, precision = 4
Output : 3.1622

Input = number = 16
sqrt = 4

Input = number = 15
sqrt = 4

Input = number = 64
sqrt = 8

number = 10, precision = 3 (Precision means upto how many decimal in we want in answere)
*/

function sqrtOfNumber (number, precision) {

    let integerPart = findIntegerPart (number);
    let decimal = 0.1;
    let ans = integerPart;
    for (let i = 1; i <= precision; i++) {
            while (ans * ans <= number) {
            ans += decimal;
        }
        ans -= decimal;
        decimal = decimal / 10;
    }
    return ans.toFixed (precision);

}

function findIntegerPart (number) {
    let start = 1;
    let end = number;
    while (start <= end) {
        let mid = parseInt ((start + end) / 2);
        if (mid * mid === number) {
            return mid;
        } else if ( mid * mid < number) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return Math.min (start, end);
}
console.log (sqrtOfNumber (10, 2));  