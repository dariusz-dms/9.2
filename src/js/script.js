// Przygotuj referencję do szablonu oraz listy .books-list.
const booksList = document.querySelector('.books-list');
const bookTemplate = document.querySelector('#template-book');

// Dodaj nową funkcję render.
function render() {
  // Wewnątrz niej przejdź po każdym elemencie z dataSource.books.
  dataSource.books.forEach(book => {
    // Wewnątrz tej pętli zadbaj o wygenerowanie kodu HTML na podstawie szablonu oraz danych o konkretnej książce.
    const bookInstance = renderBook(book, bookTemplate);

    // Na postawie tego kodu HTML wygeneruj element DOM.
    // Wygenerowany element DOM dołącz jako nowe dziecko DOM do listy .books-list.
    booksList.appendChild(bookInstance);
  });
}

// Dodaj funkcję renderBook, która generuje element DOM dla pojedynczej książki.
function renderBook(book, template) {
  const bookInstance = template.content.cloneNode(true);

  // Uzupełnij dane książki w szablonie
  bookInstance.querySelector('.book__title').innerText = book.title;
  bookInstance.querySelector('.book__author').innerText = book.author;
  bookInstance.querySelector('.book__price').innerText = `$${book.price.toFixed(2)}`;

  // Zwróć wygenerowany element DOM
  return bookInstance;
}

// Wywołaj funkcję render, aby zainicjować proces renderowania książek.
render();