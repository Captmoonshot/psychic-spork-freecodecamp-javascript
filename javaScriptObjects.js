// Ways to create them.

// You can create objects in three different ways:
/*      1. Using object literal
        2. By creating instances of Object directly
        3. By using constructor function

1.
Here we create an obj called person using an object literal.
An object literal uses = {} to create an object directly using the 
key:value pair. 

You can also define functions, arrays, and even objects inside an object.
And access items using the .dot and []bracket notation.
*/

const person = {
    name: "Mike",
    age: 22,
    hobbies: ["reading", "games", "coding"],
    greet: function() {         // this is like an instance method
        console.log("Hello");
    },
    score: {
        maths: 96,
        science: 80
    }
};

console.log(typeof person);     // object

console.log(person.name);
console.log(person["hobbies"][0]);
person.greet();
console.log(person.score["maths"]);

/*
1.
Here we create an instance of the Object directly using
the new keyword and Object().

Syntax:

const objectName = new Object();
*/
const person = new Object ({
    name: "Mike",
    age: 22,
    hobbies: ["reading", "games", "coding"],
    greet: function() {
        console.log("Hello");
    },
    score: {
        maths: 96,
        science: 80
    }
});

console.log(typeof person);     // object

console.log(person.name);
console.log(person["hobbies"][0]);
person.greet();
console.log(person.score["maths"]);

/*
3.
By using constructor function:
*/
function Person() {
    this.name = "Mike",
    this.age = 22,
    this.hobbies = ["reading", "games", "coding"],
    this.greet = function() {
        console.log("Hello");
    }
    this.score = {
        maths: 96,
        science: 80
    }
}

const person = new Person();

console.log(typeof person);     // object

console.log(person.name);
console.log(person["hobbies"][0]);
person.greet();
console.log(person.score["maths"]);

/* In the above example, the Person() constructor function is used to
create an object using the `new` keyword.  

This does not feel as natural as the first two methods.*/

