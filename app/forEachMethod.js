const insertBooksElement = document.getElementById('livros');
const totalPriceAvailableBooks = document.getElementById('valor_total_livros_disponiveis');

function showBooksOnScreen(bookList) {
  insertBooksElement.innerHTML = '';
  totalPriceAvailableBooks.innerHTML = '';

  bookList.forEach(book => {
    let disponibility = book.quantidade > 0 ? 'livro_imagens' : 'livros_imagens indisponivel';
    insertBooksElement.innerHTML += `
    <div class="livro">
      <img class="${disponibility}" src="${book.imagem}" />
      <h2 class="livro__titulo">
        ${book.titulo}
      </h2>
      <p class="livro__descricao">
        ${book.autor}
      </p>
      <p class="livro__preco" id="preco">
        R$ ${book.preco.toFixed(2)}
      </p>
      <div class="tags">
        <span class="tag">${book.categoria}</span>
      </div>
    </div>`
  });
}