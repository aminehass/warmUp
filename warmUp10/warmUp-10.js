// 1-Write a function that takes a string as an input and returns the reverse of each letter 
//followed by a number starting from zero(solve it using while loop).
// example:    reverseStr('hello'); "o1l2l3e4h"

function reverseString(string) {
    var result = '';
    var i = (string.length - 1);
    var j = 1;
    while(i > 0 && j < string.length) {
        result = result + string[i] + j;
        i = i - 1;
        j = j + 1;
    }
    return result;
}


// 2-write a function that takes array of strings and returns an array of the strings that have the same length
// example :  ['hi','hello','welcome','hy'] == > ["hi","hy"]

function sameLength(array) {
    var result = [];
    for(var i = 0; i < array.length; i++) {
        if(array[i].length === array[(i + 1)].length) {
            result.push(array[i], array[(i + 1)]);
        }
    }
    return result;
}