'use strict';

// let destinationArray = ["China", "Hong Kong", "France", "London", "Italy"];
// let restaurantArray = ["MCD", "KFC", "Pizza Hut", "Wendy's", "Taco Bell"];
// let transportationArray = ["Car", "Plane", "Boat", "Train", "Tesla"];
// let entertainmentArray = ["Hiking", "Karaoke", "Volleyball", "Reading", "Sight seeing"]

// let destinationArray = ["China", "Hong Kong", "France", "London", "Italy"];
// let china = destinationArray[0];
// console.log(destinationArray[0]);

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
