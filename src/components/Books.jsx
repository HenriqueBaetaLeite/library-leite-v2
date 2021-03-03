import React, { useEffect, useState } from 'react';
import { getAllBooks } from '../services/api';
import CardBooks from './CardBooks';
import { Typography, Container, Grid } from '@material-ui/core';

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getAllBooks().then(async (books) => await setBooks(books));
  }, []);

  const loading = 'Carregando...';

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={4}>
        {books.length === 0
          ? loading
          : books.map(({ id, nome, img, autor }) => (
              <CardBooks id={id} nome={nome} img={img} autor={autor} />
            ))}
      </Grid>
    </Grid>
  );
};

export default Books;
