import React, { useEffect, useState } from 'react';
import { getBookById } from '../services/api';
import { Link } from 'react-router-dom';

const CardBookDetails = (props) => {
  const [book, setBook] = useState(null);

  const { id } = props.match.params;

  useEffect(() => {
    setTimeout(() => {
      getBookById(id).then((book) => setBook(book));
    }, 5000);
  }, []);

  const loading = <p>Carregando</p>;

  return (
    <div>
      <h2>Books Detail test</h2>
      {!book ? (
        loading
      ) : (
        <div>
          <h2>{book.nome}</h2>
          <h4>{book.autor}</h4>
          <img width="90px" src={book.img} alt={book.nome}/>
          <Link to="/books">voltar</Link>
        </div>
      )}
    </div>
  );
};

export default CardBookDetails;
