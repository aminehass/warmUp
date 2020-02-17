/*
1. create a data model to represent your classmates
    • think of different attributes of your classmates? what do all of them have ?
    • create a factory function.
    • create an array to hold the classmates that you created and what you created to it .
    • write a function called displayFriend that takes a mate as an argument and returns the important information in a readable way.
    • write a function called addFriend that takes a mate as an argument and add it to you classMates arraya.
    • calculate the number of male friends that your class have by writing a function called nbOfMale.
    • Write a function searchMates that, given a query and an array of Mates,
      searches the array of mates for "matching" mate. You will decide what way you want to write your search algorithm.
*/

// I will put name , last name , age , city and  gender , previous computing background (take true or false)

// Function createMyClass permit to create a data modeling of some of my classmates (to create an object for every one)
//this function is factorial function
 
function createMyClass ( name , lastname , age , gender , background ){

  return classMate = {
    firstName : name ,
    lastName : lastname ,
    age : age ,
    gender : gender ,
    computingSkills :background 
  }
}

var wala = createMyClass ("Wala","Abdeoui",29,"Male",false);
var Mootaz = createMyClass ("Mootaz","Djebbli", 20 ,"Male", false)
var Zimzmi = createMyClass ( "Mohammed","Zemzmi",24,"Male",true)
var siwar = createMyClass ("Siwar","Hkimi",26,"Female",true)
var amir =createMyClass ("Amir","Ben Youssef",29,"Male",true)
var belga= createMyClass("Belgassem","Zabbess",25,"Male", true)
var Oma = createMyClass ("Omar","Yaakoubi",19,"Male",false)

var array =[wala,Mootaz,Zimzmi,siwar,amir,belga,Oma]

//displayFriend permit to return a sentence that contains the most important information of a mate and take as argument his first name

function displayFriend ( matt ) {
  
  if (matt.computingSkills === true ){
    word = "with previous background on coding" // how to inform that my mate has background or no according to a boolean value
  } word = "without background"

  return "My friend  "+matt.firstName +" "+matt.lastName + "  is a  " +matt.gender+" /n The age is  "+ matt.age + "  "+word


}

function addNew ( mat ){
  var array =[wala,Mootaz,Zimzmi,siwar,amir,belga,Oma]
  return array.push (mat)
}

var Abdelhedi = createMyClass ("Ahmad","Addeb",24,"Male",true)
function addNew ( Abdelhedi)

 function numberOfmale ( array ){
 var j = 0;

 for ( var i=0 ; i< array.length ; i++)  {

   if ( array[i].gender==="Male"{
     j= j+1;
   }
  
 }

return j;

 }

 function searchMates ( query , array){

 for ( var i = 0 ; i< array.length ; i++){

  if (array[i].firstName===query ||array[i].lastName===query ||array[i].age===query,array[i].gender===query ||  array[i].background===query){

    return array[i]
  }
 }

 }



