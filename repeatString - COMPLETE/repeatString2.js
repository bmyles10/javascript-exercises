let repeatString = (word, times) => {
    let reWord = '';
    while (times > 0) {
        reWord += word;
        times--;
    }
    return reWord;
}

console.log(repeatString('sup',3)); 