function hello () {
    console.log (a);
}

// In this scenrio a goes into global scope, after which hello() is called. 
let a = 5;
hello ();

// In your scenario hello() is called first, during that time a was not present in global scope.
// hello ()
// let a = 5;
