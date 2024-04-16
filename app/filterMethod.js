const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => button.addEventListener('click', applyBookFilters));

function applyBookFilters() {
  const element = document.getElementById(this.id);
  const categ = element.value;

  let filteredBookList = checkCategory(categ) ?
    filterByQuantity() :
    filterByCategory(categ);
  showBooksOnScreen(filteredBookList);
  if (checkCategory(categ)) {
    const mappedPrices = filteredBookList.map(book => book.preco);
    let totalPrice = mappedPrices.reduce((acc, actual) => acc + actual);
    totalPriceAvailableBooks.innerHTML =
      `
    <div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">${totalPrice.toFixed(2)}</span></p>
    </div>
    `;
  }
}

function checkCategory(categ) {
  return categ == 'disponivel';
}

function filterByCategory(categ) {
  return livros.filter(book => book.categoria == categ);
}

function filterByQuantity() {
  return livros.filter(book => book.quantidade > 0);
}
