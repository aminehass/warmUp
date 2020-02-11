// 1- Using recursion Write a JavaScript program to find the greatest common divisor (gcd) of two positive numbers.
  
// we will need to check every time the rest of divisiob between the two numbers , and then we will need to use our function again

function greatestCommonDivisor(number1, number2){
  if(number1>=number2){
  if((number1 % number2) === 0){
    return number2}
    else if((number1 % number2 )!==0) { return greatestCommonDivisor(number2,number1%number2)}
     }else{
      if((number2 % number1) === 0){
        return number1}
        else if((number2 % number1 )!==0) { return greatestCommonDivisor(number1,number2%number1)}
     }
  
   
}



// 2-Write a function called sum that accepts two numbers as parameters, and sum them together but without suming them togther directly
//you can only add one at each summetion, you'll need to use recursion in this.
  
// sum1 with recursion , and sum the second one with while loop

function sum1(a,b){
  if(a===0){
    return b;
  }
    return 1+sum1(a-1,b)
}


function sum(a,b){
  var s=a;
  var i =b;
  while(i--){
   s=s+1
   
  }
  
  return s;
}

