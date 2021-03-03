import React, { useRef, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { Button, Container, Typography, SvgIcon } from '@material-ui/core';
import { TweenMax } from 'gsap';

import logoSVG from '../assets/book-opened.svg';

const Home = (props) => {
  const history = props.history;
  let buttonAllBooks = useRef(null);
  let bookSVG = useRef(null);
  useEffect(() => {
    TweenMax.from(buttonAllBooks, 5, { opacity: 0 });
    TweenMax.from(bookSVG, 1, { drawSVG: 1, rotate: 50 });
  }, []);
  return (
    <Container maxWidth="sm">
      <Typography variant="h5">Boas vindas à nossa Coletânia de Livros</Typography>
      <Typography variant="subtitle1">Fernando {'&'} Henrique</Typography>
      <Typography variant="subtitle2">Baêta Leite</Typography>
      {/* <SvgIcon component={logoSVG} /> */}
      <img ref={(element) => (bookSVG = element)} src={logoSVG} alt="myBook" />

      <Button
        variant="contained"
        color="primary"
        ref={(element) => (buttonAllBooks = element)}
        onClick={() => history.push('/books')}
      >
        Acessar todos os livros
      </Button>
    </Container>
  );
};

export default withRouter(Home);
