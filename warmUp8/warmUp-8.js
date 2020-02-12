// 1- Using recursion Write a JavaScript program to find the greatest common divisor (gcd) of two positive numbers.
// 2-Write a function called sum that accepts two numbers as parameters, and sum them together but without suming them togther directly
//you can only add one at each summetion, you'll need to use recursion in this.


//the gcd ideq is to reduce an a number for a b number until those two number are equal and the final result is the GCD 
function gcd(a, b) {
    if (a === b) {
        return b;
    } else if (a > b) {
        a = a - b;
        return gcd(a, b);
    }
    return gcd(b, a);
}


//we define a stopping condition with y equal to zero ,and we repete the function sum hile we decrease y and increase x by one until y reachs 0
function sum(x, y) {
    if (y === 0) {
        return x;
    }
    return sum(x + 1, y - 1)
}