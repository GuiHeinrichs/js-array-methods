let livros = [];
const endPointAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';

getBooks();

async function getBooks() {
  const res = await fetch(endPointAPI);
  livros = await res.json();
  let booksWithDiscount = applyDiscount(livros);
  showBooksOnScreen(booksWithDiscount);
}
