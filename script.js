// ----------------------- LIGHTNING EXERCISE --------------------------//
// Use the basicProj command to create a new directory with an html, css, and js file

// --------------------- VARIABLES --------------------------//
// Variables are used to store pieces of data so we can use them later
var age = 27;
var name = "Jordan";

var bioSentence = "My name is " + name + " and I am " + age + " years old.";

var professionalBio = "Greetings earthlings I am " + name;
// What the heck is a console.log?
// console.log(bioSentence)

// We can reassign that variable to whatever we want
name = "Xena";
bioSentence = "My name is " + name + " and I am " + age + " years old.";
// console.log(name)
// console.log(bioSentence)

name = 11111111111;
// console.log(name)

// JavaScript evaluates from left to right! So if we store a math problem in a variable, the actual value of the variable will be its sum
var sum = 2 + 2;
// console.log("this should be sum", sum)

sum = 2 + 2 + "taco" + 2;
// console.log(sum)

// ----------------------------- DATA TYPES ---------------------------------------//
// number (with math!)
var age = 134;

// strings
var favoriteFood = "tacos";

// booleans
var likesDogs = true;

// String interpolation
var aboutMe = `I am ${age} years old. My favorite food is ${favoriteFood}. Do I like dogs? ${likesDogs} ${3 +
  2}`;
// console.log(aboutMe)

// ------------------------------- LIGHTNING EXERCISE ------------------------------//

// Instantiate and assign a variable called `myName` that holds the value of your name as a string
var myName = "Jordan";
// Instantiate and assign a variable called `numberOfPets` that stores the number of pets you have as a number.
// var numberOfPets;
// numberOfPets = 1;
var numberOfPets = 1;
// Instantiate and assign a variable called `birthday` that holds your birthday as a string
var birthday = "August 31";

// Use string interpolation to build a sentence about yourself using the three variables you just created
var mySentence = `My name is ${name} and I have ${numberOfPets} pet. My birthday is ${birthday}`;
// Log the sentence to the console
// console.log(mySentence)

// ------------------------------ ARRAYS -------------------------------------//
// create a new array of favorite foods and log each one to the console
var favoriteFoods = ["chicken tacos", "veggie tacos", "bean tacos", 4, true];
// console.log(favoriteFoods)
var favoriteFoodSentence = `My top two favorite foods are ${
  favoriteFoods[0]
}, ${favoriteFoods[1]}, ${favoriteFoods[2]}`;

console.log(favoriteFoodSentence);

// Use .push() to add some foods to your array
console.log("before sushi", favoriteFoods);
favoriteFoods.push("sushi");
console.log("after sushi", favoriteFoods);

// Reassign one of the elements in your array
favoriteFoods[3] = "beef tacos";
console.log("after reassigning 4 to beef tacos", favoriteFoods);

//------------------------------- LIGHTNING EXERCISE-----------------------//
// Create an array of your pet names
var petNames = ["Hoagie", "Patches", "Sparky", "Rover"];
// Use square bracket notation to log each of your pet's names to the console.
// console.log(petNames[0])
// console.log(petNames[1])
// console.log(petNames[2])
// console.log(petNames[3])

// ----------------------------- OBJECTS ---------------------------------//
// Objects to represent pets
// var petInfo = ["Hoagie", "Dog", 3]

var hoagieInfo = {
  name: "Hoagie",
  species: "Dog",
  age: 3,
  nicknames: ["Professor Stroodles", "Bubba", "Jim"],
  food: {
    brand: "Purina",
    servingSize: "3/4 cup",
    timing: "Twice a day"
  }
};

console.log(hoagieInfo.nicknames[1]);
console.log(hoagieInfo.food.brand);

console.log(hoagieInfo.name);

// Dot notation vs. bracket notation
console.log(`${hoagieInfo["name"]} is a ${hoagieInfo["species"]}`);

hoagieInfo.favoriteToy = "Tennis ball";

// hoagieInfo.name = "Professor Stroodles"

// We can put objects inside an array! And objects can have arrays as values.
var names = ["jordan", "melody"];
var cohortTwoPets = [
    {
        owner: "Alex",
        name: "Morose",
        age: 5
    },
    {
        owner: "Levi",
        name: "Tink",
        age: 12
    }
]

console.log(cohortTwoPets)
console.log(cohortTwoPets[0])
console.log(cohortTwoPets[0].name)



// ------------------------------------ BREAK -----------------------------------//
// ------------------------- lightning exercises --------------------//
// Given two options of data structures - array or object - which should you use? You need to represent a red 2015 Ford Mustang in your code.

// Given two options of data structures - array or object - which should you use? You need to store list of animal names in a shelter. The names are "Kippers", "Jack", "Gypsy", "Angus", "Seymour Bouts", and "Sharky".

// Define an object for four family members, and put each object in an array named familyMembers. Each family member object that you create should have the same keys on them, but the values will be different.

// Given the object below, output the wardrobe's width to the console
// Output its manufacturer
// Output the first item in its `contents` array to the console
var wardrobe = {
  height: 80,
  manufacturer: "Killibrew & Sons",
  contents: ["Dress shirt", "Jeans", "Suit", "Skirt", "Tennis shoes"],
  depth: 38,
  width: 50
};

// -------------------------------- CONDITIONALS -----------------------------------//
// if

// if / else

// if // else if // else

// --------------------------------- LOOPS ----------------------------------------//
// ----------------------------- LIGHTNING EXERCISE -------------------------------//
// Print each value in the array to the console using square bracket notation
var alumni = ["Nick", "Charles", "Nikki", "Dale"];

// while loop
var counter = 1;

while (counter <= 5) {
  // console.log("FREE TACOS!!!", counter);
  counter = counter + 1;
}

var tacoToppings = ["beef", "lettuce", "sour cream", "cheese"];

// print each taco topping to the console with a while loop

// print each taco topping to the console with a for loop

// -------------------------- LIGHTNING EXERCISE ----------------------------------//
// Print each value in the array to the console using a for loop
var alumni = [
  "Nick",
  "Charles",
  "Nikki",
  "Dale",
  "Tommy",
  "Connor",
  "Sable",
  "Sydney",
  "Josh",
  "Joey",
  "Matt",
  "David",
  "Russ",
  "Bobby"
];

// What happens if we need to loop through an array inside an object?
var newForce = {
  founded: 2018,
  alumni: [
    "Nick",
    "Charles",
    "Nikki",
    "Dale",
    "Tommy",
    "Connor",
    "Sable",
    "Sydney",
    "Josh",
    "Joey",
    "Matt",
    "David",
    "Russ",
    "Bobby"
  ],
  instructors: ["Tommy", "Josh", "Jordan"]
};
