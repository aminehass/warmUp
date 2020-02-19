//1. Write a JavaScript function to check whether an `input` is an array or not
// ex isArray([1,2])=>true
//    isArray(5)=>false
function check(input) {
    if(Array.isArray(input)===true){
        return 'The Input is an Aray.'
    }else return 'The Input is not an Array.'
}

//2-Write a JavaScript function to get the first n element of an array.
//ex  first([1,2,3],1)=>[1]
//    first([1,2,3,4]2)=>[1,2]
function first(array,n){
    var arr2=[];
    for(var i=0;i<n;i++){
        arr2.push(array[i])
    }
    return arr2;
}


//3- Write a JavaScript function to convert an object into a list of `[key, value]` pairs
//ex: convert({name:'ahmed',age:20})=>[['name','ahmed'],['age', 20]]

function convert(object) {
    var keys=[];
    var values=[];
    var arr=[];
    for(var key in object){
     arr.push(key,object[key]) 
    }
    for(var i=0;i<arr.length;i++){

    }
    return arr;
}
//i couldn't find a solution for this one :/