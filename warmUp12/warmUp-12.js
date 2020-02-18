 // 1-implement the function mult that takes a single parameter n, and computes the multiplication of all integers up to n 
 //starting from 0, e.g.:
 mult(3); // => 6
 mult(4); // => 24
 

 // we will fix our counter to 1 and every time we will return the result multiplied by i++ until i=our input number
 function mult(n) {
  var i=1;
  var result=1
  while(i<=n){
    result=result*i
    i++
  }
  return result
}


// 2- Use a while loop to build a single string with the numbers 1 through n
// separated by the number next to the current number. 
//Have it return the new string.
// eg= 1 2 2 3 3 4 4 5 5 6 6 ...
 

//  we will use wjile loop to fill our initial array considering the condition than we will display our array using for loop 
function builtString(n){
  var arr=[1];
  var str='';
  var i=2;
for( var j =0; j < arr.length; j++){
  while(i<=n){
    arr.push((10*i)+i)
    i++
  } 
  str=str+arr[j];
 }
 return str;
}