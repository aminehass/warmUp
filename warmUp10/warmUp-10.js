// 1-Write a function that takes a string as an input and returns the reverse of each letter 
//followed by a number starting from zero(solve it using while loop).
// example:    reverseStr('hello'); "o1l2l3e4h"
function reverseStr(str) {
    var i = str.length - 1;
    var reverse = '';
    while (i >= 0) {
        reverse = reverse + str[i] + (str.length - i);
        i--;
    }
    return reverse.slice(0, reverse.length - 1);
}

// 2-write a function that takes array of strings and returns an array of the strings that have the same length
// example :  ['hi','hello','welcome','hy'] == > ["hi","hy"]
function sameLength(array) {
    var same = [];
    for (var i = 0; i < array.length; i++) {
        for (var j = array.length - 1; j > 0; j--)
            if (array[i].length === array[j].length && array[i] !== array[j]) {
                same.push(array[i], array[j])
            }
    } return same;
}