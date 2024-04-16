const discount = 0.2;

function applyDiscount(books) {
  booksWithDiscount = books.map(book => {
    return {
      ...book, preco: book.preco - (book.preco * discount)
    }
  });
  return booksWithDiscount;
}