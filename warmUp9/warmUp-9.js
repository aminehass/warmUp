// 1-Create arrays in the global scope consisting of strings that represent:
// -name of females in your class
// -name of males in your class
// -name of your class instructors 

// 2-write a function that takes an array as an argument and returns the element that is located in the middle of that array.

// 3-Change all the numbers in the array to be multiplied by two for even indexes.
var female = ['siwar', 'nouhe'];
var male = ['ayman', 'mootaz', 'amir', 'amine', 'belgecem', 'ali', 'afif', 'amir', 'mohamed', 'taha', 'houssem', 'omar']
var classInstructors = ['walid', 'matt', 'cassel']

function middle(array) {
    if (array.length % 2 === 0) {
        return array[(array.length / 2) - 1];
    }
    else return array[((array.length - 1) / 2)]
}

function multiplyEvenIndexByTwo(array) {
    var arr = [];
    for (var i = 0; i < array.length; i = i + 1) {
        if ([i] % 2 === 0) {
            arr.push(array[i] * 2)
        }
        else arr.push(array[i]);
    }
    return arr;
}