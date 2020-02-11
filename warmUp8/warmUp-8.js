// 1- Using recursion Write a JavaScript program to find the greatest common divisor (gcd) of two positive numbers.
// 2-Write a function called sum that accepts two numbers as parameters, and sum them together but without suming them togther directly
//you can only add one at each summetion, you'll need to use recursion in this.
 //                         Q1
 function GCD(a, b) {
        if (b == 0) {
            return a;
        }
    return gcd(b, a % b);
};
//                          Q2
function sum(x,y){
    if(y>0){
        return sum(x+1,y-1);
    }
    else if(y<0){
        return sum(x-1,y+1);
    } 
    else return x;
}