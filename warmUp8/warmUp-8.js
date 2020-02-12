// 1- Using recursion Write a JavaScript program to find the greatest common divisor (gcd) of two positive numbers.
function greatestCommonDivisor(number1, number2){



}



// 2-Write a function called sum that accepts two numbers as parameters, and sum them together but without suming them togther directly
//you can only add one at each summetion, you'll need to use recursion in this.

 function sum(num1, num2){
  if(num1 < num2){
    var x = num1;
    num1 = num2;
    num2 = x
  }

  if(num1 >= 0){
    if(num2 < 0){
       if (num2 === 0){if(num1 === 0){return 0}
        return(1 + sum((num1 - 1),0))}
       return (-1 + sum(num1, num2 + 1))
    }
    else if (num2 >= 0){
    if(num2 === 0){if(num1 === 0){return 0}
        return(1 + sum((num1 - 1),0))}
    return(2 + sum((num1 - 1), (num2 - 1)))

    }
  }
  if(num1 < 0){alert("this code works only if num1 > 0")}
}²