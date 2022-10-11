// Understand the Differences Between import and require
    // In the past we would use the require() to get code located in other files,
    // but now we have the export and import
// Inside of string_function.js we have an exportable function
// called capitalizeString().

// I had some trouble running this and ran into a similar issue as this:
// https://stackoverflow.com/questions/58384179/syntaxerror-cannot-use-import-statement-outside-a-module
// What I did to solve the problem is within the freecodecamp directory, run:
// npm init -y
// And then in package.json add:
// {
//      "type": "module",   
// }
// and then make sure from "./string_function.js" inclues the .js extension
import { capitalizeString } from "./string_function.js";

const cap = capitalizeString("hello!");
console.log(cap);

// Use * to Import Everything from a File


