let sumAll = (min, max) => {
    let freshNumber = 0;
    for (i = min; i < max + 1; i++) {
        freshNumber += i;
    }
    return freshNumber
}

console.log(sumAll(1, 3));