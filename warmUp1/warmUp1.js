// 1-using + operator combine your partner first and last name .
// 2-find if the number 13 is a multiple of 3 or not.
// 3-calculate the average age of the follwing ages [13,14,13,15,16,17,19,13,16,15]
// 4-calculate your age in seconds.
//q1
Partner={
			firstName:"mohamed",
			lastName:"zemzemi",
};
//q2
function mult(n){


// your code is here



if(n%3===0){
	return true;
}
return false;
}
//q3 average
function aver(arr){
	var x=0;
for(var i=0;i<arr.length;i++){

x=x+arr[i]}
return x/arr.length
}
//q4
function ageSecond(year){
	var sec=31536000;
	x=year*sec;
	return x

}

