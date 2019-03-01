let nameList = ['Brandon','Theo','Rob'];

const removeFromArray = function (...arr) {
    let arg = arr[0];
    return arg.filter(name => !arr.includes(name))
    
}
console.log(removeFromArray(['Brandon','Theo','Rob'],'Theo'))

module.exports = removeFromArray