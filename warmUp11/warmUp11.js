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

var classMates = [
  { name: { first: 'Houssem', middle: 'Eddine', last: 'Abedelli' }, age: 33 },
  { name: { first: 'Taha', last: 'Khelfa' }, age: 39 },
  { name: { first: 'Firas', last: 'Mrad' }, age: 24 },
  { name: { first: 'Ali', last: 'Soudani' }, age: 28 },
  { name: { first: 'Wala', last: 'Abdellaoui' }, age: 29 }
];

var array = [classMates];
console.log(array)

function displayFriends(object) {
  return Object.values(classMates)

}

function addFriends(object, add) {
  return Object.push(add);
}


