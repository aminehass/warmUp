/*
1. create a data model to represent your classmates
    • think of different attributes of your classmates? what do all of them have ?
    • create a factory function.
    • create an array to hold the classmates that you created and what you created to it .
    • write a function called displayFriend that takes a mate as an argument and returns the important information in a readable way.
    • write a function called addFriend that takes a mate as an argument and add it to you classMates array.
    • calculate the number of male friends that your class have by writing a function called nbOfMale.
    • Write a function searchMates that, given a query and an array of Mates,
      searches the array of mates for "matching" mate. You will decide what way you want to write your search algorithm.
*/

function factoryClassMates(firstname, lastname, gender, attributes) {
  return {
    Firstname: firstname,
    Lastname: lastname,
    Gender: gender,
    Attributes: attributes
  };
}

var classMates = [{friend1:factoryClassMates("Amir",  "Ben Youssef",  "male",   "Hard worker")},
   {friend2: factoryClassMates("Aymen",  "Yaich",  "Male",   "Cocky")},
   {friend3: factoryClassMates ("Wala",  "Abdaoui", "Male",   "Courageous")},
   {friend4: factoryClassMates("Afif",  "Rakrouki", "Male",   "Funny")},
   {friend5:factoryClassMates("Nouha", "Chorfi", "female",   "Smart")},
   {friend6: factoryClassMates("Siwar",  "Hkimi",  "female",   "Good at solving problems")}
]


function displayFriend(mate) {
  return mate. Firstname + ' ' + mate.Lastname + ' ' + mate.Gender + ' ' + mate.Attributes
}