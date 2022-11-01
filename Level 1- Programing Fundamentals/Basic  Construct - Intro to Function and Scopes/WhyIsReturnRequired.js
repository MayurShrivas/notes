function square (x) {
    console.log (x * x);
}
 square (5);

 function squareWithreturn (x) 
{
    return x * x;
} 
console.log (squareWithreturn (5));

// Let's say I  want to calculate 5*5 + 6*6 = 25 + 36 = 61
console.log (squareWithreturn (5) + squareWithreturn (6)); // This function will return sum of square i.e "61"
console.log (square (5) + square (6)); // This function is not returning anything that's why answere is NaN


