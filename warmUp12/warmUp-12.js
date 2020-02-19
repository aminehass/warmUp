 // 1-implement the function mult that takes a single parameter n, and computes the multiplication of all integers up to n 
 //starting from 0, e.g.:
 mult(3); // => 6
 mult(4); // => 24

 function mult(n) {
    var result=1;
    for(var i=1 ; i<n ; i++) {
    result=result*(i+1);
    }
    return result;
}
//this function uses a counter i to iterate through 1 to n and stock the result (multiplication i by i+1) into the variable result

// 2- Use a while loop to build a single string with the numbers 1 through n
// separated by the number next to the current number. 
//Have it return the new string.
// eg= 1 2 2 3 3 4 4 5 5 6 6 ...

function string (n) {
    var str="";
    var i=1;
    while (i<=n) {
        str=str+i+i
        i++
    }
    return str
}

//this function iterate from 1 to n and stock  the counter twice in a new string