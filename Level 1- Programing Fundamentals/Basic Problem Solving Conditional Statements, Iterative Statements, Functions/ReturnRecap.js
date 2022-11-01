// Method 1 => Without Return
function relevel (x) {
    console.log (x * x);
}
//relevel (5) + relevel (6); // This will give output seprately.

// Method 2 => With Return
function relevel (x) {
   return x * x;
}

let a = relevel (5);
console.log (a);

// Let's say that you want to calculate 5*5 + 6*6 => output will be 61.This is not possible in first method.

let num1 = relevel (5);
let num2 = relevel (6);
console.log (num1 + num2);
