// Prototype is apended with each & every object is the base class of every object. It is a parent class of every objects.
// In JavaScript there is no class. Behind the scenes there is only prototypes. 
// Object inside object inside object are prototypes.

/*
function Father(name) {
    this.name = name;
}

// Father.prototype.myobj = function () {
//     return console.log (this);
// }

Father.prototype.toString = function () {
    return console.log (this);
}
//console.log (Father.prototype.prototype);  
let father1 = new Father("Mayur");
//father1.prototype;
//father1.myobj (); // works with this function (Father.prototype.myobj = function () {)
console.log(father1.toString ());
*/

/*
object ---> a --> b --> c (Step - 2) 1st it will for c, then b, then a, if not get anything then it will return to object. 
let obj = new C ();
obj.toString1 (); ---> (Step -1) this will call function for a property. 
*/

// class Father {
//     ability () {
//         console.log ('runs fast')
//     }
// }

// class Child extends Father {
//     ability () {
//         this.ability ();
//         console.log ('writes faster')
//     }
// }
// let obj = new Child ();
// obj.ability (); 

// this --> parent and child both. this can be without parent class.
// super --> we only talk about parent. super cannot be use when there is no parent class.


// function Father () {
//     this.ability = function () {
//         console.log('runs fast');
//     }
// }
// let obj = new Father ();
// obj1.ablity ();


// Use of function constructor :-

function Father () {}

Father.prototype.ability = function () {
    console.log ('runs fast')
}

function Child () {
    super ();
}

Child.prototype.ability = function () {
    console.log ('writes fast');
}

// (HW) try to find out which do we use to call childs ability.


// class Child extends Father {

//     constructor () {
//        super ();
//     }

//     ability () {
//     this.ability ();
//     console.log ('writes faster')
//     }
// }

// let obj = new Child ();
// obj.ability (); 