// 1-using + operator combine your partner first and last name .
// 2-find if the number 13 is a multiple of 3 or not.
// 3-calculate the average age of the follwing ages [13,14,13,15,16,17,19,13,16,15]
// 4-calculate your age in seconds.

// your code is here
<<<<<<< HEAD
function fullName(firstName,lastName){

console.log(firstName+' '+lastName);}

// i use this function  fullName('amir','ben youssef') it will return :amir ben youssef

//2 
function isMultiple(a,b){
var d=a%b
if(d===0){console.log(a+'  is a multiply of'+' '+ b)}
else console.log(a+ ' is not a multiply of '+ b)}
//  then we use this function in our console , isMultiple(13,3) that returns: 13 is not a multiply of 3

//3
function average(arr){
	var s=0;
	for(var i=0;i<arr.length;i=i+1){
		s=s+arr[i];
	}
	return s/(arr.length);
}
//average([13,14,13,15,16,17,19,13,16,15])=15.1

// 4
function ageSecond(year,months,days,hours){
	var ay;
	var am;
	var ad;
	var ah;
	ay=year*12*30*24*60*60;
am=months*30*24*60*60;
ad=days*24*60*60;
ah=hours*60*60;
return ay+am+ad+ah;
}

// then i used this function to calculate my age 29 in seconds, ageSecond(29,5,17,18)=916509600
=======


>>>>>>> c07720253c870302a2825e47eeb180a082689769
