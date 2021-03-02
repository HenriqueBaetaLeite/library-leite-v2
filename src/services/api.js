const URL = window.location.hostname.includes('localhost')
  ? 'http://localhost:8080/books'
  : 'https://library-leite-json.herokuapp.com/books';

const pureURL = 'https://library-leite-json.herokuapp.com/books';

const getAllBooks = () =>
  fetch(pureURL).then(async (books) => {
    if (books.ok) {
      const resp = await books.json();
      return resp;
    }
    throw new Error('Servidor indisponível...');
  });

const getBookById = (id) => {
  return fetch(URL + '/' + id)
    .then((books) => books.json())
    .catch((err) => err.reponse);
};

const addBook = (novoLivro) => {
  return fetch(URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(novoLivro),
  })
    .then(async (books) => {
      if (books.ok) {
        const resp = await books.json();
        return resp;
      }
      throw new Error('Não foi possível cadastrar novo livro...');
    })
    .catch((err) => err.response);
};

module.exports = { getAllBooks, getBookById, addBook };
