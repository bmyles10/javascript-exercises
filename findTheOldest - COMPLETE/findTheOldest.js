const people = [{
        name: 'Carly',
        yearOfBirth: 1942,
        yearOfDeath: 1970,
    },
    {
        name: 'Ray',
        yearOfBirth: 1962,
        
    },
    {
        name: 'Jane',
        yearOfBirth: 1912,
        yearOfDeath: 1941
    },
]

let findTheOldest = (people) =>
    people.reduce((people, current) => {
        let getAge = (birth, death) => {
            if (!death) {
                death = new Date().getFullYear();
            }
            return death - birth;
        }
        const oldestAge = getAge(people.yearOfBirth, people.yearOfDeath)
        const currentAge = getAge(current.yearOfBirth, current.yearOfDeath)
        return oldestAge < currentAge ? current : people
    });



console.log(findTheOldest(people));

module.exports = findTheOldest