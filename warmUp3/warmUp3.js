// 1) Write a function named greaterNum that:
// - takes 2 arguments, both numbers.
// - returns whichever number is the greater (higher) number.
// ex greaterNum(5, 10) => "The greater number of 5 and 10 is 10."

function greaterNum(a,b){
    if(a<b){
        return 'The greater number of'+' '+ a +' '+'and'+ b+' '+'is'+' 'b;
    }
return 'The greater number of'+' '+ a +' '+'and'+ b+' '+'is'+' 'b;
}


// 2) Write a function named isEven using  for loop that 
// -  iterate from x to y.
// -  return array contain the even values,
//  ex:  isEven(1,10) => [2,4,6,8,10]
var array=[x,y];
while(x<=y){
    array =[x,x++];
}
function isEven(array){
    for(var i=0; i<array.length ; i++){ 
        if(array[i] %2 !== 0){ 
             array.splice(i,1); 
             i--; 
        } 
   } 
   return array; 
}



//3) write a function named sum that 
// - Use a while loop to add up the numbers from x to y.
// ex sum(1,5) => 15
var n=[x,y];
while(x<=y){
    n =[x,x++];
}
function sum(n) { 
	var counter = 1; 
	var total = 0; 
	while (counter <= n) { 
	total = total + counter; 
	counter = counter + 1; 
	} 
	return total; 
	}

//4) Write a function named factorial that 
// -  Use Recursion to calculate the factorial of a number
// -  the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n
// - 5! = 5*4*3*2*1 = 120
// ex : factorial(5) => 120 


//5) write a function named decimals
//- the function will format a number up to specified decimal places
//- the function will return a string 
//- if the parameters not a number return false 
// ex :
//      decimals(2100, 'a') ==> false 
//      decimals('a', 5) ==> false 
//      decimals(2.100212, 2) ==> '2.10'
//      decimals(2.100212, 3) ==> '2.100'
//      decimals(2100, 2) ==> '2100.00'
//      