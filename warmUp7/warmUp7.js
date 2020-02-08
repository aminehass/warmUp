//1. Write a JavaScript function to check whether an `input` is an array or not

function arrayOrNot ( array ) {
 
     return Array.isArray ( array) //Array.isArray is a predifined function in JavaScript

}



//2-Write a JavaScript function to get the first n element of an array.

// This function takes an array as first argument , a number as second argument and return the number first element of the array in a new one.

function firstElement ( array , number  ) {
   
  var arr =[]; // Declaration of a new array wich we put the number first elements of of the first array.

  for ( var i = 0 ; i < number ; i++ )  {

    arr[i]= array [i] ;

  }

  return arr ;

}





//3- Write a JavaScript function to convert an object into a list of `[key, value]` pairs
//ex: convert({name:'ahmed',age:20})=>[['name','ahmed'],['age', 20]]


// This function convert an abject to an array of array
function convertObject ( object ) {

    var arr = [];
    var i = 0;

for ( var key in object) {

    arr[i] = [key , object[key] ]; 

    i = i+1;
} 


 return arr;


}


