// 1 - Write a function named objKey that take an object as a parameter and returns an array containing the keys of the object
// objKey({name:'ahmed',age:20}) ==> ['name','age']

function objKey(obj) {
  var objValues=[];
  for (var key in obj) {
    objValues.push(key);
  }
  return objValues;
}

// 2 - Write a function named objLength to get the length of a JavaScript object
// objLength({name:'ahmed',age:20}) ==> 2

function objLength(obj) {
  var objValues=[];
  for (var key in obj) {
    objValues.push(obj[key]);
  }
  return objValues.length;
}

// 3 - Write a function named objSort to sort an array of JavaScript objects based on the id
// objSort([{id:2,value:50},{id:0,value:70},{id:1,value:40}]) ==> [{id:0,value:70},{id:1,value:40},{id:2,value:50}]

function objSort(obj) {
    var objValues2=[];
    for (var i=0 ;i< objLength(obj); i=i+1) {
     if (objValues[i].id< objValues[i+1].id) {
       objValues2.push(objValues[i])
     }
     i=i+1;
    }
    return objValues2;
}
