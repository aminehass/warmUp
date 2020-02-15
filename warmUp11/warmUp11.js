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
// attributes may be: age, name, gender..

function makeClassmate(name,age,gender){
  return{
    name:name,
    age:age,
    gender:gender
  };
}
// we use the factory funtion makeClassmate to create mate atributes within an object , than we will put them into our array of mates
var person1=makeClassmate('afif',25,'male');
var person2=makeClassmate('siwar',26,'female');
var person3=makeClassmate('taha',39,'male');
var persons=[person1,person2,person3]

// we create a function to display any mate informations

function displayMate(mate){
  return 'this is '+mate.name+' ,his age is '+mate.age+' and his gender is '+mate.gender;
}

// we will create a new mate object with our factory function than we will push it into our array of mates;

function addFriend(name, age, gender, array){
   array.push(makeClassmate(name, age, gender));
   return array
}

// we will loop over our array of mates and access our object to count how many male are they in the attribute of gender
// we will need our function each to loop over the array
// function each(coll, callback){
// 	if(Array.isArray(coll)){
// 		for( var i = 0; i < coll.length; i++){
// 			callback(coll[i], i)
// 		}
// 	}
// 	else{
// 		for(var key in coll){
// 			callback(coll[key], key)
// 		}
// 	}
// }

function nbOfMale(array, str){
  var result=0;
  if (str==='male'){
  each(array, function(value,key){
    if(value.gender===str){
      result=result+1
    }
  })
}else{return 'check your gender entry'}
  return result;
}

function searchMates(array,query){
  var result=[];
  each(array, function(value,key){
    if(displayMate(value).includes(query)){
      result.push(value)
    }
  })
  return result
}