// 1-Write a function that takes a string as an input and returns the reverse of each letter 
//followed by a number starting from zero(solve it using while loop).
// example:    reverseStr('hello'); "o1l2l3e4h"


// 2-write a function that takes array of strings and returns an array of the strings that have the same length
// example :  ['hi','hello','welcome','hy'] == > ["hi","hy"]

function reverseStr(string) {
    var reversed = '';
    var index = 1
    for (var i =(string.length-1); i>=0; i-- ){
        if (index<string.length){
            reversedString=reversedString.concat ( string[ i ] + index );
        }
        else {
            reversedString=reversedString.concat (string[ i ]);
        };
        index = index + 1;
    };
    return reversed
}


//Q2
function stringLength ( array ) {
    var acc=[];
    var comparing="";
    for ( var i=0 ; i<array.length ; i++){
        comparing=array[i]
        for (var x=i+1; x<array.length; x++){
            
            if (comparing.length===array[x].length){
                acc.push(array[i],array[x]);
                array.splice(x,1);
                array.splice(i,1);
            }
        };
    };
    return acc
}
