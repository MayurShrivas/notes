/* Que. - What is Classes ?
Classes is a way of defining Objects. 
The way have constructors, way we have all the things same way we have classes. 
Classes are blueprint of Objects.
*/

class Laptop {
    make; // This is used for declaration purpose.
    model;
    ram;

    constructor (make, model, ram) { // Here constructor is a keyword
        this.make = make;
        this.model = model;
        this.ram = ram;
    }
    print () {
        console.log (this)
    }    
}
let laptop1 = new Laptop('Dell', 'Inspiron', '16 GB');
//console.log (laptop1);
//laptop1.print (); // This will work with line 17 print function only.

/* Getter And Setter :-
* When you try to access a property getter will be called
* When you set a property then setter will be called.
*/

class Rectangle {
    height;
    width;
// when we call object, first it check constructor.
    constructor (height, width) { // If we give 3 parameter to constructor then it will call first, then check for 2 parameter.
        this.height = height;
        this.width = width;
    }
    get area () {
        return this.calculateArea ();
    }
    set area (areaSize) {
        console.log (areaSize);
    } 
    calculateArea () {
        return this.height * this.width
    }
}
let rectangle = new Rectangle (3, 4);
//console.log (rectangle.area); // Output will be 12.
//rectangle.area = 22; // when we call .area it call set function. This is a setting.

//console.log (rectangle); // prints area property


class Shape {
    area;
    perimeter;
    type;
    
    set radius (value) {
        this.type = 'circle';
        this.calculateAndSetArea (value);
    }
    set lengthAndBredth (value) {
        this.type = 'rectangle';
        this.calculateAndSetArea (value);
    }
    calculateAndSetArea (value) {
        if(this.type === 'circle') {
            this.are = Math.PI * value * value
        } else {
            this.area = value [0] * value [1];
        }
    }
    calculateAndSetPerimeter () {

    }
}
// let shape1 = new Shape ();
// shape1.radius = 2;
// shape1.area;
// shape1.lengthAndBredth = [2, 4];
// shape1.area;


//OVERLOADING means Same name with different parameters.
//Function overloading & constructor overloading are not in Javascript.

/* Ques. What is Inheritance ?
--> Child is having properties of Father.
Whatever there is insides father's class & Child will have its own things.
*/

/*
class Father {
    FathersAbility () {
        console.log ('Run Fast');
    }
}

class Child extends Father {
    ChildsAbility () {
        console.log ('X-Ray vision')
    }
}
let child = new Child ();//If we creat object of father then we wouldn't able to access child ability. It will say child ability is not a function. Because it is added with father not child.
child.FathersAbility ();
child.ChildsAbility (); // Child is inheriting property of her parents
*/ 

//Over Riding (Focused concept) OR polymorphism (High level Concept)
//poly + morphism means multiple + implementations. 

/*
class Father {
    ability () {
        console.log ('Run Fast');
    }
}

class Child extends Father { // Overriding
    ability () {  // If we comment this part we will get father's ability will be called. This is called function Overriding of parents class.
        console.log ('X-Ray vision')
    }
}
let child = new Child ();
child.ability (); // Output will be childs abilty. 
*/

// Classes are not friendly with Hoisting. So we cannot use it.

// Let's talk about constructor :
class Father {
    constructor () { // constructor cannot be Override.
        console.log ('Hey I am Father');
    }
}

class Child extends Father { 
    constructor () {  
        super (); // Super --> super keyword is used to access parents's class propertirs, function keys & constructor.
        console.log ('Hey I am Child')
    }
}
let child = new Child (); // It will give error because of 2 constructor. It does't know where to go. 
console.log (child instanceof Child); 
console.log (child instanceof Father); // Output will  be true because child can access properties of Father also. Father is a parent class.
// instanceof --> By this opearator we know class of object.

/* Different uses of super :-
super () --> For calling parent constructor
super.function () --> For calling parent function
super.a --> For accessing parent's property
*/ 

// Class Expression :-

let rectangleClass = class {

}


