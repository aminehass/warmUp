// 1-Write a function that takes a string as an input and returns the reverse of each letter 
//followed by a number starting from zero(solve it using while loop).
// example:    reverseStr('hello'); "o1l2l3e4h"
function reverseStr(str){
    var arr=str.split('');
    var j=1;
    var i=arr.length-1;
    var arr2=[];
    while(i>=0){
        arr2.push(arr[i]+j)
        i--;
        j++;
    }
    str=arr2.join('');
    return str.substring(0,str.length-1);
}


// 2-write a function that takes array of strings and returns an array of the strings that have the same length
// example :  ['hi','hello','welcome','hy'] == > ["hi","hy"]
function sameLength(array) {
    var arrayOfSameLengths=[];
    var str=array[0];
    for(var i=1; i<array.length; i++){
        if(str.length === array[i].length){
            arrayOfSameLengths.push(str,array[i]);
        }
    }
    return arrayOfSameLengths;
}