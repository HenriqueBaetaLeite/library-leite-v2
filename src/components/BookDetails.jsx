import React, { useEffect, useState } from 'react';
import api from '../services/api';

const BookDetails = ({ id }) => {
  const [book, setBook] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      api.getBookById(id).then((book) => setBook(book));
    }, 5000);
  }, []);

  const loading = 'Carregando...';

  return (
    <div>
      <h2>Books</h2>
      {book.length === 0
        ? loading
        : book.map(({ id, nome, img }) => (
            <div key={id}>
              <p>{nome}</p>
              <img src={img} alt="" width="100px" />
            </div>
          ))}
    </div>
  );
};

export default BookDetails;
