// 1-Create arrays in the global scope consisting of strings that represent:
// -name of females in your class
// -name of males in your class
// -name of your class instructors 
var nameFemales = ['Nouha', 'Siwar'];
var nameMales = ['Fras', 'Amine','Aymen', 'Omar', 'Moetez', 'Houssem', 'Taha', 'Amir', 'Ali'];
var nameInstructors = ['Walid', 'Casseles','Matt', 'Seif'];

// 2-write a function that takes an array as an argument and returns the element that is located in the middle of that array.

function middle(array){
    if (array.length % 2 === 0){
    console.log(array[(array.length / 2) - 1], array[(array.length / 2 )])
    }
    console.log(array[((array.length - 1) / 2)])
}

// Or if you want to return a value instead of console.log, here is the code

function middle2(array){
    if (array.length % 2 === 0){
    return(array[(array.length / 2) - 1]+" "+ array[(array.length / 2 )])
    }
    return(array[((array.length - 1) / 2)])
}

// 3-Change all the numbers in the array to be multiplied by two for even indexes.

function multipliedByTwoForEvenIndexes(array){
  var acc = [];
  for (var i = 0; i < array.length; i++){
     if ( i % 2 === 0){
     acc.push(array[i] * 2);
     }
     else {
       acc.push(array[i]);
       }
  }
  return acc;
}