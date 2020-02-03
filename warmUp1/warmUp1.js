// 1-using + operator combine your partner first and last name .
// 2-find if the number 13 is a multiple of 3 or not.
// 3-calculate the average age of the follwing ages [13,14,13,15,16,17,19,13,16,15]
// 4-calculate your age in seconds.

// your code is here
<<<<<<< HEAD
//======================================================
var partner = 'Ali'+ ' soudani'
//========================================================
function multiple(num1,num2){
   x= num1 % num2
    if (x===0) {
        return num1 + ' is a multiple of ' + num2
    } else return num1 + ' is not a multiple of ' + num2
}

// for the case of 13 and 3, 13%3 equal to 1. so , 13 is not a mutiple of 3
//===============================================================
function average (array){
    var result = 0
    for (var i = 0; i<array.length ; i = i+1 ){
        results = results + array[i]
    }
    return result/array.length
}
// the answer for the average of [13,14,13,15,16,17,19,13,16,15] is 15.1
//===========================================================
function age (bday, bmonth , byear, todayd, todaym, todayy){
   var year= todayy - byear;
   var month=0;
   var day= 0;
   var resultInDay = 0;
    if (bmonth>todaym) {
        month = (12 - bmonth)+ todaym;
        year = year - 1;
    } else month = todaym - bmonth
    if (bday>todayd ) {
        day = (30 - bday) + todayd;
        month = month - 1;
    } else day = todayd - bday;
    resultInDay = (year * 365) + (month * 30) + day;
    return resultInDay * 24 * 3600;
}
// my age in seconds is 927331200. note that this computation soes not into account if the year is 365 or 366. it is based only on the base of 365 and the month is 30 day.
//1 common year = 365 days = (365 days) × (24 hours/day) × (3600 seconds/hour) = 31536000 seconds
=======


>>>>>>> c07720253c870302a2825e47eeb180a082689769
