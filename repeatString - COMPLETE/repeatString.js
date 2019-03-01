const repeatString = function(words,times) {
    if (times < 0) return 'ERROR'
    let repeatMe = ""
    while (times > 0) {
         repeatMe += words;
        times--;
    }
    
    return repeatMe;    
};
if (repeatString() < 0) {
    return 'ERROR';
}

module.exports = repeatString

console.log(repeatString('sup',-2))