/* 
Given the lenght of three line segment as a,b, & c. Find if they can form a tringle or not?
(Student are not expected to take any user input, solve the problem using hardcoded value) 
*/

function checkIfTriangle (side1, side2, side3) {
    if (side2 + side3 <= side1 || 
        side1 + side3 <= side2 || 
        side1 + side2 <= side3) {
        return false;
    } else 
    return true;
}

let side1 = 7; side2 = 10; side3 = 15;
if (checkIfTriangle (side1, side2, side3))
console.log ("Triangle");
else
console.log ("Non Triangle");

