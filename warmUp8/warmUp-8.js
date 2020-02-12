// 1- Using recursion Write a JavaScript program to find the greatest common divisor (gcd) of two positive numbers.
function gcd ( num1 , num2 ) {
var b = num2;
if (( num1%b===0 )&& (num2%b===0)){
    return b;
}

 b=b-1;
return gcd (num1,b)

}
   


// 2-Write a function called sum that accepts two numbers as parameters, and sum them together but without suming them togther directly
//you can only add one at each summetion, you'll need to use recursion in this.

function sum ( num1 , num2){

  var som = 0;

if (num2===0){
    return  som = num1
}
return som= som +sum (num1 , num2-1) + 1;



 return som
}