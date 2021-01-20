import React, { useEffect, useState } from 'react';

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/books').then(async (data) => {
      const resposta = await data.json();
      setBooks(resposta);
    });
  }, []);

  return (
    <div>
      <h2>Books</h2>
      {books.length > 0 &&
        books.map((book) => (
          <div key={book.id}>
            <p>{book.nome}</p>
            <img src={book.img} alt="" width="100px" />
          </div>
        ))}
    </div>
  );
};

export default Books;
