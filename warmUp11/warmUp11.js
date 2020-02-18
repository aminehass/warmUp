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

function classMates(fullName, sex, age){
   return {
   FullName: fullName,
   Sex:sex,
   Age: age
   };
}

var person1 = classMates(Abdulhadi Addeeb, male, 30);
var person2 = classMates(Amine Hassine, male, 41);
var person3 = classMates(Nouha Chorfi, female, 28);
var person4 = classMates(Omar Yakoubi, male, 18);
var person5 = classMates(Firas Mrad, male, 22);
var person6 = classMates(Siwar Hkimi, female, 27);

var acc = [person1, person2, person3, person4, person5, person6];

function displayFriend(name){
    for (var i =0; i < acc.length; i++){
       if ( acc[i].FullName === name){
        console.log(acc[i]);
        }
    }
}

function addFriend(fullName, sex, age){
    acc.push(classMates(fullName, sex, age));
}

function nbOfMale(array){
    var nbo = 0;
    for (var i = 0; i < array.length; i++){
        if( array[i].Sex === "male"){
          nbo += 1;
        }
    }
}

function searchMates(query, array){
      for (var i = 0; i < array.length; i++){
          for (var key in array[i]){
      }

// I did't finish it because I did't understand what type of query I have to take in consideration



}