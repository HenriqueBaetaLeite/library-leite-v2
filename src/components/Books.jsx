import React, { useEffect, useState } from 'react';
import api from '../services/api';

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    api.getAllBooks().then(async (books) => await setBooks(books));
  }, []);

  const loading = 'Carregando...';

  return (
    <div>
      <h2>Books</h2>
      {books.length === 0
        ? loading
        : books.map(({ id, nome, img, autor }) => (
            <div key={id}>
              <p>{autor}</p>
              <p>{nome}</p>
              <img src={img} alt="" width="100px" />
              <a href={`https://library-leite-json.herokuapp.com/books/${id}`}>Detalhes</a>
            </div>
          ))}
    </div>
  );
};

export default Books;
