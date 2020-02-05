// 1-Define a function called myTrueFun that returns true whenever its called.
function myTrueFun(){
      return true}

// 2-complete the following color function in which returns true if type of the input is string and returns
// 	false otherwise.

	function typeFunc(value){
          if (typeof value === 'string'){return true}
          else{return false}
	}
// 3-Write a JavaScript function that accepts a number as a parameter and check if the number is prime or not.
function Prime (x){
    if (x===1){
             return false}
    else if(x===2){
             return true }
    else {
         for (var i=2; i<x/2; i++){
               if (x%i === 0){
                    return false}
                    }
         return true}
    }


}


// 4-write a function that accepts two numbers as parameters and returns true if the two parameters have the same value , false if not
function isSame(x,y){
    if( typeof x !== 'number' || typeof y !== 'number' ){return alert('the inputs should be numbers') }
    if (x==y){return true}
    return false
}