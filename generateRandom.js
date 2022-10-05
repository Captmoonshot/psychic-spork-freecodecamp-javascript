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

