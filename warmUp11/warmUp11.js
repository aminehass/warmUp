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

///////////////////////
/*
var classmate(i) = {
  firstName : firstName,
  LastName : LastName,
  gender : gender,
  address : address,
  age : age,
  phoneNumber : phoneNumber
};
*/
function makeClassMates(firstName, LastName, gender, address, age, phoneNumber) {
  return {
    firstName : firstName,
    LastName : LastName,
    gender : gender,
    address : address,
    age : age,
    phoneNumber : phoneNumber
  };
}

var classmate = [firstName, LastName, gender, address, age, phoneNumber];

function displayFriend(classmate) {
  return classmate.firstName + ' ' + classmate.LastName + ' ' + classmate.phoneNumber;
}

var classMates = [classmate1, classmate2, classmate3];

function addFriend(classmates, classmate) {
  classmates.push(classmate);
}

function nbOfMale(classmate) {
  var result = 0;
  if(classmate.gender === "Male") {
    result++;
  }
  return result;
}

