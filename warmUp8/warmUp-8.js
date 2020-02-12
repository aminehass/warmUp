// 1- Using recursion Write a JavaScript program to find the greatest common divisor (gcd) of two positive numbers.
function gcd(x, y) {
	if(x === y){
		return x;
	}
	if(x>y) {
		return gcd(x-y, y);
	} 
		return gcd(x, y-x);
}

// 2-Write a function called sum that accepts two numbers as parameters, and sum them together but without suming them togther directly
//you can only add one at each summetion, you'll need to use recursion in this.
function sum(x,y) {
    if(x === 0 && y === 0) {
        return 0;
        }
    if(x > 0){
        return 1 + sum(x-1, y);
    }
        return 1 + sum(x, y-1);
}