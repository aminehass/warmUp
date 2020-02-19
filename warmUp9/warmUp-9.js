// 1-Create arrays in the global scope consisting of strings that represent:
// -name of females in your class
// -name of males in your class
// -name of your class instructors 

var feamalesInMyClass = ['siwar', 'nouha', 'halima'];
var malesInMyClass = ['amine', 'ali', 'omar', 'taha', 'houssem'];
var instructorsInMyClass = ['walid', 'safa', 'cassel', 'hadhemi'];

// 2-write a function that takes an array as an argument and returns the element that is located in the middle of that array.

function middle(array) {
    var str = '';
    var x = Math.floor(array.length/2);
    str = array[x];
    return str;
}

// 3-Change all the numbers in the array to be multiplied by two for even indexes.

function evenIndexMultipliedByTwo(array) {
    var result = [];
    for(var i = 0; i < array.length; i++) {
        if(i%2 === 0) {
            result.push(array[i]*2);
        }
        else {result.push(array[i]);
    }
}
    return result;
}