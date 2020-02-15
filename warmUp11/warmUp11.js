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

function makeClassmates (name, age, glasses, sex) {
  return {
    name: name,
    age: age,
    glasses: glasses,
    sex: sex
  }
}

var classmate1 = makeClassmates ("Amine", 41, "no", "male");
var classmate2 = makeClassmates ("Afif", 27, "no", "male");
var classmate3 = makeClassmates ("Ali", 29, "no", "male");
var classmate4 = makeClassmates ("Taha", 35, "yes", "male");
var classmate5 = makeClassmates ("Houssem", 31, "yes", "male");
var classmate6 = makeClassmates ("Amine Ziadi", 28, "yes", "male");
var classmate7 = makeClassmates ("Nouha", 28, "yes", "female");
var classmate8 = makeClassmates ("Siwar", 28, "no", "female");

var classmates = [classmate1, classmate2, classmate3, classmate4, classmate5, classmate6, classmate7];


function displayFriend (mate) {
  for (var key in mate) {
    return "My classmate " + mate.name + " has " + mate.age + " years old." 
      }
}

function addFriend (mate) {
  classmates.push(mate);
}

function nbOfMale (array) {
  var nbofmale = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i].sex === "male") {
      nbofmale += 1;
    } else {
      nbofmale +=0;
    }
  }
  return nbofmale;
}

function searchMates (query, array) {
  for(var i = 0; i < array.length; i++) {
    if ( (/query/g) in array[i]  ){
      return displayFriend (array[i]);
    }
  }
}


