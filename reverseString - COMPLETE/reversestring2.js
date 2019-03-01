let reverseString = (reverseMe) => {
    let splitName = reverseMe.split("");
    let revname = splitName.reverse();
    let joinName = revname.join('');
    return joinName;


}

console.log(reverseString('hello there'));