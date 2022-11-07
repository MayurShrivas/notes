// Whatever that can be access outside the class is Public. 
// Whatever that we don't want to display is call as private. use # in front of object to make it private.

// Public :-

class Father {
        constructor (age, name) {
        this.age = age;
        this.name = name;
    }
}

// let obj1 = new Father(37, "Mayur");
//console.log (obj1.age); // This can be access outside class. This is public  

// Private : -

// class Father {
//     #age; // Private field must be declared 1st & then using # we can make particular object as private.
//     constructor (age, name) {
//         this.#age = age;
//         this.name = name;
//     }
// }

// let obj1 = new Father(37, "Mayur");
// console.log (obj1.age); // Output will be undefined because of #private.


class Rectangle {
    length;
    breath;
    constructor (lenth, breadth) {
        this.length = lenth;
        this.breath = breadth;
    }

    get area () {
        return this.#calculateArea ();
    }

    #calculateArea () {
        return this.length * this.breath;
    }
}

let rec1 = new Rectangle (3, 4);
console.log (rec1.calculateArea ());
