const sortElement = document.getElementById('btnOrdenarPorPreco');

sortElement.addEventListener('click', sortBooksByPrice);
function sortBooksByPrice() {
  let ordenatedBooks = livros.sort((a, b) => a.preco - b.preco);
  showBooksOnScreen(ordenatedBooks);
}