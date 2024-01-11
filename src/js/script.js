function render() {
    const booksList = document.querySelector('.books-list');
    const bookTemplate = document.querySelector('#template-book');
  
    dataSource.books.forEach(book => {
      const bookInstance = renderBook(book, bookTemplate);
      booksList.appendChild(bookInstance);
    });
  }
  
  function renderBook(book, template) {
    const bookInstance = template.content.cloneNode(true);
  
    // Uzupełnij dane książki w szablonie
    bookInstance.querySelector('.book__title').innerText = book.title;
    bookInstance.querySelector('.book__author').innerText = book.author;
    bookInstance.querySelector('.book__price').innerText = `$${book.price.toFixed(2)}`;
  
    // Zwróć wygenerowany element DOM
    return bookInstance;
  }
  
  // Wywołaj funkcję renderującą książki
  render(); 
}
