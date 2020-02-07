// 1 - Write a function named objKey that take an object as a parameter and returns an array containing the keys of the object
// objKey({name:'ahmed',age:20}) ==> ['name','age']
// using for (var key in obj) to have access to the keys in our object than we push it in an empty array
function objKey(obj) {

  var arr=[]
  for(var key in obj){
   arr.push(key)
  }
  return arr;
}

// 2 - Write a function named objLength to get the length of a JavaScript object
// objLength({name:'ahmed',age:20}) ==> 2

// we use the first function that returns an array than we calculate the length of the first result

function objLength(obj) {
  
  return objKey(obj).length;
}

// 3 - Write a function named objSort to sort an array of JavaScript objects based on the id
// objSort([{id:2,value:50},{id:0,value:70},{id:1,value:40}]) ==> [{id:0,value:70},{id:1,value:40},{id:2,value:50}]

function objSort(obj) {
   
  var arr=[];
  for( var i = 1; i < obj.length; i++){
   if(obj[0].id > obj[i].id){
     arr.push(obj[i])
   }else{arr.push(obj[0]);}
  }
  return arr;
}
