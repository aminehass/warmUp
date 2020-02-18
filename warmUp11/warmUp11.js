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

function  factoryClassMates(name,age, gendre, nationality){
  return {
          name: name ,
          age:age,
          gendre: gendre,
          nationality: nationality          
  }
}

var classmates=[];


function each(coll, func) { 
  if (Array.isArray(coll)) { 
        for (var i = 0; i < coll.length; i++) { 
              func(coll[i], i); 
        } 
  } else { 
        for (var key in coll) { 
              func(coll[key], key); 
        } 
  } 
}

function displayFriend (arrayOfClassmates,name){
  var friend="";
  each (arrayOfClassmates, function (element, i){
    if(element.name===name){
      if (element.gendre==="male"){
          friend= element.name+ " is "+ element.age +" years old, he is " + element.nationality + ".\n"
      }
      else if (element.gendre==="female"){
        friend= element.name+ " is "+ element.age +" years old, she is " + element.nationality + ".\n"
      }
    }
  })
  return friend;
}

function addFriend(arrayOfClassmates,name, age , gendre , nationality){
  return arrayOfClassmates.push(factoryClassMates(name , age, gendre, nationality));
}

addFriend(classmates,"Siwar", 30, "female", "Tunisian");
addFriend(classmates,"Amine", 40, "male", "Tunisian");
addFriend(classmates,"Omar", 19, "female", "Tunisian");
addFriend(classmates,"ayman", 37, "female", "Tunisian");
addFriend(classmates,"Abdulhadi", 30, "female", "Lybian");

function nbOfMale(arrayOfClassmates){
  var counter = 0;
  each (arrayOfClassmates, function (element, i){
      if (element.gendre==="male"){
        counter=counter+1
      }
  })
  return counter
}

// Write a function searchMates that, given a query and an array of Mates,
//searches the array of mates for "matching" mate. You will decide what way you want to write your search algorithm.

function searchMates(query, arrayOfClassmates){
  var matchingMate=""
  each (arrayOfClassmates, function(element,i){
      each(element, function(value, key){
        if(value===query){
            matchingMate=displayFriend (arrayOfClassmates,element.name);
        }
      })
  })
  return matchingMate;
}