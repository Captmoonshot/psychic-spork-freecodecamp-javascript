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
    