// 1-Choose the correct comparison operator to display "true", when: 5 is less than 7.
5 < 7 //=> true


//2- Write a function named helloWorld that:
//takes 1 argument, a language code (e.g. "fr", "es", "en")
//returns "Hello, World" for the given language, for atleast 3 languages. It should default to returning English.
//ex: helloWorld('fr') ==> 'Bonjour tout le monde'
//    helloWorld('es') ==> 'Hola, Mundo'
//    helloWorld('') ==> 'Hello, World' 

 function helloWorld (lang) {
     if (lang==='fr'|| lang==='FR'||lang==='Fr') {
         return 'Bonjour tout le monde'
     }
     else if (lang==='es'|| lang==='ES'||lang==='Es') {
         return 'Hola, Mundo'
     }
        return 'Hello, World'
 }
 // by default this the function helloWorld return english language 

//3- write a function to Reverse an array without use array.reverse() method:
// ex: reverseArray([1,2,3]) ==> [3,2,1]

function reverseArray ( arr ) {
    var arr1 = []
     for (var i = arr.length-1; i>=0; i--) {
    arr1.push(arr[i]);
     } 
    return arr1;
}
