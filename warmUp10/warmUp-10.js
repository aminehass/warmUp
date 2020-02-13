// 1-Write a function that takes a string as an input and returns the reverse of each letter 
//followed by a number starting from zero(solve it using while loop).
// example:    reverseStr('hello'); "o1l2l3e4h"
function reverseStr(string) {
    var str = ''
    var i = string.length
    var counter = 0
    while(i--){
        counter++
        str=str+string[i]+counter
    }
    return str.slice(0,str.length-1)
}
// 2-write a function that takes array of strings and returns an array of the strings that have the same length
// example :  ['hi','hello','welcome','hy'] == > ["hi","hy"]
function sameLength(array) {
  
}
///// I did not find the solution 