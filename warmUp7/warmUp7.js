//1. Write a JavaScript function to check whether an `input` is an array or not
// ex isArray([1,2])=>true
//    isArray(5)=>false 
function check(array) {
    if (Array.isArray(array)) {
        return true;
    }
    return false;
}
//2-Write a JavaScript function to get the first n element of an array.
//ex  first([1,2,3],1)=>[1]
//    first([1,2,3,4]2)=>[1,2]
function first(array, n) {
    var result = [];
    if (n === 1 ) {
      return array[0];
    }
    var m;
    if (array.length < n) {
      m = array.length;
    } else {
      m = n;
    }
      for (var i = 0; i < m; i++) {
      result.push(array[i]);
    } return result;
}

//3- Write a JavaScript function to convert an object into a list of `[key, value]` pairs
//ex: convert({name:'ahmed',age:20})=>[['name','ahmed'],['age', 20]]
function convert (coll){
    var acc=[];
    var acc1=[];
    var acc2=[];
    acc1.push(Object.keys(coll));
    acc2.push(Object.values(coll));
    acc.push(acc1, acc2)
    return acc;  
} 