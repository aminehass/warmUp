// 1-Create arrays in the global scope consisting of strings that represent:
// -name of females in your class
// -name of males in your class
// -name of your class instructors 

var FemalesInClass = ['Nouha', 'Siwar']
var MalesInClass = ['walaa', 'Aymen', 'Amine', 'Mootaz', 'Kheireddine', 'Houssem', 'Taha']
var Instructor = ['Cassels', 'Walid', 'Seif', 'Matt']
// 2-write a function that takes an array as an argument and returns the element that is located in the middle of that array.
function middle (array){
    return array[Math.floor((array.length)/2)]
}
// 3-Change all the numbers in the array to be multiplied by two for even indexes.
function multieven (array){
    for (var i = 0; i<array.length; i= i +2){
        return array[i] = array[i]*2;
    }
}