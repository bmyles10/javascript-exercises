 const books = [
    {
      title: 'I Like this book',
      author: 'Name'
    },
    {
      title: 'What am I reading',
      author: 'Name2'
    }
  ]


/**
const getTheTitles = books.map(book => (
    book.title
));

This works but doesn't work with this test for some reason.
 */


const getTheTitles = (array) => array.map(book => book.title);

const getTheAuthor = (array2) => array2.map(book => book.author);



console.log(getTheAuthor(books));
console.log(getTheTitles(books));

module.exports = getTheTitles;
