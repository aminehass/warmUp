//1. Write a JavaScript function to check whether an `input` is an array or not
// ex isArray([1,2])=>true
//    isArray(5)=>false

function checkInput(input) {
    if (Array.isArray(input)) {
        return input + " " + "true"
    }
    else {
        return input + " " + "false"

    }
}

//This function check if the input is an array array and returns true if is it and false if is not an array.


//2-Write a JavaScript function to get the first n element of an array.
//ex  first([1,2,3],1)=>[1]
//    first([1,2,3,4]2)=>[1,2]

function firstElement(array) {
    return array[0]
}

//This function returns only the first element[index] of an array.


//3- Write a JavaScript function to convert an object into a list of `[key, value]` pairs
//ex: convert({name:'ahmed',age:20})=>[['name','ahmed'],['age', 20]]
function objectList(object) {

}