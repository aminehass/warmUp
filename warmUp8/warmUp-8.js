// 1- Using recursion Write a JavaScript program to find the greatest common divisor (gcd) of two positive numbers.
function gcd(num1, num2){
    if (num1===num2){
        return num1;
    }else if (num1>num2) {
        return gcd((num1-num2),num2);
    }else if (num1<num2) {
        return gcd(num1,(num2-num1));
    }
}
// 2-Write a function called sum that accepts two numbers as parameters, and sum them together but without suming them togther directly
function sum(num1, num2){
    var result = num1
    if ((num1<0) && (num2<0)) {
        for (var i= 0 ; i < Math.abs(num2) ; i++ ){
            result--;
        }
    }
    else if (num2<0){
        return sum(num2, num1);
    }
    else if (num2 >=0){
        for (var i= 0 ; i < num2 ; i++ ){
            result++;
        }
    }
    return result;
}
//you can only add one at each summetion, you'll need to use recursion in this.