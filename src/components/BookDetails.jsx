import React, { useEffect, useState } from 'react';
import { getBookById } from '../services/api';
import CardBooks from './CardBooks';

const BookDetails = ({ id }) => {
  const [book, setBook] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      getBookById('7kSAnE2').then((book) => setBook(book));
    }, 5000);
  }, []);

  const loading = <p>Carregando</p>;

  return (
    <div>
      <h2>Books Detail</h2>
      {!book ? (
        loading
      ) : (
        <CardBooks id={book.id} nome={book.nome} img={book.img} autor={book.autor} />
      )}
    </div>
  );
};

export default BookDetails;
