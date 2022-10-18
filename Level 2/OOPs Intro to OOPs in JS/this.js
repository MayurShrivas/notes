//printThis will call on global object.
function prinThis () {
    console.log (this)
}
//prinThis (); //Jis jagah se call hota hai this usko represent karta hai.

let laptop4 = {
    make : 'Dell',
    print : function () {
        console.log (this);
    }
}
//laptop4.print();

function Laptop (type) {
    this.make = type;
    this.ram = '8GB'
    this.print = function () { // function method
        console.log (this);                
    }
    this.print ();
}

//let laptop1 = new Laptop ('Dell'); 

/* 
Output will be --> Laptop { make: 'Dell', ram: '8GB', print: [Function (anonymous)] }
This will print particular object because caller is this object.
*/

function Laptop (type) {
    this.make = type;
    this.ram = '8GB'
    this.print = () => { // ( => ) fat arrow method    
        console.log (this);                
    }
}

//let laptop1 = new Laptop ('Dell');
//laptop1.print(); // This will give same output.

function Laptop (type) {
    this.make = type;
    this.ram = '8GB'
    this.addCoreAndPrint = function(core) {     
        this.core = core;
        //console.log(this); // This will output laptop object. here reference/caller is laptop1.
        //function print () {  // ---> This will print global onject.
        let print = () => {  //--> This will print object
            console.log(this);
        }
        print ();                
    }
}
let laptop1 = new Laptop ('Dell');
// laptop1.addCoreAndPrint (4);

/*
this inside function -> caller reference would be this keyword.
this inside arrow function -> this keyword would give value of object where it is defined.    
*/

function print () {
    console.log (this); // this is by default giving global object
}

let print1 = () => {
   console.log(this); // this is giving exports part because print1 function is defined inside scopes. {} showing blank due to no object.  
}
print ();
console.log("----------------------")
print1 ();








