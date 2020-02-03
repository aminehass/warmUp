// 1-write a function that returns the product of any number by 3.
function multiplayThree (x){
    return x*3;
}
// 2-complete the following function multiply to return the result of multiplying of x and y
function multiply(x,y){
   if (y===0){
       return 0;
   } return x+multiply(x,y-1)
   
}


// 3-complete the following function that Convert Fahrenheit to Celsius if the module for converting is 
// 	(5/9) * (fahrenheit-32);
function toCelsius(fahrenheit){
   
    return 5/9*(fahrenheit-32)+" Fahrenheit";
}

// 4-Define a function named "sqArea", and make it display square area if you knew the length of its side.
function squareArea(a){
    return a*a;
}
