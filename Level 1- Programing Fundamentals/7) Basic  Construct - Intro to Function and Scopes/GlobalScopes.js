let a = "Mayur"; // Variable "a" has a Global Scope

function sayHello() 
{
     /* Although variable "a" is outside the function bode, it is still 
     accessible inside the function. This concept is known as the "Global Scopes". 
     The variable "a" is part of the global scope, i.e it is accessible from everywhere.
      */

    console.log("Inside Function");
    console.log (a)
}

sayHello ();
console.log ("Outside Function");
console.log (a);
