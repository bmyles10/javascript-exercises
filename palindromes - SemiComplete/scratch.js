const palindromes = (word) => {
    let splitstring = word.split("");
    let reversestring = splitstring.reverse();
    let joinstring = reversestring.join("");
    return joinstring.toLowerCase() <= word ? true: false; 
}

console.log(palindromes('tacos'));

// <= word ? true: false