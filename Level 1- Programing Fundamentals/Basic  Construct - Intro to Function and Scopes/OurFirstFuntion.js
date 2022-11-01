/* sayHello is the name of the function and it is an identifier and it follows all the rules of an identifier. */

function sayHello (name) // function is Keyword
{
    console.log ("Hello", name);
    console.log ("Welcome to this course on JS");
    console.log ("Today we are learning about functions");
}

sayHello ("Mayur");
sayHello ("Sanket");
sayHello ("Vishwa");
sayHello ("rahul");
// function is used for compliting multiple opeartions 
// DRY means - Don't Repeat Yourself.


function add(x,y) 
{
    console.log (x);
    console.log (y);
    console.log(x + y);
}

add (3,4);

function substract (x,y)
{
    console.log (x - y);
}

substract (100, 1);

// function => keyword
// substract => function name
// ( Bracket ) =>  Input parameter
// (x,y ) => x, y are function arguments
// { Input under this curly braces} => function body.