const reverseString = function(wordToReverse) {
    let newWord = wordToReverse.split("");
    let revert = newWord.reverse();
    return revert.join('');
}

console.log(reverseString('I work here'));

module.exports = reverseString
