// 1-Define a function called myTrueFun that returns true whenever its called.
function myTrueFun () {
	return true;
}

// 2-complete the following color function in which returns true if type of the input is string and returns
// 	false otherwise.

	function typeFunc(value){
		if (typeof(value)==="string"){
			return true;
		} return false;

	}
// 3-Write a JavaScript function that accepts a number as a parameter and check if the number is prime or not.
function myNumber (num){
	
    
	
	if (Math.abs(num)===2){
		return false
	
	}
	for (i=2;i<Math.abs(num);i++){
		if ((Math.abs(num)%i)===0){
			return false;
		}
		
	} return true
}

// 4-write a function that accepts two numbers as parameters and returns true if the two parameters have the same value , false if not
function sameValue(a,b){
	if (a===b){
		return true
	} return false
}