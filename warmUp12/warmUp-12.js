 // 1-implement the function mult that takes a single parameter n, and computes the multiplication of all integers up to n 
 //starting from 0, e.g.:
 mult(3); // => 6
 mult(4); // => 24

 function mult ( n ) {
     var multiplied = 0;
    for ( var i=0 ; i<=n ; i++ ) {
        if ( i === 0){
            multiplied = 1;
        }
        else{
            multiplied = multiplied * i;
        }
    }
    return  multiplied
}

// 2- Use a while loop to build a single string with the numbers 1 through n
// separated by the number next to the current number. 
//Have it return the new string.
// eg= 1 2 2 3 3 4 4 5 5 6 6 ...

function numberToString ( n ){

    var result = "1";
    var counter = 1;

    while ( counter<=n ) {
        if (n===1){
            return result="1"
        }
        else {
            result = result + " " + (counter + 1) + " " + (counter + 1);
            counter++;
        }
    }
    return result 
}