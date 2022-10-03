// Stand in Line
    // In computer science a queue is a data structure that keeps elements in order.
    // Existing elements are taken off the front and new elements are added to the back of the queue.
    // We simulate that here.

function standInLine(arr, item) {
    arr.push(item);
    return [arr.shift(), arr];
}

var testArray = [1, 2, 3, 4, 5];

console.log("Old List: " + testArray);

var returnValues = standInLine(testArray, 6);
var popped = returnValues[0];
var newList = returnValues[1];


console.log("Popped: " + popped + "\n" + "newList: " + newList);



