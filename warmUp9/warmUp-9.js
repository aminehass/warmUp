// 1-Create arrays in the global scope consisting of strings that represent:
// -name of females in your class
// -name of males in your class
// -name of your class instructors 
var females=['siwar', 'nouha', 'halima'];
var males=['amine', 'afif', 'firass', 'ali', 'belgacem', 'houssem', 'taha'];
var instructors=['walid', 'cassels', 'matt', 'seif', 'hadhemy', 'safa'];


// 2-write a function that takes an array as an argument and returns the element that is located in the middle of that array.
function middle(array){
    if(array.length%2===0){
        return array[(array.length/2)-1]+' & '+array[array.length/2]
    }
    return array[(array.length-1)/2];
}
// 3-Change all the numbers in the array to be multiplied by two for even indexes.

function evenIndexes(array){
    var arr=[];
    for(var i=0; i<array.length; i++){
        if (i%2===0){
            arr.push(array[i]*2);
        }
    }
    return arr;
}