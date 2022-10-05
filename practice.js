console.log("hello world")

var number = 5; // this is an inline comment
console.log(number);

/* this is a 
multi-line comment */

/* Data Types:
undefined, null, boolean, string, symbol, number, object
*/

var myName = "Sam";
let ourName = "freecodecamp";
const pi = 3.14;

console.log(myName, ourName, pi);

// What are the differences between var, let, and const?
// var is able to be used throughout the whole program.
// let is scope-dependent
// const is a variable that should never change

var myName = "Lee";
// const pi = 2;

// Difference between declaring a variable and assigning it

var a; // declare
var b = 2; // declare + assign

a = 7; // assign

b = a;  

console.log("this is a: ", a);
console.log("assigning a to b.");
console.log("this is now b: ", b);

console.log();
console.log();
console.log();

// Initialize 3 variables
var a = 5;
var b = 10;
var c = "I am a";

a = a + 1;
b = b + 5;
c = c + " String."; // string concatenation

console.log(a, b, c);

console.log();
console.log();

// Case-sensitivity in variables
//      variable names are case-sensitive in JS
//      the declarations and assignments don't match here

var StUdLyCapVar;
var properCamelCase;
var TitleCaseOver;

STUDLYCAPVAR = 10;
PRoperCAmelCAse = "A Sting";
tITLEcASEoVER = 9000;

console.log();

function ourReusableFunction() {
    console.log("Heyya, World");
}

ourReusableFunction();

console.log();

function ourFunctionWithArgs(a, b) {
    console.log(a - b);
}

ourFunctionWithArgs(10, 5);

console.log();

// Global Scope and Functions
    // oopsGlobal is local to func1() therefore will when you run
    // typeof oopsGlobal will return "undefined".
var myGlobal = 10;

function func1() {
    var oopsGlobal = 5;
}

function func2() {
    var output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
        output += "oopsGlobal " + oopsGlobal;
    }
    console.log(output);
}

func1();
func2();

console.log();

console.log("Type of oopsGlobal: ", typeof(oopsGlobal)); // undefined

console.log();

// Local Scope and Functions

function myLocalScope() {
    var myVar = 5;
    console.log(myVar);
}

myLocalScope();

// console.log(myVar);     // ReferenceError: myVar is not defined

console.log();

// Local vs. Global Scope
    // if both types have same name then Local variable will have precedence

var outerWear = "T-shirt";

function myOutFit() {
    return outerWear;
}

console.log(myOutFit());    // T-shirt

console.log();

// Rewrite the same function

function myOutFit2() {
    var outerWear = "sweater";
    return outerWear;
}

console.log(myOutFit2());

console.log();

// Local variable overwrites Global

// Return from a function

function minusSeven(num) {
    return num - 7;
}

console.log(minusSeven(10));

console.log();

// Understanding Undefined Value Returned from Function

var sum = 0;    // Global

function addThree() {
    sum += 3;
}

// if you console.log() the above you get undefined because a function needs to
// console.log() something or actually return something 

console.log(addThree()); // undefined

console.log();


// Assigning a Returned Value
    // works just like Python

var changed = 0;

function change(num) {
    return (num + 5) / 3;
}

changed = change(10);
console.log(changed);

console.log();

// Stand in Line
    // In computer science a queue is a data structure that keeps elements in order.
    // Existing elements are taken off the front and new elements are added to the back of the queue.
    // We simulate that here.

function nextInLIne(arr, item) {
    arr.push(item);
    return arr.shift();
}

var testArr = [1, 2, 3, 4, 5];

