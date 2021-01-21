const URL = window.location.hostname.includes('localhost')
  ? 'http://localhost:8080/books'
  : 'https://library-leite-json.herokuapp.com/books';

const URL2 = 'https://library-leite-json.herokuapp.com/books';

const api2 = () => fetch(URL2).then((books) => books.json());

const getAllBooks = () =>
  fetch(URL).then(async (books) => {
    if (books.ok) {
      const resp = await books.json();
      return resp;
    }
    throw new Error('Servidor indisponível...');
  });

const getBook = (id) =>
  fetch(`https://library-leite-json.herokuapp.com/books/${id}`).then((books) => books.json());

const addBook = (novoLivro) => {
  fetch(URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(novoLivro),
  }).then(async (books) => {
    if (books.ok) {
      const resp = await books.json();
      return resp;
    }
    throw new Error('Não foi possível cadastrar novo livro...');
  });
};

module.exports = { getAllBooks, getBook, addBook };
