// 1-Choose the correct comparison operator to display "true", when: 5 is less than 7.

// The comparision below return always true .
5<7;

//2- Write a function named helloWorld that:
//takes 1 argument, a language code (e.g. "fr", "es", "en")
//returns "Hello, World" for the given language, for atleast 3 languages. It should default to returning English.
//ex: helloWorld('fr') ==> 'Bonjour tout le monde'
//    helloWorld('es') ==> 'Hola, Mundo'
//    helloWorld('') ==> 'Hello, World'    

// The function below return Hellow World in french and spanish languages, otherwise it returns the english version.
function helloWorld ( language ) {
    if ( language === 'fr' ) {
        return 'Bonjour tout le monde';
    }
    else if ( language === 'es' ) {
        return ' Hola, Mundo';
    }
    else {
        return 'Hello, World';
    }
}

//3- write a function to Reverse an array without use array.reverse() method:
// ex: reverseArray([1,2,3]) ==> [3,2,1]

// The function below reverse an array
function reverseArray(array){
    var i= array.length-1
    var reversed_Array=array;
    array=[];
    
    while (i>=0){
        array.push(reversed_Array[i]);
        i--;
    }

    return array;
}