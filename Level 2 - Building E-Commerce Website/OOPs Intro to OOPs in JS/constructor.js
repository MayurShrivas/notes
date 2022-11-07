// Constructor => It is a way to create an Object.

function Laptop (type) {
    this.make = type;
    this.ram = '8GB';
    
}

let laptop1 = new Laptop ('Dell');
let laptop2 = new Laptop ('Apple');
let laptop3 = new Laptop ('HP');

console.log (laptop1);
console.log (laptop2);
console.log (laptop3);

// Constructor helps us to reduce repeated work.