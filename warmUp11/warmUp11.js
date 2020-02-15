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

var classMates = [];
function classMates(name, age, gender) {
  return {
    name: name,
    age: age,
    gender: gender
  }
}
var mate1 = Classmates('Mootaz', 19, 'male');
var mate2 = Classmates('Amir', 29, 'male');
var mate3 = Classmates('Aymen', 37, 'male');
var mate4 = Classmates('Nouha', 26, 'female');
var mate5 = Classmates('Siwar', 24, 'female');
var mate6 = Classmates('Taha', 39, 'male');
var mate7 = Classmates('Afif', 26, 'male');
var mate8 = Classmates('Mohamed', 25, 'male');
var mate9 = Classmates('Rabeb', 23, 'female');
var mate10 = Classmates('Ali', 29, 'male');
classMates.push(mate1, mate2, mate3, mate4, mate5, mate6, mate7, mate8, mate9, mate10);

function displayFriend(mate) {
  return "name: " + this.name + "\nage: " + this.age + " \ngender:" + this.gender;
}
function add(mate) {
  return classMates.push({
    name: name,
    age: age,
    gender: gender
  });
}
function nbOfMale(classMates) {
  var male = 0;
  if (this.gender === 'male') {
    male++;
  }
  return male;
}