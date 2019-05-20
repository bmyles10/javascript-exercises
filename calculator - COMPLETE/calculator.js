function add (plus1, plus2) {
	return plus1 + plus2;
	
}

function subtract (sub1, sub2) {
	return sub1 - sub2;
}

//Sum of numbers in an array
function sum (item) {                                       
	return item.reduce(add, 0)		   

}

let multiply = (array1) => array1.reduce((prod1,prod2) => prod1 * prod2);

let power = (start, here) => {
    return Math.pow(start,here)
}


let factorial = (n) => {
	if (n < 0){
		return -1;
	} else if (n == 0){
		return 1;
	} else {
		return (n * factorial(n - 1));
	}
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}