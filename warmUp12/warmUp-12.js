function each(coll, f) { 
	if (Array.isArray(coll)) { 
		  for (var i = 0; i < coll.length; i++) { 
				f(coll[i], i); 
		  } 
	} else { 
		  for (var key in coll) { 
				f(coll[key], key); 
		  } 
	} 
} 
function reduce(array, f, start) { 
    var acc = start; 
    each(array, function(element) { 
          acc = f(acc, element); 
    }); 
    return acc; 
}
 // 1-implement the function mult that takes a single parameter n, and computes the multiplication of all integers up to n 
 //starting from 0, e.g.:
 mult(3); // => 6
 mult(4); // => 24
 function mult(n) {
     var arr=[];
     var j=0;
    for(var i=0; i<n; i++){
        j++;
        arr[i]=j;
    }
    return reduce (arr, function(product, element){
        return product*element
    },1)
}

// 2- Use a while loop to build a single string with the numbers 1 through n
// separated by the number next to the current number. 
//Have it return the new string.
// eg= 1 2 2 3 3 4 4 5 5 6 6 ...
function str(n) {
    var i=1;
    var result='1'
    for(var j=0; j<n-1; j++){
        result=result+(i+1)+(i+1);
        i++;
    }
    return result
}