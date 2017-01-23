// Sets results variable and gets reference to DOM
var results = document.getElementById('results');

// Get a reference to the button elements in the DOM
var buttonAdd = document.getElementById('addButton');
var buttonSubtract = document.getElementById('subtractButton');
var buttonMultiply = document.getElementById('multiplyButton');
var buttonDivide = document.getElementById('divideButton');
var reload = document.getElementById('clearButton');

// Reloads window when clear all button is pressed
function clear() {
  window.location.reload();
}


/*
Create a function that multiplies two numbers
passed in as arguments. Return the product.
*/
function multiplication(num1, num2) {
  var product = num1 * num2;
  results.innerHTML += product;
  return product;
}


/*
Create a function that adds two numbers
passed in as arguments. Return the sum.
*/
function addition(num1, num2) {
  var sum = num1 + num2;
  results.innerHTML += sum;
  return sum;
}

/*
Create a function that subtracts two numbers
passed in as arguments. Return the difference.
*/
function subtraction(num1, num2) {
  var difference = num1 - num2;
  results.innerHTML += difference;
  return difference;
}

/*
Create a function that divides two numbers
passed in as arguments. Return the quotient.
*/
function division(num1, num2) {
  var quotient = num1 / num2;
  results.innerHTML += quotient;
  return quotient;
}


/*
Create a function that accepts three arguments.
1. First number
2. Second number
3. A function that performs an operation on them

Return the value of the operation.
*/
function doMaths(num1, num2, action) {
  var maths = action(num1, num2);
  return maths;
}

// Determines which button is clicked then runs function for specific math function
buttonAdd.addEventListener('click', function () {
  var num1 = parseFloat(document.getElementById('num-1').value);
  var num2 = parseFloat(document.getElementById('num-2').value);
  doMaths(num1, num2, addition);
});
buttonSubtract.addEventListener('click', function () {
  var num1 = parseFloat(document.getElementById('num-1').value);
  var num2 = parseFloat(document.getElementById('num-2').value);
  doMaths(num1, num2, subtraction);
});
buttonMultiply.addEventListener('click', function () {
  var num1 = parseFloat(document.getElementById('num-1').value);
  var num2 = parseFloat(document.getElementById('num-2').value);
  doMaths(num1, num2, multiplication);
});
buttonDivide.addEventListener('click', function () {
  var num1 = parseFloat(document.getElementById('num-1').value);
  var num2 = parseFloat(document.getElementById('num-2').value);
  doMaths(num1, num2, division);
});
reload.addEventListener('click', clear);
