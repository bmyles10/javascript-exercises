const sumAll = function (min, max) {
    let finalSum = 0;
    if (min < 0 || max < 0) {
        return 'ERROR';
    }

    if (typeof min !== "number" || typeof max !== "number" ) {
        return 'ERROR';
    }

    //Need to swap if someone swaps the numbers
    if (min > max) {
        let swap = min; //set 1st arg to a varible
        min = max; //setting 1st arg to second arg
        max = swap; //setting 2nd ar to first arg
    }

    //Loop will add all numbers between min & max
    //The max + 1 insures you get the max number included in the 
    for (let i = min; i < max + 1; i++) {
        finalSum = finalSum + i;
    }
    return finalSum;
}

console.log(sumAll(3, 1));

module.exports = sumAll