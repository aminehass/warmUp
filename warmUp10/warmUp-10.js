// 1-Write a function that takes a string as an input and returns the reverse of each letter 
//followed by a number starting from zero(solve it using while loop).
// example:    reverseStr('hello'); "o1l2l3e4h"
function reverseStr(string) {
    var i=string.length;
    var result='';
    while(i--) {
        var tot=(string.length-i-1) + string[i];
        result=result+tot;

    }
    return result.slice(1);
}

// 2-write a function that takes array of strings and returns an array of the strings that have the same length
// example :  ['hi','hello','welcome','hy'] == > ["hi","hy"]
function sameLength(array) {
    var array2=array;
    var arr=[];
    for (var i=0; i<array.length; i++) {
        for (var j=0;j<array.length; j++) {
            if(array[i].length == array2[j].length ) {
                 arr.push(array2[j]);
            }
        }  return arr;
    }
    return arr;
}