// 1 - Write a function named objKey that take an object as a parameter and returns an array containing the keys of the object
// objKey({name:'ahmed',age:20}) ==> ['name','age']

function objKey(obj) {
  var array = [];
  for( var key in obj) {
  array.push(key) ;
  }
   return array;
}

// 2 - Write a function named objLength to get the length of a JavaScript object
// objLength({name:'ahmed',age:20}) ==> 2

function objLength(obj) {
    var array = [];
    var lengthObj = 0;
    for( var key in obj) {
        lengthObj += 1;
    }
    return lengthObj;
}


// 3 - Write a function named objSort to sort an array of JavaScript objects based on the id
// objSort([{id:2,value:50},{id:1,value:70},{id:0,value:40}]) ==> [{id:0,value:70},{id:1,value:40},{id:2,value:50}]

// the function compare, starting from index=1, every element with all the precedent elements. Every time id is inferior, it will switch positions of the two values of array
function objSort(array) {
  for(var i = 1; i< array.length; i++) {
     var k = i;
     for( var j= k-1; j >= 0; j--){
        if (array[k].id < array[j].id ) {

             var x = array[j];
             array[j] = array[k];
             array[k] = x;
             k -= 1;
        }
     }
  }
  return array;
}
