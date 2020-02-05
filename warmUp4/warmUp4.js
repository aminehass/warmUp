// 1-Define a function called myTrueFun that returns true whenever its called.*
function myTrueFun(x){
	if(x=myTrueFun){
		return true;
	}return false
}
// 2-complete the following color function in which returns true if type of the input is string and returns
// 	false otherwise.
function typeFunc(value){
	if(typeof value=='string'){
		return true;
	}
	return false;
}
// 3-Write a JavaScript function that accepts a number as a parameter and check if the number is prime or not.
function prime(x){
	i=2;
   while(i<=x/2){
	   if(x%i==0){
		   return 'the number is not prime';
	   }i++;
   }	
   return 'the number is prime';
}
// 4-write a function that accepts two numbers as parameters and returns true if the two parameters have the same value , false if not
function same(x,y){
	if (x==y){
		return true;
	}
	return false;
}