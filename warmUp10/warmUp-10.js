// 1-Write a function that takes a string as an input and returns the reverse of each letter 
//followed by a number starting from zero(solve it using while loop).
// example:    reverseStr('hello'); "o1l2l3e4h"
function reverseStr (str){
    var str1 = "";
    var i= str.length - 1;
    var count=1;
    while (i>0){
        str1= str1 +str[i]+ count;
        i-=1;
        count++; 
    }
    return str1+str[0];
}


// 2-write a function that takes array of strings and returns an array of the strings that have the same length
// example :  ['hi','hello','welcome','hy'] == > ["hi","hy"]

function sameLength (array) {
    var arr = [];
    for (var i = 0; i<array.length-1 ; i++){
        for (var j = 1; j<array.length ; j++){
            if ((array[j].length === array[i].length) && (i!==j)){
                arr.push (array[i], array[j]);
            }
        }
    }
    return arr;
}