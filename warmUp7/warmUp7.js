//1. Write a JavaScript function to check whether an `input` is an array or not
// ex isArray([1,2])=>true
//    isArray(5)=>false

// This function is cheking if the input is an array or not. It returns a boolean .
function checkForArray ( input ) {
    if ( Array.isArray ( input ) ) {
        return true;
    } 
    else {
        return false;
    }
}
//2-Write a JavaScript function to get the first n element of an array.
//ex  first([1,2,3],1)=>[1]
//    first([1,2,3,4]2)=>[1,2]

/*The function below takes an array and numElements (the number of elements to be returned) as parameters and 
returns the first numElements of the array */

function firstElementsOfArray ( array, numElements ){
    return array.slice ( 0,numElements );
}
//3- Write a JavaScript function to convert an object into a list of `[key, value]` pairs
//ex: convert({name:'ahmed',age:20})=>[['name','ahmed'],['age', 20]]
function each ( object , fn){
    if ( (!Array.isArray ( object)) && (typeof object === "object") ){
        for (var key in object){
            fn (object[key] , key)
        }
    }
}
function convertObjectToArray (object){
    var array=[];
    //var ListOfArrays=[]
    each (object, function (element, key){
        array.push([key, element])
    })
    return array
}