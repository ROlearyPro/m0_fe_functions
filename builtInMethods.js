// SECTION 1: Calling methods on string or integer objects.
// Run each line of code below (either from this file or in dev tools).
// Then, in a comment, write 1-2 sentences describing what is happening, using ALL the involved vocabulary terms you've learned in this lesson so far.

// EXAMPLE
// The toLowerCase() method is called on the string "Hello World"
// No arguments are passed; toLowerCase() has one clear job which is to lowercase all letters that exist in the String
// The return value is "hello world"
console.log("Hello World".toLowerCase());
//the function above, as declared in the lib.es5.d.ts file, when given the parameter of the string "Hello World", converts said string to lower case.

console.log("Hello World".includes("Hello"));
//the function, upon being called, gives a true or false return value based on whether the parameter string contains the argument string. 

console.log("Hello World".endsWith("Hello"));
//the function, upon being called, gives a true or false return value based on whether the parameter string ends with the argument string. 


console.log("Hello World".endsWith("rld"));
//the function, upon being called, gives a true or false return value based on whether the parameter string ends with the argument string. 



// SECTION 2: Calling methods on variables assigned to strings.
// Declare 2 variables assigned to strings.
// Call a different built-in JavaScript method on each of your variables. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// Include comments above each method call explaining the impact and return value of that method.

// EXAMPLE
// The startsWith() method is called on the firstName variable, which stores the string object "Jeff". 
// The startsWith() method returns true if the data in the firstName variable starts with the argument passed in.
// In this example, the return value is true, because "Jeff" does start with "J".
// The console.log() statements prints the return value of the startsWith() method (true) to the console.
var firstName = "Jeff";
console.log(firstName.startsWith("J"));


// The replaceAll() method is called on the foodTypes variable, which stores the string object "Grains".
// The replaceAll() method replaces each instance of the first argument string within the parameter with the second argument string.
// In this example, the first argument is "Grains", and the second is "Veggies", which results in a return value of "FruitsVeggies",
// as instances of the former argument are replaced with instances of the latter. The console.log() statements print this return value to the console.
var foodTypes = "FruitsGrains"; 
console.log(foodTypes.replace("Grains", "Veggies"));

// The trim() method is called on the foodName variable, which stores the string object " Bagel  ".
// The trim() method removes whitespace from both ends of a string and returns a new string without modifying the original.
// In this example, the return value is "Bagel", as whitespaces are trimmed from both ends of the foodName variable.
// The console.log() statement prints the return value of the trim() method ("Bagel") to the console.
var foodName = " Bagel  ";
console.log(foodName.trim());

// SECTION 3: Calling methods on variables assigned to arrays.
// Declare 2 variables assigned to arrays.
// Call a different built-in JavaScript method on each of your variables. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// Include comments above each method call explaining the impact and return value of that method.


// The indexOf() method is called on the loud variable, which stores an array of strings.
// The indexOf() method returns the index value corresponding to a given element contained within the array, or -1 if that element is not present.
// In this example, the return value is 1, as given we start at index 0 and "Foghorn" is the second element in the array, its index is 1.
// The console.log() statement prints the return value of the indexOf("Foghorn") method (1) in the console.

var loud = new Array("Alarm", "Foghorn", "Jet Engine");
console.log(loud.indexOf("Foghorn"));


// The shift() method is called on the doubling variable, which stores an array of numbers.
// The shift() method removes and returns the first element of the array, changing the length of the array in the process.
// In this example, the first instance of this method returns 1, the second instance returns 2, etc., up until the last element in the array is removed, 64.
// The while loop containing the console.log() statement prints the return value of each shift() method in the console.

var doubling = new Array(1, 2, 4, 8, 16, 32, 64);
while (doubling.length != 0){
    console.log(doubling.shift());
}