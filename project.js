'use strict';

let destinationArray = ["China", "Hong Kong", "France", "London", "Italy"];
let restaurantArray = ["MCD", "KFC", "Pizza Hut", "Wendy's", "Taco Bell"];
let transportationArray = ["Car", "Plane", "Boat", "Train", "Tesla"];
let entertainmentArray = ["Hiking", "Karaoke", "Volleyball", "Reading", "Sight seeing"]

let destinationArray = ["China", "Hong Kong", "France", "London", "Italy"];
let china = destinationArray[0];
console.log(destinationArray[0]);

let destinationArray = ["China", "Hong Kong", "France", "London", "Italy"];
let randomNumber = Math.floor((Math.random () * destinationArray.length));
console.log(randomNumber);
console.log(destinationArray[randomNumber]);

let restaurantArray = ["MCD", "KFC", "Pizza Hut", "Wendy's", "Taco Bell"];
let randomNumber1 = Math.floor((Math.random () * restaurantArray.length));
console.log(randomNumber1);
console.log(restaurantArray[randomNumber1]);

let transportationArray = ["Car", "Plane", "Boat", "Train", "Tesla"];
let randomNumber2 = Math.floor((Math.random () * transportationArray.length));
console.log(randomNumber2);
console.log(transportationArray[randomNumber2]);

let entertainmentArray = ["Hiking", "Karaoke", "Volleyball", "Reading", "Sight seeing"];
let randomNumber3 = Math.floor((Math.random () * entertainmentArray.length));
console.log(randomNumber3);
console.log(entertainmentArray[randomNumber3]);

// not a function and missing the random part...
let destinationArray = ["China", "Hong Kong", "France", "London", "Italy"];
let randomNumber = Math.floor((Math.random () * destinationArray.length));
for(let i = 0; i < destinationArray.length; i++){
    if(destinationArray[i] === "Hong Kong"){
        console.log("Let's go!");
    }
    else {
        console.log("Don't want to go there.");
    }
}

// tried with the below function. Could not get it right. 
let topChoice = "Hong Kong";
// let location = getLocationPreference(topChoice);

function getLocationPreference(topChoice){
    if(topChoice === "Hong Kong"){
        return true;
    }
    else{
        return false;
    }
}
console.log(getLocationPreference);

// Know I need to be able to display the random choices the user is satisfied with. But how? Would need to make above functions work first. 
// Once that is complete, then I would console.log my choices. 


console.log("We will be going to " + destination + " eating " + restaurant + " by " + transportation + " and will be doing " + entertainment + " after ");