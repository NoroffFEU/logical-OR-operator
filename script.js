// requirements: 
// cat
// under 2
// friendly
var petType = "cat";
var age = 1;
var isFriendly = true;

if ((petType !== "cat") || (age >= 2) || (isFriendly === false)) {
    console.log("Pet NOT accepted");

    if (petType !== "cat") {
        console.log("Pet must be a cat");
    }

    if (age >= 2) {
        console.log("Pet must be under 2");
    }

    if (isFriendly !== true) {
        console.log("Pet must be friendly");
    }
}
else {
    console.log("Pet accepted");
}



// example 2
var number = 25;

// 10, 14, 25

if (number === 10 || number === 14 || number === 25) {
    console.log("Winning number");
}
else {
    console.log("Not a winning number");
}