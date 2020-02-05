// 1-Define a function called myTrueFun that returns true whenever its called.
function typeFunc(){
return true;
}
// 2-complete the following color function in which returns true if type of the input is string and returns
// 	false otherwise.
function color(value){
	if (typeof value === 'string'){
		return true;
	}
	return false;
}
	
// 3-Write a JavaScript function that accepts a number as a parameter and check if the number is prime or not.

function isPrime (num){
	if (num<2) {
		return "not Prime";
	}else if (num>2){
		for (var i = 2 ; i<num ; i++){
			if ((num % i )===0) {
				return "not Prime"
			}
		}
	}
	return "Prime"
}


// 4-write a function that accepts two numbers as parameters and returns true if the two parameters have the same value , false if not

function sameValue (num1, num2){
	return (num1 === num2);
}