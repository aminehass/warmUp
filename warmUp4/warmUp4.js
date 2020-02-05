// 1-Define a function called myTrueFun that returns true whenever its called.
function myTrueFun(a){
	return true
}

// 2-complete the following color function in which returns true if type of the input is string and returns
// 	false otherwise.

function typeFunc(value){
    var value= typeof(value);
    if (typeof(value)===String){
		return true;
	}
	return false;
	}

// 3-Write a JavaScript function that accepts a number as a parameter and check if the number is prime or not.

function isPrime(a) { 
	if(a < 2){ 
	   return false; 
	} 
	var i=2; 
	while(i<a){ 
	if(a % i === 0){ 
	   return false; 
	} 
	i++; 
	} 
	return true; 
}
// 4-write a function that accepts two numbers as parameters and returns true if the two parameters have the same value , false if not

function sameValue(x,y){
	if(x===y){
 return true;
	}
 return false;
}

//////////////////////////////////////