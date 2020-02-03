// 1-using + operator combine your partner first and last name .
// 2-find if the number 13 is a multiple of 3 or not.
// 3-calculate the average age of the follwing ages [13,14,13,15,16,17,19,13,16,15]
// 4-calculate your age in seconds.

// your code is here


<<<<<<< HEAD

//1
var firstName = "Houssem Eddine";
var lastName = "ABDELLI";
var fullName = " ";
fullName = firstName + " " + lastName
console.log(fullName)



//2
var x = 13;
if (x % 3 === 0) {
	console.log(x + "is a multiple of 3")
}
console.log(x + " is not a multiple of 3")




//3
var array = [13, 14, 13, 15, 16, 17, 19, 13, 16, 15];
var average = 0;
for (var i = 0; i < array.length; i++) {
	average = (array[i] / array.length) + average;
}
console.log(average)




//4
var ageInYears = 33;
var ageInSeconds = 0;
var x = 0;
x = 365.25 * 24 * 60 * 60;
ageInSeconds = x * ageInYears;
console.log(ageInSeconds)


=======
>>>>>>> c07720253c870302a2825e47eeb180a082689769