console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLIne(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

console.log();

// Boolean Values
    // true or false

// If statement

function ourTrueOrFalse(isItTrue) {
    if (isItTrue) {
        return "Yes, it's true";
    }
    return "it's false";
}

console.log(ourTrueOrFalse(true));
console.log(ourTrueOrFalse(false));

console.log();

// Comparison with Equality Operator

function isItEqual(val) {
    if (val == 12){
        return "Equal";
    }
    return "Not equal";
}

console.log(isItEqual(10));
console.log(isItEqual(12));

console.log();

// Conditional Statements
function testEqual(val) {
    if (val == 12) {
        return "Equal";
    }
    return "Not Equal";
}

// Always use parenthesis after if

// Strict Equality Operator ===
function testStrict(val) {
    if (val === "7") {
        return "Equal";
    }
    return "Not Equal";
}

console.log(testStrict("7"));   // Equal
console.log(testStrict(7));     // Not Equal

// What's the difference between == and === ?
// The == does type conversion so 7 == "7" is true
// But === does not do type conversion so 7 === "7" false

console.log();

// Practice Comparing Values
function compareEqual(a, b) {
    if (a == b) {
        return "Equal";
    }
    return "Not Equal";
}

console.log(compareEqual(7, 7));        // Equal
console.log(compareEqual(7, "7"));      // Equal

console.log();

// Inequality Operator
function testNotEqual(a, b) {
    if (a != b) {
        return "Not Equal";
    }
    return "Equal";
}

console.log(testNotEqual(9, 10));       // Not Equal
console.log(testNotEqual(9, "9"));      // Equal

console.log();

// The != also does type conversion like ==

// Strict Inequality !== does not do type conversion

function testStrictNotEqual(a, b) {
    if (a !== b) {
        return "Not Equal";
    }
    return "Equal";
}

console.log(testStrictNotEqual(9, 10));     // Not Equal
console.log(testStrictNotEqual(9, "9"));    // Not Equal
console.log(testStrictNotEqual(9, 9));      // Equal

console.log();

// Comparison Operator

function testGreaterThan(val) {
    if (val > 100) {
        return "Over 100";
    }
    if (val > 10) {
        return "Over 10";
    } else {
        return "Too tiny";
    }
}

console.log(testGreaterThan(15));
console.log(testGreaterThan(101));
console.log(testGreaterThan(9));

console.log();

// Greater than or equal to

function testGreaterOrEqual(val) {
    if (val >= 20) {
        return "20 or over";
    }
    if (val >= 10) {
        return "10 or over";
    }
    return "Less than 10";
}

console.log(testGreaterOrEqual(25));

console.log();

// Same logic for less than etc.

// AND operator
    // Suppose we want to check if a value is between 25 and 50.
    // Use the && operator.
function testLogicalAnd(val) {
    if (val <= 50 && val >= 25) {
        return "Yes";
    }
    return "No";
}

console.log(testLogicalAnd(50));

console.log();

// OR operator ||

function testOr(val) {
    if (val < 10 || val > 20) {
        return "Outside";
    }
    return "Inside";
}

console.log(testOr(100));
console.log(testOr(19));

console.log();

// Else statements
function testElse(val) {
    var result = "";
    if (val > 5) {
        result = "Bigger than 5";
    } else {
        result = "5 or smaller";
    }
    return result;
}

console.log(testElse(5));
console.log();

// Else-If Statements
function testElseIf(val) {
    if (val > 10) {
        return "Greater than 10";
    } else if (val < 5) {
        return "Less than 5";
    } else {
        return "Between 5 and 10";
    }
}
console.log(testElseIf(6));
console.log();

// Else-If is an alternative to plain If-Else statements
// But order matters with If-Else statements

function orderMyLogic(val) {
    if (val < 10) {
        return "Less than 10";
    } else if (val < 5) {
        return "Less than 5";
    } else {
        return "Greater than or Equal to 10";
    }
}
console.log(orderMyLogic(9));
console.log(orderMyLogic(3));
console.log();

// If you try to run the above code with orderMyLogic(3) you won't get the expected result because
// the order matters with if-else statements, so the conditional if (val < 5) must come before 
// if (val < 10).

function orderMyLogic(val) {
    if (val < 5 ) {
        return "Less than 5";
    } else if (val < 10) {
        return "Less than 10";
    } else {
        return "Greater than or equal to 10";
    }
}
console.log(orderMyLogic(3));       // Less than 5
console.log();

// Exercise: Write chained if-else statements

function getSize(num) {
    if (num < 5) {
        return "Tiny";
    } else if (num < 10) {
        return "Small";
    } else if (num < 15) {
        return "Medium";
    } else if (num < 20) {
        return "Large";
    } else {
        return "Huge";
    }
}
console.log(getSize(25));   // Huge
console.log();

// Exercise: Golf Score

/* Strokes      Return
    1           "Hole in One"
    <= par - 2  "Eagle"
    par - 1     "Birdie"
    par         "Par"
    par + 1     "Bogey"
    par + 2     "Double bogey"
    >= par + 3  "Go Home!"
*/

var names = ["Hole-in-One!", "Eagle", "Birdie", "Par",
            "Bogey", "Double bogey", "Go Home!"]

function golfScore(par, strokes) {
    if (strokes == 1) {
        return names[0];
    } else if (strokes <= par - 2) {
        return names[1];
    } else if (strokes == par - 1) {
        return names[2];
    } else if (strokes == par) {
        return names[3];
    } else if (strokes == par + 1) {
        return names[4];
    } else if (strokes == par + 2) {
        return names[5];
    } else if (strokes >= par + 3) {
        return names[6];
    }
}
console.log(golfScore(5, 5));   // Par
console.log(golfScore(5, 1));   // Hole-in-One
console.log(golfScore(5, 8));   // Go Home!
console.log();

// Switch statements
    // An alternative to If-Else statements

function caseInSwitch(val) {
    var answer = "";
    switch(val) {
        case 1:  // no type conversion, val has to be integer 1
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "delta";
            break;
    }
    return answer;
}

console.log(caseInSwitch(1));       // alpha
console.log(caseInSwitch("1"));     // nothing happens because "1" isn't a case
console.log();

// Default Option in Switch Statements
    // kind of like else in an If-Else statement

function switchOfStuff(val) {
    var answer = "";
    switch(val) {
        case "a":
            answer = "apple";
            break;
        case "b":
            answer = "bird";
            break;
        case "c":
            answer = "cat";
            break;
        default:
            answer = "stuff";
            break;
    }
    return answer;
}
console.log(switchOfStuff("c"));    // cat
console.log(switchOfStuff("whatever"));     // stuff
console.log();

// Multiple Identical Options in Switch Statements

function sequentialSizes(val) {
    var answer = "";
    switch(val) {
        case 1:
        case 2: 
        case 3:
            answer = "Low";
            break;
        case 4:
        case 5:
        case 6:
            answer = "High";
            break;
    }
    return answer;
}
console.log(sequentialSizes(2));    // Low
console.log(sequentialSizes(5));    // High
console.log();

// Return Boolean values from functions

function isLess(a, b) {
    if (a < b) {
        return true;
    } else {
        return false;
    }
}
console.log(isLess(10, 5));

// However all comparison operators return a Boolean so a better way to write it would be
function isLessBetter(a, b) {
    return (a < b);
}
console.log(isLessBetter(10, 5));       // false
console.log(isLessBetter(1, 3));        // true

// Return early from functions with the return statement

function abTest(a, b) {
    if (a < 0 || b < 0) {
        return undefined;
    }
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}
console.log(abTest(3, 4));      // 14
console.log(abTest(-3, 4));     // undefined
console.log();

// Counting Cards

var count = 0;
function cc(card) {
    switch(card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count--;
            break;
    }
    var holdbet = "Hold";
    if (count > 0) {
        holdbet = "Bet";
    }
    return count + " " + holdbet;
}
cc(2); cc("K"); cc(10); cc("K"); cc("A");
console.log(cc(4));         // Hold
console.log();

// Build JavaScript Objects
    // kind of like arrays, but instead of using indexes 
    // you use properties

var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
};

