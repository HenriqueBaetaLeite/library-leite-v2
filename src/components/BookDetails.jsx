import React, { useEffect, useState } from 'react';
import api from '../services/api';

const BookDetails = ({ id }) => {
  const [book, setBook] = useState([]);

  useEffect(() => {
    api.getBook(id).then((book) => setBook(book));
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
