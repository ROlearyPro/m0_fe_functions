// Each example below has at least one opportunity for improvement.

// YOUR TASK:
// Modify the code to make that improvement(s)
// write a JS comment to explain what you changed, and why
// make sure the code you submit WORKS - you can run this entire file 
// using `node cleanUp.js` or copy and paste into a replit


// EX 1:
function askForName() 
{
  console.log("Hello, what is your name?");
}

askForName();
//added semicolons after the console.log and the call to askForName.

// EX 2:
function addThreeNums(first, second, third) {
  var sum = first + second + third;
  console.log("sum is " + sum);
  return sum;

}

addThreeNums(1, 2, 3);
addThreeNums(4, 2, 7);
//added semicolon after declaring sum, added console output to show sum value.

// EX 3:
function makeFreshPesto(){
  console.log("Buy ingredients: basil, parmesan, romano, olive oil, pine nuts, garlic, salt, pepper\n");
  console.log("Pulse basil and pine nuts\n");
  console.log("Add garlic and cheeses\n");
  console.log("Slowly pour in oil\n");
  console.log("Season");
}

makeFreshPesto();
//completed 'func' into 'function', added newlines after each output in the console.

//  EX 4:
function average(num1, num2) {
  // var sum = num1 + num2;
  var avg = ((num1 + num2) / 2);
  console.log(avg);
  return avg;
}
average(3, 13);
//consolidated avg into one line, added console output for average, called function