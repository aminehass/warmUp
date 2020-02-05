// 1-Define a function called myTrueFun that returns true whenever its called.

function myTrueFun(x) {

	return true

}

// 2-complete the following color function in which returns true if type of the input is string and returns
// 	false otherwise.

function typeFunc(value) {
	var x = value
	if (typeof (x) === "string") {
		return true
	}
	else {
		return false
	}
}



// 3-Write a JavaScript function that accepts a number as a parameter and check if the number is prime or not.


function prime(number) {

	if (number === 1 || number === 2 || number === 3) {
		return "this " + number + " is prime"
	}
	else if (number % 2 !== 0 && number % 3 !== 0) {
		return "this " + number + " is prime"
	}
	else { return "this " + number + " is not prime" }
}



// 4-write a function that accepts two numbers as parameters and returns true if the two parameters have the same value , false if not

function sameValue(num1, num2) {
	if (num1 === num2) {
		return true
	}
	else {
		return false
	}
}