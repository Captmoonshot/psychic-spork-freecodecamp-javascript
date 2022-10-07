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