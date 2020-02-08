//1. Write a JavaScript function to check whether an `input` is an array or not
function isArray(coll) {
    if((Array.isArray(coll))===true) {
        return true;
    }
    return false;
}
// ex isArray([1,2])=>true
//    isArray(5)=>false
//2-Write a JavaScript function to get the first n element of an array.
function first(array, n) {
   var arr=[];
   for(var i=0; i<= n-1;i++) {
       arr.push(array[i]);
   }
   return arr;
}
//ex  first([1,2,3],1)=>[1]
//    first([1,2,3,4]2)=>[1,2]
//3- Write a JavaScript function to convert an object into a list of `[key, value]` pairs
function convert(obj) {
    var array=[];
    var array1=[];
    array1=console.log(Object.keys(obj))
    for(var key in obj) {
         array.push(obj[key]);
    }
       return array;
}
//ex: convert({name:'ahmed',age:20})=>[['name','ahmed'],['age', 20]]
