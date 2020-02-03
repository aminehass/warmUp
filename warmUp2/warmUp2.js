// 1-write a function that returns the product of any number by 3.
//===============================================================1
// "x" is the the number we should multiply by 3
function product(x) {
  return x * 3;
}
// 2-complete the following function multiply to return the result of multiplying of x and y
//================================================================2
// x & y are both number as parameter , result takes the value of the multiplication of these 2 numbers
function multiply(x, y) {
  var result = x * y;
  return result;
}

// 3-complete the following function that Convert Fahrenheit to Celsius if the module for converting is
// 	(5/9) * (fahrenheit-32);
//================================================================3
// we applicte the formula to convert to celsius , "C" is the var who takes the result in celsius
function toCelsius(fahrenheit) {
  var C = (5 / 9) * (fahrenheit - 32);
  return C;
}

// 4-Define a function named "sqArea", and make it display square area if you knew the length of its side.
//=================================================================4
//the square area formula is s² , so the function takes the length as parameter and square it by 2
function sqArea(s) {
  var area = s * s;
  return s;
}
