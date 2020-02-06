// 1-Define a function called myTrueFun that returns true whenever its called.
//===============================================================1
// function returns true
function myTrueFun() {
  return true;
}
// 2-complete the following color function in which returns true if type of the input is string and returns
// 	false otherwise.
//================================================================2
//typeof gives us the type of the parameter of the function , if it's equal to string it will return true , otherwise it's false
function typeFunc(value) {
  if (typeof value === "string") {
    return true;
  }
  return false;
}

// 3-Write a JavaScript function that accepts a number as a parameter and check if the number is prime or not.
function prime(x) {
  for (var i = 2; i < x; i++) {
    if (x % i === 0) {
      return x + " is not a prime number";
    }
    return x + " is prime number";
  }
}
// 4-write a function that accepts two numbers as parameters and returns true if the two parameters have the same value , false if not
//==================================================================4
//the function checks only the value not the type of the parameter so i used '==' instead of '==='

function sameValue(a, b) {
  if (a == b) {
    return true;
  }
  return false;
}
