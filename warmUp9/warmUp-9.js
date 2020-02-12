// 1-Create arrays in the global scope consisting of strings that represent:
// -name of females in your class
// -name of males in your class
// -name of your class instructors 


var arrayFemales = ["Siwar", "Nouha"];
var arrayMales = ["Omar", "Taha", "Houssem", "Me"];
var arrayInstructors = ["Hadhemy", "Walid", "Cassels", "Seif", "Matt"];


// 2-write a function that takes an array as an argument and returns the element that is located in the middle of that array.


function middleArray(array) {
    var x = array.length;

    if (x % 2 !== 0) {
        return array[Math.floor((x / 2))];
    }
    else {
        return "the array must have an odd number of elements"
    }
}

// 3-Change all the numbers in the array to be multiplied by two for even indexes.


function changeEvenIndexes(array) {
    var newArray = [];
    for (var i = 0; i < array.length; i = i + 1) {
        if (i % 2 === 0) {
            newArray.push(array[i] * 2);
        }
    }
    return newArray;
}
