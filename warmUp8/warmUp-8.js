// 1- Using recursion Write a JavaScript program to find the greatest common divisor (gcd) of two positive numbers.
function pgcd(a, b) {
    if (b == 0) {
        return a;
    }
return pgcd(b, a % b);
};

// 2-Write a function called sum that accepts two numbers as parameters, and sum them together but without suming them togther directly
//you can only add one at each summetion, you'll need to use recursion in this.
function sum(x, y) {
    if (y != 0) {
      return sum(x + 1, y - 1);
    } else {
      return x;
    }
}