function sayHello () {
    {
        let a = "Mayur";
        console.log (a);
    }
    console.log (a); // ERROR
    /**
     * Even though, I'm still inside the function body, I'm outside of the local scope.
     * Hence, variable a is not accessible.  
     */
}

sayHello();