// Access Object Properties with Dot Notation
var testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
};

var hatValue = testObj.hat      // ballcap
var shirtValue = testObj.shirt  // jersey
console.log(hatValue, shirtValue);
console.log();

// Access Object Properties with Bracket Notation
    // the bracket notation is required if the name of the value or key of the value
    // has a space in it like here
var testObj = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
};

var entreeValue = testObj["an entree"];
var drinkValue = testObj["the drink"];
console.log(entreeValue, drinkValue);
console.log();

// Accessing Object Properties with Variables
var testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
};

var playerNumber = 16;
var player = testObj[playerNumber];
console.log(player);                    // Montana

// Updating Object Properties using dot notation
var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
};
console.log(ourDog["name"]);
ourDog.name = "Happy Camper";
console.log(ourDog["name"]);
console.log();

// Add New Properties to an Object
    // using dot notation or bracket notation
var ourDog = {
    "name": "Camper",
    "leges": 4,
    "tails": 1,
    "friends": ["everything!"]
};
ourDog.bark = "bow-wow";
console.log(ourDog);
console.log();

// Delete Properties From an Object using the delete keyword
var ourDog = {
    "name": "Camp",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"],
    "bark": "bow-wow"
};
console.log(ourDog);
delete ourDog.bark;
console.log(ourDog);
console.log();

