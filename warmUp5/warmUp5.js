// 1-Choose the correct comparison operator to display "true", when: 5 is less than 7.
5<7;

//2- Write a function named helloWorld that:
//takes 1 argument, a language code (e.g. "fr", "es", "en")
//returns "Hello, World" for the given language, for atleast 3 languages. It should default to returning English.
//ex: helloWorld('fr') ==> 'Bonjour tout le monde'
//    helloWorld('es') ==> 'Hola, Mundo'
//    helloWorld('') ==> 'Hello, World' 

function helloWorld( languageCode){
  if( languageCod === 'fr'){
    return 'Bonjour tout le monde';
  }
  else if( languageCod === 'es'){
    return 'hola, Mundo';
  }
  else{
    return 'Hello, World';
   }
}
//3- write a function to Reverse an array without use array.reverse() method:
// ex: reverseArray([1,2,3]) ==> [3,2,1]
  
// we will strat our counter i from the end of the inpout array, and push it in the new array

function reverseArray( array){
  var arr=[];
  var i=array.length;

  while(i--){
    arr.push(array[i]);
  }
  return arr;
}