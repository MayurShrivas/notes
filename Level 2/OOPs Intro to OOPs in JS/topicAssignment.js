/*
Assignment 1. Program to demonstrate default and parameterized constructor.
*/

//Solution :

class Mobile {
    constructor() {
        this.make = 'Samsung';
        this.model = 'Galaxy S1';
        this.cost = 10000
        this.ramInGB = '8'
    }
}

const defaultMobile = new Mobile();
console.log(defaultMobile)

// Parametrized Constructor
// Default constructor


class Mobile {
    constructor(make, model, cost, ramInGB) {
        this.make = make
        this.model = model
        this.cost = cost
        this.ramInGB = ramInGB
    }
}

const galaxyS1 = new Mobile("Samsung", "Galaxy S1", 10000, "8");
const galaxyS2 = new Mobile("Samsung", "Galaxy S2", 20000, "12");
console.log(galaxyS1)
console.log(galaxyS2)



/*
Assignment 2. Program to demonstrate different ways of creating objects.
*/

//Solution :

// Object literal
const employee = { firstName: "Brian", lastName: "Dean", age: 50, company: "Google" };
console.log(employee)


// Keyword - new
const facebookEmployee = new Object();
facebookEmployee.firstName = "Haron";
facebookEmployee.lastName = "Ben";
facebookEmployee.age = 24;
facebookEmployee.company = "Facebook";
console.log(facebookEmployee)


// Using Object.create() method
const employee1 = {
    details: function () {
        console.log(`FirstName: ${this.firstName}, LastName:
        ${this.lastName}, Company: ${this.company}`)
    }
}

const e = Object.create(employee1)
e.firstName = "Harry"
e.lastName = "Cruise"
e.company = "Amazon"
e.details();