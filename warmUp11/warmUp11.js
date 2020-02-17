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
var data=[
  {
    firstName:'Omar',
    lastName:'Yaakoubi',
    age:18,
    CIN:020201525,
    gender:'Male'
  },
  {
    firstName:'Amine',
    lastName:'Ziadi',
    age:29,
    CIN:012548524,
    gender:'Male'
  },
  {
    firstName:'Houssem',
    lastName:'Abdelli',
    age:28,
    CIN:07845634,
    gender:'Male'
  }  
];
// function factory (firstName, lastName, age, CIN,) {
//   var data;

// }


function displayFriend (array, cin) {
  for (var i = 0; i < array.length; i++) {
    if (cin === array[i].CIN) {
      return 'My classmate '+array[i].firstName+' '+array[i].lastName+' is a '+array[i].gender+', he has '+array[i].age+'Y.O '+ 'and Cin: '+array[i].CIN;
    }
  }
}


function addFriend (array, firstname, lastname, ages, cin, Gender) {
  array.push({
      firstName:firstname,
      lastName:lastname,
      age:ages,
      CIN:cin,
      gender:Gender
  });
  return array;
}


function nbOfMale(array) {
    var x='Male' ;
    var nbr=0;
  for (var i = 0;i < array.length; i++) {
    if(array[i].gender === x) {
       nbr=nbr+1;
    }
  }
  return nbr;
}


function searchMates(query,array) {
  for (var i = 0; i < array.length; i++) {
    var x= array[i];
    for (var key in x) {
        if (x[key] === query) {
          return x;
        }
    }
  }
}