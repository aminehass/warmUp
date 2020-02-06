// 1-Choose the correct comparison operator to display "true", when: 5 is less than 7.
   
     //The correct comparaison operator is (<)  ( 5 < 7);
   
     
//2- Write a function named helloWorld that:
//takes 1 argument, a language code (e.g. "fr", "es", "en")
//returns "Hello, World" for the given language, for atleast 3 languages. It should default to returning English.
//ex: helloWorld('fr') ==> 'Bonjour tout le monde'
//    helloWorld('es') ==> 'Hola, Mundo'
//    helloWorld('') ==> 'Hello, World'     

// Function that returns a world greeting in different languages depending on the input argument;
function helloWorld ( languageCode )  {    
      if ( languageCode === "fr"){

          return "Bonjour tout le monde" ;  // return in French

      } else if ( languageCode === "es") { 

        return "Hola,Munde" ;   // returns in Spanish

      } else if ( languageCode=== "ar") {

        return "مرحبا كل العالم" ;  // returns in Arabic

      } else if ( languageCode === '') {
        
        return "Hello , World";    // returns in English

      } return "Sorry, your language does not belong to our DataBase!!!!";  

 } 







//3- write a function to Reverse an array without use array.reverse() method:
// ex: reverseArray([1,2,3]) ==> [3,2,1]


// This function inverse the elements of an Array regardelss their types.
function inverseMyArray ( array ) {
 
    var arrayTwo =[];

for (i= array.length-1 ; i>= 0 ; i--) {    //For loops is used to ensure the iteration of all the elemnts.
    
    arrayTwo[array.length-1-i] = array[i];

}

       return arrayTwo;

}