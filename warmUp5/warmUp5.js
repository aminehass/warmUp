// 1-Choose the correct comparison operator to display "true", when: 5 is less than 7.

function lessThan(num) {
    if (num < 7) {
        return (num + " " + true)

    }
    else {
        return num + " " + false
    }
}

// This function take a number as argument and if the number is less than 7 returns true else returns false.


//2- Write a function named helloWorld that:
//takes 1 argument, a language code (e.g. "fr", "es", "en")
//returns "Hello, World" for the given language, for atleast 3 languages. It should default to returning English.
//ex: helloWorld('fr') ==> 'Bonjour tout le monde'
//    helloWorld('es') ==> 'Hola, Mundo'
//    helloWorld('') ==> 'Hello, World'   

function helloWorld(language) {
    if (language === "es") {

        return ("Hola, Mundo")
    }
    else if (language === "fr") {

        return ("Bonjour tout le monde")
    }
    else {

        return ("Hello, world")
    }
}

// This function returns hello for the given langage,and returns laguage English default


//3- write a function to Reverse an array without use array.reverse() method:
// ex: reverseArray([1,2,3]) ==> [3,2,1]
function reverseArray(arr) {
    var newArray = [];

    for (var i = arr.length - 1; i >= 0; i--) {

        newArray.push(arr[i]);
    }

    return newArray;
}

// This function take an array as argument,and returns the reverse of the array with out using array.reverse() method.