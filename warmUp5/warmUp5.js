// 1-Choose the correct comparison operator to display "true", when: 5 is less than 7.
/************** I used the comparison operator less than ***************/ 
if (5 < 7){
     true;
}
//2- Write a function named helloWorld that:
//takes 1 argument, a language code (e.g. "fr", "es", "en")
//returns "Hello, World" for the given language, for atleast 3 languages. It should default to returning English.
//ex: helloWorld('fr') ==> 'Bonjour tout le monde'
//    helloWorld('es') ==> 'Hola, Mundo'
//    helloWorld('') ==> 'Hello, World'      

/************    I used the if and else statements to check the input and i didn't check the input 'en' because the function
 will return 'Hello world' by default **************/ 

function helloWorld(string){
    if (string==="fr"){
        return 'Bonjour tout le monde';
    } else if (string==="es"){
        return 'Hola, Mundo';
    } 
    return 'Hello, World';
}

helloWorld("fr");
helloWorld("es");
helloWorld("en");
helloWorld("");
//3- write a function to Reverse an array without use array.reverse() method:
// ex: reverseArray([1,2,3]) ==> [3,2,1]

/************ I this question i assign the  last element of the array into the new array "result" with the array.push() 
 and decrement the counter by one  ************/ 
 
function reverseArray (array){
    var result=[];
    for (var i=array.length-1; i>-1; i--){
        result.push(array[i]);
    }
    return result;
    
}

reverseArray([1,2,3]);
