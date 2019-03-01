let nameList = ['Brandon','Theo','Rob'];

let valueToRemove = 'Theo';
let valuetoRemove2 = 'Brandon';

let filteredItem = nameList.filter(
    item => item !== valueToRemove
)

let filteredItem2 = nameList.filter(function(name){
    return name !== valuetoRemove2;
})

console.log(filteredItem);
console.log(filteredItem2);
