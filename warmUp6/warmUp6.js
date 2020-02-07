// 1 - Write a function named objKey that take an object as a parameter and returns an array containing the keys of the object
// objKey({name:'ahmed',age:20}) ==> ['name','age']

function objKey(obj) {
  // your code here...
  var acc=[];
  for (var key in obj){
    acc.push(key);
  }
  return acc;
}

// 2 - Write a function named objLength to get the length of a JavaScript object
// objLength({name:'ahmed',age:20}) ==> 2

function objLength(obj) {
  // your code here...
  var result =0;
  for(var key in obj){
    result+=1;
  }
  return result;
  
}

// 3 - Write a function named objSort to sort an array of JavaScript objects based on the id
// objSort([{id:2,value:50},{id:0,value:70},{id:1,value:40}]) ==> [{id:0,value:70},{id:1,value:40},{id:2,value:50}]

function objSort(obj) {
  // your code here...
  var acc=[];
  for( var i=1; i<obj.length; i++){
    if (obj[i-1].id>=obj[i].id){
      acc.push(obj[i]);
    }

  }
  return acc;
}
