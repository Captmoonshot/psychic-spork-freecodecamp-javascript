// Array Iteration: 8 Methods

// forEach
[1, 2, 3].forEach(function(item, index) {
    console.log(item, index);
})

// map
    // Takes in each item in an array and maps a function to it and
    // then returns a new array.
const three = [1, 2, 3];
const doubled = three.map(function(item) {
    return item * 2;
})
console.log(doubled);

// Same as above except using Arrow function
const five = [1, 2, 3, 4, 5];
const tripled = five.map(item => item * 3);
console.log(tripled);
console.log(five);

// Filter
    // Takes in each item in an array and checks it against a condition.
    // If it returns true, it create and return a new array filled with the items
    // that returned true.
const ints = [1, 2, 3];
const evens = ints.filter(function(item) {
    return item % 2 === 0;      // Is the item an even number?
});
console.log(evens);

// As an Arrow Function
const myInts = [1, 2, 3, 4];
const myEvens = myInts.filter(item => item % 2 === 0);
console.log(myEvens);

// reduce
    // Take in an array and calculate something and move to
    // the next iteration along with the result.
const sum = [1, 2, 3].reduce(function (result, item) {
    return result + item;
}, 0);      // the 0 is to initialize the result variable to 0, and is required
console.log(sum);

// As an Arrow Function
const mySum = [1, 2, 3, 4].reduce((a, b) => {
    return a + b;
}, 0);
console.log(mySum);

// some
    // Checks the items in an array for a condition.
    // If even one item is true, it returns true.
const hasNegativeNumbers = [1, 2, 3, -1, 4].some(function(item) {
    return item < 0;
});
console.log(hasNegativeNumbers);

// As an Arrow Function
const myHasNegativeNumbers = [1, 2, 3, 4, -5].some(num => num < 0);
console.log(myHasNegativeNumbers);

// every
    // Like some, but every item has to meet the condition.
const allPositiveNumbers = [1, 2, 3].every(function(item) {
    return item > 0;
});
console.log(allPositiveNumbers);

// As an Arrow Function
const myAllPositiveNumbers = [1, 2, 3, 4, 5].every(item => item > 0);
console.log(myAllPositiveNumbers);

// find
    // Goes through every item in an array and checks it against a condition
    // and if it returns true returns those items.
const objects = [
    {id: 'a'},
    {id: 'b'},
    {id: 'c'}
];
const found = objects.find(function(item) {
    return item.id === 'b';
});
console.log(found);

// As an Arrow Function
const myObjects = [
    {id: 'a'},
    {id: 'b'},
    {id: 'c'},
    {id: 'b'}
];
const myFound = myObjects.find(obj => obj.id === 'b');
console.log(myFound);       // Just returns the first occurrence in the array

// with logical AND condition
const myObjects1 = [
    {id: 'a'},
    {id: 'b'},
    {id: 'c'},
    {
        id: 'b',
        name: 'Sammy'
    }
];
const myFound1 = myObjects1.find(obj => obj.id === 'b' && obj.name === 'Sammy');
console.log(myFound1);

// findIndex
    // Returns the index of the item meeting a condition
    // from the array.
const objects1 = [
    {id: 'a'},
    {id: 'b'},
    {id: 'c'}
];
const foundIndex = objects1.findIndex(function(item) {
    return item.id === 'b'; 
});
console.log(foundIndex);

// As an Arrow Function
const myObjects1 = [
    {id: 'a'},
    {id: 'b'},
    {id: 'c'},
    {
        id: 'b',
        name: 'Sammy'
    }
];
const foundIndex1 = myObjects1.findIndex(item => item.id === 'b' && item.name === 'Sammy');
console.log(foundIndex1);       // 3

