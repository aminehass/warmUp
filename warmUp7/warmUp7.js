//1. Write a JavaScript function to check whether an `input` is an array or not
// ex isArray([1,2])=>true
//    isArray(5)=>false

function checkArr(array) {
    var array = [];
    if(array.IsArray(array)) {
        return true;
    }
    return false;
}

//2-Write a JavaScript function to get the first n element of an array.
//ex  first([1,2,3],1)=>[1]
//    first([1,2,3,4]2)=>[1,2]

function firstElement(array) {
    return array[0];
}

//3- Write a JavaScript function to convert an object into a list of `[key, value]` pairs
//ex: convert({name:'ahmed',age:20})=>[['name','ahmed'],['age', 20]]

function convert(object){
    for(var key in object) {
        var list1 = [];
        var list2 = [];
        list1 = [key,object[key]];
        list2.push(list1);
        key++;
    }
    return list2;
}
