// 1-Create arrays in the global scope consisting of strings that represent:
// -name of females in your class
// -name of males in your class
// -name of your class instructors 
var classMates = [
    { name: { first: 'Houssem', middle: 'Eddine.', last: 'Abedelli' }, age: 33 },
    { name: { first: 'Taha', last: 'Khelfa' }, age: 39 },
    { name: { first: 'Omar', last: 'Yakoubi' }, age: 18 },
    { name: { first: 'Nouha', last: 'Chorfi' }, age: 28 },
    { name: { first: 'Siwar', last: 'Hkimi' }, age: 26 },
    { name: { first: 'Walid', last: 'HajHoussin' }, age: 28 },
    { name: { first: 'Cassels', last: 'XXX' }, age: 24 }]
    ;

// 2-write a function that takes an array as an argument and returns the element that is located in the middle of that array.
function middleOfArray(array) {
    var x = array.length;
    if (x % 2 !== 0) {
        return array[Math.floor((x / 2))];
    }
    else {
        return "the array have an odd number of elements"
    }
}
// 3-Change all the numbers in the array to be multiplied by two for even indexes.
function evenIndexes(array) {
    var array2 = []
    for (i = 0; i < array.length; i++) {
        if (i % 2 === 0) {
            array2.push(array[i] * 2)
        }
    }
    return array2
} 