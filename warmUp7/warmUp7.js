//1. Write a JavaScript function to check whether an `input` is an array or not
// ex isArray([1,2])=>true
//    isArray(5)=>false
// we can use the function arrayisArray to chech if the input is an array or no
function isArray(element) {
  return Array.isArray(element);
}
//2-Write a JavaScript function to get the first n element of an array.
//ex  first([1,2,3],1)=>[1]
//    first([1,2,3,4]2)=>[1,2]
// the first ellement of the array have 0 as index number .
function firstElement(array) {
  console.log(array[0]);
}
//3- Write a JavaScript function to convert an object into a list of `[key, value]` pairs
//ex: convert({name:'ahmed',age:20})=>[['name','ahmed'],['age', 20]]
// using entries we can get an array of each key and his enumarable value
function convert(object) {
  console.log(Object.entries(object));
}
