// 1-Choose the correct comparison operator to display "true", when: 5 is less than 7.
5 !== 7
//2- Write a function named helloWorld that:
//takes 1 argument, a language code (e.g. "fr", "es", "en")
//returns "Hello, World" for the given language, for atleast 3 languages. It should default to returning English.
//ex: helloWorld('fr') ==> 'Bonjour tout le monde'
//    helloWorld('es') ==> 'Hola, Mundo'
//    helloWorld('') ==> 'Hello, World'
function helloWorld(str) {
    if (str === 'fr') {
        return 'Bonjour, tout le monde';
    }
    else if (str === 'es') {
        return 'Hola, mundo';
    }else if (str === 'en'){
        return 'Hello, World';
    } else return 'Please choose one of these langages: fr, es, en'
}        
//3- write a function to Reverse an array without use array.reverse() method:
// ex: reverseArray([1,2,3]) ==> [3,2,1]