// Using Objects for Lookups
    // A good alternative to switch statements
function phoneticLookUp(val) {
    var result = "";
    switch(val) {
        case "alpha":
            result = "Adams";
            break;
        case "delta":
            result = "Denver";
            break;  
    }
    return result;
}
// instead of the verbose switch statement
function phoneticLookUp(val) {
    lookup = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta": "Denver"
    };
    return lookup[val];
}
console.log(phoneticLookUp("alpha"));   // Adams
console.log(phoneticLookUp("delta"));   // Denver
console.log();

// Check Objects for Properties using the
    // .hasOwnProperty() method
var myObj = {
    "gift": "pony",
    "pet": "kitten",
    "bed": "sleigh"
};
function checkObj(checkProp) {
    if (myObj.hasOwnProperty(checkProp)) {
        return myObj[checkProp];
    } else {
        return "Not Found";
    }
}
console.log(checkObj("gift"));      // Pony
console.log(checkObj(1));           // Not Found
console.log();

// Manipulating Complex Objects
    // Just as we can store arrays inside of objects
    // we can also store objects inside of arrays
var myMusic = [
    {
        "artist": "Billy Joel",
        "title": "Piano Man",
        "release_year": 1973,
        "formats": [
            "CD",
            "8T",
            "LP"
        ],
        "gold": true
    },
    {
        "artist": "Sammy Lee",
        "title": "Spam Sandwich",
        "release_year": 2003,
        "formats": [
            "YouTube video"
        ]
    }
];
console.log(myMusic[1]);
console.log();

// Accessing Nested Objects
    // using dot and bracket notation
var myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside": {
            "trunk": "jack"
        }
    }
}
var gloveBoxContents = myStorage.car.inside["glove box"];
console.log(gloveBoxContents);
console.log();

// Accessing Nested Arrays
var myPlants = [
    {
        type: "flowers",
        list: [
            "rose",
            "tuplip",
            "dandelion"
        ]
    },
    {
        type: "trees",
        list: [
            "fir",
            "pine",
            "birch"
        ]
    }
];
// try to access the second tree
var secondTree = myPlants[1].list[1];
console.log(secondTree);    // pine
console.log();

// Record Collection
var collection = {
    "2548": {
        "album": "Slippery When Wet",
        "artist": "Bon Jovi",
        "tracks": [
            "Let It Rock",
            "You Give Love a Bad Name"
        ]
    },
    "2468": {
        "album": "1999",
        "artist": "Prince",
        "tracks": [
            "1999",
            "Little Red Corvette"
        ]
    },
    "1245": {
        "artist": "Robert Palmer",
        "tracks": []
    },
    "5439": {
        "album": "ABBA Gold"
    }
}
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

