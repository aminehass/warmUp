// 1-using + operator combine your partner first and last name .
// 2-find if the number 13 is a multiple of 3 or not.
// 3-calculate the average age of the follwing ages [13,14,13,15,16,17,19,13,16,15]
// 4-calculate your age in seconds.

<<<<<<< HEAD

// your code is here
function combine(firstName,lastName){
    return firstName+' '+lastName;
}
//combine('Afif','Rakrouki') ==> 'Afif Rakrouki'
function check(){
    if ((13%3)===0){
        return true
    }
    return false;
}
var arrx=[13,14,13,15,16,17,19,13,16,15]
//check() ==> False
function average(arrx){
    s=0;
    for(i=0;i<arrx.length){
        s=s+arrx[i];
    }
    return s/arrx.length;
}
//average(arrx) ==> 15.1
function ageInSec(age,dayOfBirth,monthOfBirth,yearOfBirth){
    today = new Date()
    var year=today.getFullYear();
    var month=today.getMonth();
    var day=today.getDate();
    var years=age;
    if(month>monthOfBirth){
    months=month-monthOfBirth-1;
    }
    else months=monthOfBirth-month-1;
    if(day>dayOfBirth){
        days=day-dayOfBirth;
        }
        else days=dayOfBirth-day;
    console.log(years,months,days)
    if(months%2 ===0){
      var  monthsindays=((months/2)*30+(months/2)*31);
    }else monthsindays=((months+1/2)*30+(months-1/2)*29)
       var yearsindays=((years*12)/2*30+(years*12)/2*31)
       return days+yearsindays+monthsindays;
}
//ageInSec(19) ==> 599184000
=======
// your code is here


>>>>>>> 324f201c02ca2d6c79684a8829696dd310627957
