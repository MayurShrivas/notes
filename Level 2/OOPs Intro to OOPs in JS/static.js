/* What is Static Method ?
--> A static method (or static function) is a method defined as a member of an object but is accessible 
directly from an API object's constructor,rather than from an object instance created via the constructor.
*/

// Example :- 1
// function Father () {

// } 

// Father.ability = function () {
//     console.log (this);
// }
// Father.ability (); // output will be father's object.


//Example :- 2
// class Father {
//     static gender = 'Men';

//     ability () {
//         console.log ('Runs Faster')
//     }
// }

// console.log (Father.gender);
// obj1.ability ();

// Example :- 3
// class Father {
//     static gender = 'Men';
     
//     static ability () {
//     console.log ('Runs Faster')
//     }
// }

// class Child extends Father {
//     static ability () {
//         console.log ('writes fast')
//     }
// }

// Child.ability (); // Output will be childs ability.

//Example :- 4
class Father {
    static gender = Father.provideGender ();
    static isMarried;

    // static { // static block is created for class creation & for assigning values.  
    //     gender = 'Male';
    //     isMarried = true;
    // }
    
    static provideGender () {
        return 'Male';
    }

    ability () {
    console.log ('Runs Faster')
    }
}

Father.provideGender ();

class Child extends Father {
    // static ability () {
    //     console.log ('writes fast')
    // }
}

console.log (Father.gender);
