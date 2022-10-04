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