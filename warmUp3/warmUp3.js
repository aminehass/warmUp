// 1) Write a function named greaterNum that:
// - takes 2 arguments, both numbers.
// - returns whichever number is the greater (higher) number.
// ex greaterNum(5, 10) => "The greater number of 5 and 10 is 10."



function greaterNum(num1, num2) {

    if (num1 > num2) {
        return "the greater number of " + num1 + " and " + num2 + " is " + num1
    }
    return "the greater number of " + num1 + " and " + num2 + " is " + num2
}







// 2) Write a function named isEven using  for loop that 
// -  iterate from x to y.
// -  return array contain the even values,
//  ex:  isEven(1,10) => [2,4,6,8,10]


function isEven(array) {
    var tab = []
    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            tab[i] = array[i]
        }
    }
    return tab
}

//3) write a function named sum that 
// - Use a while loop to add up the numbers from x to y.
// ex sum(1,5) => 15



function sum(num1, num2) {
    var i = 0
    result = 0
    while (num1 < num2) {
        result = num1 + i + result
        i = i + 1
    }
    return result
}










//4) Write a function named factorial that 
// -  Use Recursion to calculate the factorial of a number
// -  the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n
// - 5! = 5*4*3*2*1 = 120
// ex : factorial(5) => 120 


function factorial(num) {
    var prod = 1;
    if (num === 0) {
        return 1
    }
    for (var i = 0; i < num; i++) {
        prod = prod * i
    }
    return prod * factorial(num - 1)
}


//5) write a function named decimals
//- the function will format a number up to specified decimal places
//- the function will return a string 
//- if the parameters not a number return false 
// ex :
//      decimals(2100, 'a') ==> false 
//      decimals('a', 5) ==> false 
//      decimals(2.100212, 2) ==> '2.10'
//      decimals(2.100212, 3) ==> '2.100'
//      decimals(2100, 2) ==> '2100.00'
//      

function decimals(num1, num2) {
    if (num2 === "") {
        return false
    }
}



}