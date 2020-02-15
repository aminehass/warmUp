//1. Write a JavaScript function to check whether an `input` is an array or not
// ex isArray([1,2])=>true
//    isArray(5)=>false
//2-Write a JavaScript function to get the first n element of an array.
//ex  first([1,2,3],1)=>[1]
//    first([1,2,3,4]2)=>[1,2]
//3- Write a JavaScript function to convert an object into a list of `[key, value]` pairs
//ex: convert({name:'ahmed',age:20})=>[['name','ahmed'],['age', 20]]

//Q1:This function returns a boolean
function checkForArray (input) {
    if ( Array.isArray (input)){
        return true;-
    };
    else {
        return false;
    };
}
//Q2
function firstElementsOfArray (array, num){
    return array.slice(0,num);
}
//Q3: we need an each function first
function each (object , fn){
    if ((!Array.isArray (object))&&(typeof object === "object")){
        for (var key in object){
            fn (object[key], key)
        };
    };
}

function convert (object){ 
    var array=[];
    each (object, function (element, key){
        array.push([key, element])
    });
    return array
}