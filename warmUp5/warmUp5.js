// 1-Choose the correct comparison operator to display "true", when: 5 is less than 7.
//2- Write a function named helloWorld that:
//takes 1 argument, a language code (e.g. "fr", "es", "en")
//returns "Hello, World" for the given language, for atleast 3 languages. It should default to returning English.
//ex: helloWorld('fr') ==> 'Bonjour tout le monde'
//    helloWorld('es') ==> 'Hola, Mundo'
//    helloWorld('') ==> 'Hello, World'        
//3- write a function to Reverse an array without use array.reverse() method:
// ex: reverseArray([1,2,3]) ==> [3,2,1]
5<7
function helloWorld(str){
	if (str==="fr"){
	console.log (" Bonjour tout le monde")
	}
	if (str==="es"){
	 console.log ("Hola, Mundo")
   }
 else return ("Hello, World")
 
 }





 function reverse(array){
	var arr=[]
	for (var i=array.length-1;i>=0; i--){
		arr.push(array[i])
	};
	return arr
    };
	 
}

