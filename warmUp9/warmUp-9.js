// 1-Create arrays in the global scope consisting of strings that represent:
// -name of females in your class
// -name of males in your class
// -name of your class instructors 

// 2-write a function that takes an array as an argument and returns the element that is located in the middle of that array.

// 3-Change all the numbers in the array to be multiplied by two for even indexes.


var females=['Nouha', 'Siwar']
var males=["Amin", "Firas", "Aymen", "Housem" ]
var instructors=['Wamid', 'Matt', 'Cassels', 'seif']

function midd (array){
  if (array.length%2===0){
    return "invalid input"
   }

     return array[(array.length-1)/2]
 }



 function evenby2(array) {
 var acc=array
for (var i = 0; i < array.length; i++) {
    acc.push(array[2 * i + 1]*2);
  }

  return acc 
}

