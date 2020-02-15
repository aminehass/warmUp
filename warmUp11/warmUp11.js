/*
1. create a data model to represent your classmates
    • think of different attributes of your classmates? what do all of them have ?
    • create a factory function.
    • create an array to hold the classmates that you created and what you created to it .
    • write a function called displayFriend that takes a mate as an argument and returns the important information in a readable way.
    • write a function called addFriend that takes a mate as an argument and add it to you classMates arraya.
    • calculate the number of male friends that your class have by writing a function called nbOfMale.
    • Write a function searchMates that, given a query and an array of Mates,
      searches the array of mates for "matching" mate. You will decide what way you want to write your search algorithm.
*/
function makeClassmate(name, age, gender) {
  return {
    name:name,
    age:age,
    gender:gender
  };
}
var classMate1=makeClassmate('Ali', 30, 'male');
var classMate2=makeClassmate('Siwar', 26, 'female');
var classMate3=makeClassmate('Taha', 41, 'male');

var classMates=[classMate1,classMate2,classMate3];

function displayFriend(classMate) {
  return classMate.name+' is '+classMate.age+', gender '+classMate.gender+'.';
}
function addFriend(classMates, classMate) {
  return classMates.push(classMate);
}

function nbOfMale(classMates) {
  var c=0;
  for(var i=0; i<classMates.length; i++) {
    if (classMates[i].gender === 'male') {
          c=c+1;
    }
  }
  return c;
}

function searchMates(n, classMates) {
  var display='';
  for(var i=0; i<classMates.length; i++) {
    if(classMates[i].age === n) {
      display=display+ i +' .'+displayFriend(classMates[i])+ '\n';
    }
  }
  return display;
}
