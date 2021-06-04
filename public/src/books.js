function findAuthorById(authors, id) {
   return authors.find(author => author.id === id);
}

function findBookById(books, id) {
   return books.find(book => book.id === id);
}

function partitionBooksByBorrowedStatus(books) {
//create a variable to hold an empty array
//we create a new array that filters out if the books are still loaned out and not yet returned.
//we create a new array that filters out if the books are returned.
const booksLoanedOut = books.filter((book)=> !book.borrows[0].returned);
const booksReturned = books.filter((book)=> book.borrows[0].returned);
const result = [booksLoanedOut, booksReturned];

   return result;
}

function getBorrowersForBook(book, accounts) {
// `borrows` is a list of transactions, each of type { id: string, returned: true }
const { borrows } = book;
const borrowers = borrows.map(({ id, returned })=> {
  // find account that matches the borrower's ID
  const account = accounts.find(account => account.id === id);
 // return the matching account, along with the `returned` info
  return {
    ...account,
    returned,
  };
});
return borrowers
  .sort((borrowerA, borrowerB) => {
    const companyA = borrowerA.company;
    const companyB = borrowerB.company;
    return companyA.localeCompare(companyB);
  })
  .slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
