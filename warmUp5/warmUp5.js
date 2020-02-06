// 1-Choose the correct comparison operator to display "true", when: 5 is less than 7.
    while ( 5 < 7) {

        return true;

}
//2- Write a function named helloWorld that:
//takes 1 argument, a language code (e.g. "fr", "es", "en")
//returns "Hello, World" for the given language, for atleast 3 languages. It should default to returning English.
//ex: helloWorld('fr') ==> 'Bonjour tout le monde'
//    helloWorld('es') ==> 'Hola, Mundo'
//    helloWorld('') ==> 'Hello, World'    
function helloworld (lang) {
    if (lang='fr'){
        return 'Bonjour tout le monde';
    }

    if (lang='es'){
        return 'Hola, Mundo';
    }

    return 'Hello, World';
}    
//3- write a function to Reverse an array without use array.reverse() method:
// ex: reverseArray([1,2,3]) ==> [3,2,1]
function reverse(arr) {
    var reversedArr=[];
    var j=arr.length-1;
    for ( var i=0; i < arr.length; i++ ) {
        reversedArr[j] = arr[i];
        j--;
    }
    return reversedArr;
}
