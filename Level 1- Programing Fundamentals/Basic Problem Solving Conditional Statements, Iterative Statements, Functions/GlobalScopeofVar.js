function sayHello () {
    { // This pink braces (Line 2 - 6) is a Local Scope
        // let a = "Hello";
        var a = "Hello";
        console.log (a);
    }
    console.log (a); // var a is formed innglobal scope.
}

sayHello ();
