// 1- Using recursion Write a JavaScript program to find the greatest common divisor (gcd) of two positive numbers.
function gcd(num1, num2) {
    if (!num2) {
        return num1;
    }
    return gcd(num2, num1 % num2);
}
// 2-Write a function called sum that accepts two numbers as parameters, and sum them together but without suming them togther directly
//you can only add one at each summetion, you'll need to use recursion in this.
function sum(num1, num2) {
    var sum1 = (num1 + num2)
    return sum1
}