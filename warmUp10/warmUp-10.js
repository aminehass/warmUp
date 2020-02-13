// 1-Write a function that takes a string as an input and returns the reverse of each letter 
//followed by a number starting from zero(solve it using while loop).
// example:    reverseStr('hello'); "o1l2l3e4h"


function inverseMyWord ( string ){

var wordFinal ="0";
var j = string.length;
var k = 1;
while (string.length>0){

    wordFinal = wordFinal + k+string.slice(0,j)
    j = j-1
    k=k+1


}

return wordFinal

}


// 2-write a function that takes array of strings and returns an array of the strings that have the same length
// example :  ['hi','hello','welcome','hy'] == > ["hi","hy"]

function sameLength (  array ){

var arr = [];

for ( i = 0 ; i< array.length ; i++){

  for ( j= 0 ; j<array.length ; j ++) {

    if (array[i].length=array[j].length){

        arr.push(array[i]);
        arr.push(array[j])
    }
}

}

return arr;

}





