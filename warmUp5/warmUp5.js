// 1-Choose the correct comparison operator to display "true", when: 5 is less than 7.
5 < 7;
//2- Write a function named helloWorld that:
//takes 1 argument, a language code (e.g. "fr", "es", "en")
//returns "Hello, World" for the given language, for atleast 3 languages. It should default to returning English.
//ex: helloWorld('fr') ==> 'Bonjour tout le monde'
//    helloWorld('es') ==> 'Hola, Mundo'
//    helloWorld('') ==> 'Hello, World'
// the function helloWorld take 'hello world and translated to the languag chosen as parameter
function helloWorld(language) {
  if (language === "fr") {
    console.log("Bonjour tout le monde");
  } else if (language === "es") {
    console.logn("Hola, Mundo");
  } else if (language === "ar") {
    console.log("صباح الخير جميعاً");
  } else if (language === "en") {
    console.log("hello world");
  }
}
//3- write a function to Reverse an array without use array.reverse() method:
// ex: reverseArray([1,2,3]) ==> [3,2,1]
// the function reverse push the last value of the array given as parameter into a new array 'arr' , and decrease the index'i'by 1
function reverse(array) {
  var arr = [];
  for (i = array.length - 1; i >= 0; i = i - 1) {
    arr.push(array[i]);
  }
  return arr;
}