function updateRecords(id, prop, value) {
    if (value === "") {
        delete collection[id][prop];
    } else if (prop === "tracks") {
        collection[id][prop] = collection[id][prop] || [];
        collection[id][prop].push(value);
    } else {
        collection[id][prop] = value;
    }
    return collection;
}

// test it out
console.log(updateRecords(2468, "tracks", "test"));
console.log(updateRecords(5439, "artist", "ABBA"));
console.log();

// Iterate with While Loops
var myArray = [];
var i = 0;
while (i < 5) {
    myArray.push(i);
    i++;
}
console.log(myArray);
console.log();

// Iterate with For Loops
    // You can do the same as above using a for-loop
var myArray = [];
for (var i = 0; i < 5; i++) {
    myArray.push(i);
}
console.log(myArray);
console.log();
// all you're doing is putting together within the parentheses
// the var i = 0 (the initializer); i < 5 (the condition); i++ (the increment).

// Iterate Odd Numbers with a For-Loop
function oddNumbers() {
    var oddArray = [];
    for (var i = 1; i < 10; i+=2) {
        oddArray.push(i);
    }
    return oddArray;
}
console.log(oddNumbers());
console.log();

// Count Backwards with a For-Loop
var ourArray = [];
for (var i=10; i>0; i-=2) {
    ourArray.push(i);
}
console.log(ourArray);
console.log();

// Iterate through an Array with a For-Loop
var ourArr = [9, 10, 11, 12];
var ourTotal = 0;

for (var i=0; i < ourArr.length; i++) {
    ourTotal += ourArr[i];
}
console.log(ourTotal);
console.log();

// Nesting For-Loops
function multiplyAll(arr) {
    var product = 1;
    for (var i=0; i < arr.length; i++) {
        for (var j=0; j < arr[i].length; j++) {
            product *= arr[i][j];
        }
    }
    return product;
}
var result = multiplyAll([[1, 2], [3, 4], [5, 6]]);

console.log(result);
console.log();

// Iterate with Do-While Loop
    // We know that a while loop works in the following way
var myArray = [];
var i = 10;

while(i < 5) {
    myArray.push(i);
    i++;
}

console.log(i, myArray);
// This while loop never starts because it's initialized at 10 and the condition specifies
// while i < 5.

// A regular while loop always checks the condition before trying to run the loop.

// A Do-While Loop on the otherhand will always run the loop one time before checking the condition.
// So if we rewrote the above while loop to a do-while loop:
var myArray = [];
var i = 10;

do {
    myArray.push(i);
    i++;
} while (i < 5)

console.log(i, myArray);    // 11 [10]
console.log();
// This works because it runs the loop before checking the condition.

// Exercise: Profile Lookup

var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "099437284",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "04583754",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
]

function lookUpProfile(name, prop) {
    for (var i = 0; i < contacts.length; i++) {
        if (contacts[i].firstName === name) {
            return contacts[i][prop] || "No such property";
        }
    }
    return "No such contact";
}
var data1 = lookUpProfile("Akira", "likes");
var data2 = lookUpProfile("Akira", "address");  // No such property
var data3 = lookUpProfile("Jane", "likes");     // No such contact
console.log(data1);
console.log(data2);
console.log(data3);

// Generate Random Fractions using Math.random()
function randomFraction() {
    return Math.random();
}
console.log(randomFraction());
console.log();

// Generate Random Whole Numbers
    // The floor function cuts of the decimal part to return just the integer
var randomNumberBetween0and19 = Math.floor(Math.random() * 20);
function randomWholeNum() {
    return Math.floor(Math.random() * 10);  // The * 10 makes it a number between 0 and 9
}
console.log(randomWholeNum());
console.log();

// Generate a Range of Random Numbers
function ourRandomRange(ourMin, ourMax) {
    return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
}
ourRandomRange(1, 9);
