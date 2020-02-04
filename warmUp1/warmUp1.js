// 1-using + operator combine your partner first and last name .
// 2-find if the number 13 is a multiple of 3 or not.
// 3-calculate the average age of the follwing ages [13,14,13,15,16,17,19,13,16,15]
// 4-calculate your age in seconds.

// your code is here
<<<<<<< HEAD
//////////////////////////////////  1
function partner(firstName, lastName){
    return(firstName+' '+lastName)
}
//////////////////////////////////  2
if(13%3===0){
     console.log('13 is a multiple of 3')
}else
     console.log( '13 is not a multiple of 3');
//////////////////////////////////  3
function average(array){
    var s=0;
    for(var i=0;i<array.length;i++){
     
   s=s+array[i];
    
} return s/array.length}
//////////////////////////////////  4
var m=0;
function ages(age,month,day){
   m=((month-1)*30+day)*24*60*60;

    return age*365*24*60*60+m
}
////////////// other methode not finished yet
/*var months={
    january: 31,
    february: 29,
    march:31,
    april:30,
    may:31,
    june:30,
    july:31,
    august:30,
    september:31,
    october:30,
    november:31,
    december:30
}
var m=0;
var s=0;
    for(var i=0;i<months.length;i++){
   s=s+array[i];
function ages(age,month,day){
   m=((month-1)*30+day)*24*60*60;

    return age*365*24*60*60+m
}*///
=======


>>>>>>> c07720253c870302a2825e47eeb180a082689769
