// 1 - Write a function named objKey that take an object as a parameter and returns an array containing the keys of the object
// objKey({name:'ahmed',age:20}) ==> ['name','age']

function objKey(obj) {
 var arr=[];
 for(var key in obj){
   arr.push(key);
 }
 return arr;
}

// 2 - Write a function named objLength to get the length of a JavaScript object
// objLength({name:'ahmed',age:20}) ==> 2

function objLength(obj) {
  var length=0;
  var c=0;
  for (var key in obj){
    c=c+1;
  }
  return c
}

// 3 - Write a function named objSort to sort an array of JavaScript objects based on the id
// objSort([{id:2,value:50},{id:0,value:70},{id:1,value:40}]) ==> [{id:0,value:70},{id:1,value:40},{id:2,value:50}]

var arr=[{id:2,value:50},{id:0,value:70},{id:1,value:40}];

function objSort(arr) {
  var arr2=[];
  var min=arr[0];
  var c=0;
  var counter=arr.length;
  while(counter>1){
    for(var i=0;i<arr.length;i++){
      if (arr[i].id <= min.id){
        min=arr[i];
        c=i;
    }
    }
  arr2.push(min);
  arr.splice(c,1);
  console.log(arr);
  counter--;
  }
  return arr2;
}
