import React from 'react';
import { Link } from 'react-router-dom';

const CardBooks = (props) => {
  const { id, nome, img, autor } = props;
  return (
    <div>
      <h2>{nome}</h2>
      <h4>{autor}</h4>
      <img width="100px" src={img} alt={`capa do livro ${nome}`} />
      <Link to={`/books/${id}`}>Detalhes</Link>
    </div>
  );
};

export default CardBooks;
