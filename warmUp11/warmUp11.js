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
function classmates(name, age, gender, favs, nationality) {
  return {
    fullName: name,
    Age: age,
    Gender: gender,
    Favourites: favs,
    Nationality: nationality
  };
}
var classmates = [];
function displayFriend(mate) {
  return mate.fullName + ', is ' + mate.Age + 'years old, from ' + mate.Nationality;
}
function addFriend(mates, friend) {
  mates.push(friend);
}
function nnumberofmales(mates) {
  var males = 0;
  for (var mate in mates) {
    if (mates[mate].Gender === 'male') {
      males++;
    }
  }
  return males;
}

function searchMates
