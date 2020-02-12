// 1-Create arrays in the global scope consisting of strings that represent:
// -name of females in your class
// -name of males in your class
// -name of your class instructors 

// we create object for every names ,tha, we put them inside an array

 var nameFemame={1:'nouha',2:'siwar'};
 var nameMale={1:'taha',2:'afif',3:'houssem',4:'amine',5:'omar',6:'firas',7:'amir',8:'houssem eddine'};
 var nameOfInst={1:'walid',2:'Cassels',3:'Matt'};
var array=[nameFemame,nameMale,nameOfInst]




// 2-write a function that takes an array as an argument and returns the element that is located in the middle of that array.

// our function will return the value of the middle using the array's length if it's odd, else it will return a message for the user that his array has no middle; or another alert if the lenght = 0 or 1

function takeMiddel(array){
  
  
  var l=array.length;
   if(l===1||l===0){
     alert('there is no misddle');
   }
   else if(l%2!==0){
    var id=Math.floor(l/2)
    return array[id]
  } alert('your array is even length so there is no middel');
}

// 3-Change all the numbers in the array to be multiplied by two for even indexes.


// we will use map function ,and we should check if the index is even and typeof the value is number,if it's string we will return the same value.

function numberIndexEven(array){
 
  return map(array,function(value, index){
    if((typeof(value)==='number')&& (index%2===0)){
      return value*2;
    }else{ return value}
  })
}