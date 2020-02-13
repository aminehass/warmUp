// 1-Write a function that takes a string as an input and returns the reverse of each letter
//followed by a number starting from zero(solve it using while loop).
// example:    reverseStr('hello'); "o1l2l3e4h"

function reverseStr(str) {
    var newStr = ""
    var i = 0;
    while (i < str.length) {
        newStr[i] = str[str.length - (i + 1)]
        i++
    }
    return newStr;
}


// 2-write a function that takes array of strings and returns an array of the strings that have the same length
// example :  ['hi','hello','welcome','hy'] == > ["hi","hy"]


function sameLength(array) {
    var newArray = [];
    for (var i = 0; i < array.length; i = i + 1) {
        for (var j = array.length; j >= 0; j = j - 1) {
            if (array[i] === array[j]) {
                newArray.push(array[i])
            }
        }
    }
    return newArray
}