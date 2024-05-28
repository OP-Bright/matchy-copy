/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var animal = {};

animal.species = "Komodo Dragon";

animal["name"] = "Griz";

animal.noises = [];

console.log(animal);

//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var noises = [];

noises[0] = "Hiss";

noises.push("Chomp");

noises.unshift("Gulp");

noises[noises.length] = "More Hissing";

console.log(noises.length)
console.log(noises[noises.length - 1])
console.log([noises])

//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

animal["noises"] = noises;

animal.noises.push("Chompy Chomp");

/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *
 * Rowan: brackets, and dot notation
 * 
 * 2. What are the different ways of accessing elements on arrays?
 * 
 * Rowan: different methods, and also bracket notation
 *
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////

var animals = [];

animals.push(animal);
console.log(animals)

var duck = {
  species: "duck",
  name: "Jerome",
  noises: ["quack", "honk", "sneeze", "woosh"],
}

var crow = {
  species: "crow",
  name: "Artemis",
  noises: ["caw", "coo"],
}

var lion = {
  species: "lion",
  name: "Leon",
  noises: ["roar", "growl"],
}

animals.push(duck)
animals.push(crow)
animals.push(lion)
console.log(animals)
console.log(animals.length)

//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//I choose an Array. The array can contain an array of objects,
// so you can still access your friends and their properities.

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

var friends = [];

function getRandom(animalsArray) {
  return animalsArray[getRandomInt(animalsArray.length - 1)]
}

friends.push(getRandom(animals).name);

var randomAnimal = getRandom(animals);

randomAnimal["friends"] = friends;

/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}