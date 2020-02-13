// 1-Write a function that takes a string as an input and returns the reverse of each letter 
//followed by a number starting from zero(solve it using while loop).
// example:    reverseStr('hello'); "o1l2l3e4h"


// this function will reverse the string first , than put the reverse splited one on an array, than it will add a number for each character
// than it will return our new string with numbers

function reverseString(string){
  var str='';
  var i=string.length;
  var j=0;
  var result='';
     while(i--){
    str=str+string[i];
    }
   var arr=str.split('');
     while(j<arr.length){
   arr[j]=arr[j]+j;
   j++;
    }
     for( var k=0; k<arr.length; k++){
  result=result+arr[k];
    }
 return result;
}


// 2-write a function that takes array of strings and returns an array of the strings that have the same length
// example :  ['hi','hello','welcome','hy'] == > ["hi","hy"]
//  it's not finished ; not working :
function sameLength(array){
  var arr=[];
  var i =array.length;
  while(i--){
    var str=array[0],index=0;
    for(var j = 0; j < array.length ; j++){
      if(str.length=array[j].length){
        str=array[j];
        index=j
      }
    }
  }array.splice(index,1);
    arr.push(str);
  return arr;
}