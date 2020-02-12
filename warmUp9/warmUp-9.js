// 1-Create arrays in the global scope consisting of strings that represent:
// -name of females in your class
// -name of males in your class
// -name of your class instructors 
var array=[
    {
        classMate:'female',
        list:['Siwar','Nouha']
    },
    {
        classMate:'male',
        list:['Ali','Houssem','Taha','Wala','Ghazi']
        },    
    {instructors:['Cassel','Matt','Walid']
    }
];

// 2-write a function that takes an array as an argument and returns the element that is located in the middle of that array.
function middle(array) {
    if (array.length % 2 === 0) {
    return array[Math.floor(array.length/2)];
    }
    return 'undefined';
}

// 3-Change all the numbers in the array to be multiplied by two for even indexes.


function multipliedByTwo(array) {
    for(var i=0; i<array.length; i++) {
        if (typeof array[i]==='number') {
            array[i]=array[i]*2;
        }
    }
    return array;
}