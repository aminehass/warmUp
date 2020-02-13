// 1-Write a function that takes a string as an input and returns the reverse of each letter 
//followed by a number starting from zero(solve it using while loop).
// example:    reverseStr('hello'); "o1l2l3e4h"


function reverseStr (string) {
    var acc='';
    var array=string.split('');
    var i= array.length-1;
    var j = 0;
    while ( i >= 0 ){
         acc += j + array[i];
         i--;
         j++;
    }
    return acc.substring(1);
}

// 2-write a function that takes array of strings and returns an array of the strings that have the same length
// example :  ['hi','hello','welcome','hy'] == > ["hi","hy"]


function sameLength (array) {
    var acc=[];
    for (var i=0; i < array.length; i++){
        for (var j=0; j < array.length; j++){
            if (array[i].length === array[j].length && j !== i) {
                 acc.push(array[i]);
            }
        }
    }
    return acc;

}