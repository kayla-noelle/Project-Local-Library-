function findAccountById(accounts, id) {
  return accounts.find(account => account.id === id);
}

function sortAccountsByLastName(accounts) {
  //will use the sorting method...
  //takes in the account parameter 
  //=> function then we have the conditional statement which we use ">" or "<" since it's strings.
  return accounts.sort((a, b) => a.name.last > b.name.last ? 1 : -1);
}

function getTotalNumberOfBorrows(account, books) {
//It returns a _number_ that represents the number of times the account's ID appears in any book's `borrow` array.
//create variable for account.id
//initalize accumalator variable
//use forEach() to loop through book.borrows and then use it to loop through and use conditional statement to find if accountId matches borrow.id
const accountId = account.id;
let total = 0;
books.forEach(book => book.borrows.forEach(borrow => accountId === borrow.id && total++));
return total;
}

function getBooksPossessedByAccount(account, books, authors) {
//It returns an array of books and authors that represents all books _currently checked out_ by the given account.
//Look carefully at the object below,_ as it's not just the book object; the author object is embedded inside of it.
let booksCheckedOut=[];
booksCheckedOut = books.filter((book)=> book.borrows[0].returned === false && book.borrows[0].id === account.id);
const result = booksCheckedOut.map((book)=> {
  book.author = authors.find(author=> author.id === book.authorId);
  return book
});
return result;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
