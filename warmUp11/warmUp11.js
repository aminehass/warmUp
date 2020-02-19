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

var classMates = [{
  Name: "ali",
  Age: "25",          
  Birth: "14/08/2000",
  Living: "gafsa",
  Gender: "Male"
},{
  Name: "siwar",
  Age: "26",          
  Birth: "14/04/2001",
  Living: "tunis",
  Gender: "female"
},{
  Name: "taha",
  Age: "41",          
  Birth: "12/01/1995",
  Living: "tunis",
  Gender: "male"
}];
function classmateFactory(name,age,dateOfBirth,living,gender) {
  return {
    Name: name,
    Age: age,          
    Birth: dateOfBirth,
    Living: living,
    Gender: gender
  };
}
function makeClassList(classMates) {
  return  {
    displayFriend: function(mate) {
      for(var i=0; i<classMates; i++){
        if(classMates[i].name === mate){
          console.log(name+' is '+age+' years old, '+gender+' born on '+dateOfBirth+' and living in '+living+'.')
        }
      }
    },
    addFriend: function(mate) {
      classMates.push(classmateFactory);
    },
    nbOfMale: function() {
      var nbOfMales=0;
      for(var i=0; i<classMates; i++){
        if(classMates[i].gender.toUpperCase() === 'MALE'){
          nbOfMales++;
        }
      }
      return nbOfMales;
    },
    searchMates: function(query,classMates) {

    }
    }
}
