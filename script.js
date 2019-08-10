// ----------------------- LIGHTNING EXERCISE --------------------------//
// Use the basicProj command to create a new directory with an html, css, and js file


// --------------------- VARIABLES --------------------------//
// Variables are used to store pieces of data so we can use them later

// What the heck is a console.log?

// We can reassign that variable to whatever we want

// JavaScript evaluates from left to right! So if we store a math problem in a variable, the actual value of the variable will be its sum





// ----------------------------- DATA TYPES ---------------------------------------//
// number (with math!)

// strings
// What happens when you do math with a string?
// String interpolation

// booleans



// ------------------------------- LIGHTNING EXERCISE ------------------------------//

// Instantiate and assign a variable called `myName` that holds the value of your name as a string
// Instantiate and assign a variable called `numberOfPets` that stores the number of pets you have as a number.
// Instantiate and assign a variable called `birthday` that holds your birthday as a string
// Use string interpolation to build a sentence about yourself using the three variables you just created
// Log the sentence to the console




// ------------------------------ ARRAYS --------------------------------------//
// create a new array of favorite foods and log each one to the console

// Use .push() to add some foods to your array

// Reassign one of the elements in your array



//------------------------------- LIGHTNING EXERCISE-----------------------//
// Create an array of your pet names
// Use square bracket notation to log each of your pet's names to the console.


// ----------------------------- OBJECTS ---------------------------------//
// Objects to represent people and things in a coffee shop (barista, cup of coffee, customer, etc)

// Dot notation vs. bracket notation

// We can put objects inside an array! And objects can have arrays as values.



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
}



// -------------------------------- CONDITIONALS -----------------------------------//
// if

// if / else

// if // else if // else

// --------------------------------- LOOPS ----------------------------------------//
// ----------------------------- LIGHTNING EXERCISE -------------------------------//
// Print each value in the array to the console using square bracket notation
var alumni = ["Nick", "Charles", "Nikki", "Dale"]

// while loop
var counter = 1;

while(counter <= 5){
    console.log("FREE TACOS!!!", counter);
    counter = counter + 1;
}

var tacoToppings = ["beef", "lettuce", "sour cream", "cheese"]

// print each taco topping to the console with a while loop

// print each taco topping to the console with a for loop

// -------------------------- LIGHTNING EXERCISE ----------------------------------//
// Print each value in the array to the console using a for loop
var alumni = ["Nick", "Charles", "Nikki", "Dale", "Tommy", "Connor", "Sable", "Sydney", "Josh", "Joey", "Matt", "David", "Russ", "Bobby"]

// What happens if we need to loop through an array inside an object?
var newForce = {
    founded: 2018,
    alumni: ["Nick", "Charles", "Nikki", "Dale", "Tommy", "Connor", "Sable", "Sydney", "Josh", "Joey", "Matt", "David", "Russ", "Bobby"],
    instructors: ["Tommy", "Josh", "Jordan"]
}
