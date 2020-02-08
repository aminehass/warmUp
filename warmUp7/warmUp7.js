//1. Write a JavaScript function to check whether an `input` is an array or not
// ex isArray([1,2])=>true
//    isArray(5)=>false
 
function check(input ) {
   if(Array.isArray(input)) {
     return ' is an array';
   }
   return ' is not an array';
 }

//2-Write a JavaScript function to get the first n element of an array.
//ex  first([1,2,3],1)=>[1]
//    first([1,2,3,4]2)=>[1,2]

//we will use the argument n as a counter; and wwe will push the value of array in the new one considering that

function getFirst(array, n) {

  var arr=[];
  for(var i = 0; i<n; i++) {
    arr.push(array[i]);
  }
  return arr;
}
//3- Write a JavaScript function to convert an object into a list of `[key, value]` pairs
//ex: convert({name:'ahmed',age:20})=>[['name','ahmed'],['age', 20]]

//i did not get the answear because the out put of this function will be 
//convert({name:'ahmed',age:20})=>['name', 'ahmed', 'age', 20]

function convert(object){
  var arr=[];
  var num=Object.keys(object).length
  for(var i = 0; i < num; i++){
  arr.push(Object.keys(object)[i]);
  arr.push(Object.values(object)[i]);
  }
  return arr;
}