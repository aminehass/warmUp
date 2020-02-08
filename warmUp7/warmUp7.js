//1. Write a JavaScript function to check whether an `input` is an array or not
// ex isArray([1,2])=>true
//    isArray(5)=>false
var is_array = function (input) {
    if (toString.call(input) === "[object Array]")
        return true;
    return false;
};
//2-Write a JavaScript function to get the first n element of an array.
//ex  first([1,2,3],1)=>[1]
//    first([1,2,3,4]2)=>[1,2]

//3- Write a JavaScript function to convert an object into a list of `[key, value]` pairs
//ex: convert({name:'ahmed',age:20})=>[['name','ahmed'],['age', 20]]
function array(obj) {
    var result = Object.keys(obj).map(function (key) {
        return [Number(key), obj[key]];
    });

    console.log(result);
}
