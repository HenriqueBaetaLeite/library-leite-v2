import React, { useEffect, useState } from 'react';
import { getAllBooks } from '../services/api';
import CardBooks from './CardBooks';

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getAllBooks().then(async (books) => await setBooks(books));
  }, []);

  const loading = 'Carregando...';

  return (
    <div>
      <h2>Books</h2>
      {books.length === 0
        ? loading
        : books.map(({ id, nome, img, autor }) => (
            <CardBooks key={id} id={id} nome={nome} img={img} autor={autor} />
          ))}
    </div>
  );
};

export default Books;
