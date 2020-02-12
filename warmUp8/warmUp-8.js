// 1- Using recursion Write a JavaScript program to find the greatest common divisor (gcd) of two positive numbers.
var greatest=0;
function greastestCommonDivisor(number1, number2){
    
    if (number1%2===0 && number2%2===0){
        greastestCommonDivisor(number1/2, number2/2)       
        greatest=number1/2;
    }
    else if (number1%2===0){
        greastestCommonDivisor(number1/2, number2)
        greatest=number1/2;
    }
    else if (number2%2===0){
           greastestCommonDivisor(number1, number2/2)
           greatest=number1;
    }
    else if (number1>number2){
        greastestCommonDivisor((number1-number2)/2, number2)
        greatest=(number1-number2)/2;
    }
    else if (number1 <number2){
        greastestCommonDivisor(number1, (number2-number1)/2)
        greatest=number1;
    }    
    return greatest
}


// 2-Write a function called sum that accepts two numbers as parameters, and sum them together but without suming them togther directly
//you can only add one at each summetion, you'll need to use recursion in this.

function sum (number1, number2){
    if (number2===0){
        return 1
    }     
        return number1+ sum(1, number2 -1);    
}