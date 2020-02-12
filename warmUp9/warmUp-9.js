// 1-Create arrays in the global scope consisting of strings that represent:
// -name of females in your class
// -name of males in your class
// -name of your class instructors 
var females=['Nouha','Siwar','Halima'];
var males=['Amine','Firas','Omar','Houssem','Amir','Aymen','Belgacem'];
var instructors=['Walid','Cassel','Matt','Hadhemy','Safa','Seif'];

// 2-write a function that takes an array as an argument and returns the element that is located in the middle of that array.
function midArray(array) {
    var x=array.length;
    if (x%2===0){
        return array[(x/2)]
    } else {
        return array[(x-1)/2]
    }
}

// 3-Change all the numbers in the array to be multiplied by two for even indexes.
unction multiBy2(array){
	for (var i = 0; i < array.length; i++){
		if(typeof array[i] === 'number' && (i%2 === 0)) {
			array[i] = array[i]* 2;
		}
	}
	return array;
}