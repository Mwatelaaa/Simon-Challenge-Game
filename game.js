var buttonColours = ["red", "blue", "green", "yellow"]

var gamePattern = []

function nextSequence() {
    var randomNumber = Math.random();
    randomNumber = randomNumber * 4;
    randomNumber = Math.floor(randomNumber);
    console.log(randomNumber);
}

var randomChosenColour = buttonColours[nextSequence];

gamePattern.push(randomChosenColour);
console.log(gamePattern);
