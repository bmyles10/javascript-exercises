const palindromes = (word) => {
    let splitstring = word.split("");
    let reversestring = splitstring.reverse();
    let joinstring = reversestring.join("");
    return joinstring <= word ? true: false; 
}



module.exports = palindromes
