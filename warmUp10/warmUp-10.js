// 1-Write a function that takes a string as an input and returns the reverse of each letter 
//followed by a number starting from zero(solve it using while loop).
// example:    reverseStr('hello'); "o1l2l3e4h"

function reverseStr(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        for (var o = 0; o <= 5; o++) {
            newString += str[i] + o;

        }
    }
    return newString;
}
console.log(reverseStr('hello'));


// 2-write a function that takes array of strings and returns an array of the strings that have the same length
// example :  ['hi','hello','welcome','hy'] == > ["hi","hy"]
