// 1-using + operator combine your partner first and last name .
// 2-find if the number 13 is a multiple of 3 or not.
// 3-calculate the average age of the follwing ages [13,14,13,15,16,17,19,13,16,15]
// 4-calculate your age in seconds.

// your code is here


<<<<<<< HEAD
// 1-using + operator combine your partner first and last name .
function combine(){
    return "Ahmad" + "Addeb";
}

// 2-find if the number 13 is a multiple of 3 or not.
 function multiple(number1,number2){
     if (number1%number2 ===0){
         return number2+ " is a multiple of "+number1 +" ."
     } else return number2+" is not multiple of "+number2 +" ."
 }
 // via google console multiple(13,3)

 // 3-calculate the average age of the follwing ages [13,14,13,15,16,17,19,13,16,15]
 function average(array){
     var result=0;
     for (var i=0;i<array.length;i++){
         result= result +array[i];

     }return result/(array.length);
 }

// 4-calculate your age in seconds.

function yearseconds(age,yearofbirth, dayafteryourbirthday){
    longyear=0;
    for(var i=yearofbirth;i<=2020;i++){
        if (year%4===0){
            longyear=longyear+1;//long year permits to calculate how much 366's years existed since born;
        }
    } return (age*365+longyear+dayafteryourbirthday)*24*3600;
      
}

=======
>>>>>>> c07720253c870302a2825e47eeb180a082689769
