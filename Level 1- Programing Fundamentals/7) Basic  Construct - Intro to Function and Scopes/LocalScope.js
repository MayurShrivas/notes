function sayHello ()
{
    /* The variables "a" is defined the function boode and has a local scope
    * within the function body itself. It is not accessible outside of the function body.
    */

    let a = "Mayur"; // This variable "a" is Inside { Local scope } function
    console.log ("Inside Function");
    console.log (a);
}

sayHello ();
let a = "Relevel"; // This variable "a" is outside the function
console.log (a); // ERROR


/** NOTE :
 * Whenever you are declaring variables inside { curly braces } it forms a Local Scope.
 */
