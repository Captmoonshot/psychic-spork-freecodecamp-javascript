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

