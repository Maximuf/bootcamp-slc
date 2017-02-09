'use strict'
const lesson1 = {
 computeAverage: function(n1,n2,n3){
	if(isNaN(n1) || isNaN(n2) || isNaN(n3)) {

		var msg = "Sorry only inputs are allowed as parameters";
		return msg;
	} else {

		var solve = (n1 + n2 + n3) / 3;
		return solve;
	}
},
 
 computeFactorial: function(num){
	if(isNaN(num)) {
		var msg = "Sorry! This only works for digits";
		return msg
	} else if (num == 0) {
		return 1;
	} else if(num === 1) {
		return 1;
	} else {
		return num * lesson1.computeFactorial(num-1);
	}

},

 convertTempCtoF: function(value) {
	var result = ((value * 9)/5) + 32;
	return result;
 },

 convertTempFtoC: function(value) {
	var result = (((value - 32) * 5) / 9);
	return result;
}
}



module.exports = lesson1;