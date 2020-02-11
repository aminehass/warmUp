// 1- Using recursion Write a JavaScript program to find the greatest common divisor (gcd) of two positive numbers.

function greatestCommon (num1,num2,div){
    if (num1%div===0 && num2%div===0){
        return div;
    }
    return greatestCommon(num1,num2, div-1);

}
// 2-Write a function called sum that accepts two numbers as parameters, and sum them together but without suming them togther directly
//you can only add one at each summetion, you'll need to use recursion in this.

function sum (num1, num2){
    if (num1===0){
        return num2;
    } return 1 +sum(num1-1,num2);
}