/*
1. create a data model to represent your classmates
    • think of different attributes of your classmates? what do all of them have ?
    // first name, last name, gender , age 
    • create a factory function.
  
    • create an array to hold the classmates that you created and what you created to it .
    • write a function called displayFriend that takes a mate as an argument and returns the important information in a readable way.
    • write a function called addFriend that takes a mate as an argument and add it to you classMates arraya.
    • calculate the number of male friends that your class have by writing a function called nbOfMale.
    • Write a function searchMates that, given a query and an array of Mates,
      searches the array of mates for "matching" mate. You will decide what way you want to write your search algorithm.
*/

function makeClassmates(firstName, lastName, gender , age){
  return {
    firstName: firstName,
    lastName: lastName,
    gender: gender,
    age: age
  }
}
var classmates = [];
var mate1 = makeClassmates("Wala", "Abdaoui", "Male", 30);
var mate2 = makeClassmates("Mootaz", "djebali", "Male", 20 );
var mate3 = makeClassmates("Firas", "Mrad", "Male", 22);
var mate4 = makeClassmates("Nouha", "Chorfi", "Female", 30);
var mate5 = makeClassmates("Siwar", "Hkimi", "Female", 25);
var mate6 = makeClassmates("Ali", "Essoudani", "Male", 29);
var mate7 = makeClassmates("Taha", "Khelfa", "Male", 40);
var mate8 = makeClassmates("Mohamed", "Zemzmi", "Male", 26);
var mate9 = makeClassmates("Houssem" , "Abdelli", "Male", 33);
var mate10 = makeClassmates("Houssem", "Guesmi", "Male", 19);
var mate11 = makeClassmates("Omar", "Yakoubi", "Male", 19);
var mate12 = makeClassmates("Ahmad", "Addeeb","Male", 24);
var mate13 = makeClassmates("Khaireddine", "Lachtar", "Male", 24);
var mate14 = makeClassmates("Belgacem", "Zabbes", "Male", 25);
var mate15 = makeClassmates("Afif", "Rakrouki", "Male", 24);
var mate16 = makeClassmates("amine", "Hassine", "Male", 42);

classmates.push(mate1, mate2, mate3, mate4, mate5, mate6, mate7, mate8, mate9, mate10, mate11, mate12, mate13, mate14, mate15, mate16);

function displayFriend(mFirst, mLast){
  for (var i = 0; i< classmates.length; i++){
    if ((mFirst === classmates[i].firstName) && (mLast === classmates[i].lastName)){
    return ("First Name : "+ classmates[i].firstName + "\nLast Name: " + classmates[i].lastName + "\nGender: "+ classmates[i].gender + "\nage: "+ classmates[i].age);
    }
  } 
  return "not found"
}

function addFriend (firstName, lastName, gender , age){
  return classmates.push ( {
    firstName: firstName,
    lastName: lastName,
    gender: gender,
    age: age
  });
}

function nbrOfmale (){
  var count = 0;
  for (var i = 0; i< classmates.length; i++){
    if (classmates[i].gender === "Male") {
      count+= 1;
    }
  }
  return count;
}

function searchMate(mFirst, mLast, array){
  mFirst = mFirst.toUpperCase();
  mLast = mLast.toUpperCase();
  for (var i = 0; i< array.length; i++){
    if ((mFirst === (array[i].firstName).toUpperCase()) && (mLast === array[i].lastName.toUpperCase())){
    return ("First Name : "+ array[i].firstName + "\nLast Name: " + array[i].lastName + "\nGender: "+ array[i].gender + "\nage: "+ array[i].age);
    }
  } 
  return "not found"
}




