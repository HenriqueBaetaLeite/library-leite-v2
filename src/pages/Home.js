import React, { useRef, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { Button, Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { TweenMax } from 'gsap';
import logoSVG from '../assets/book-opened.svg';

import TheFooter from '../components/TheFooter';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '70vw',
    height: '80vh',
    marginTop: '25px',
  },
  title: {
    textAlign: 'center',
  },
});

const Home = (props) => {
  const history = props.history;
  const classes = useStyles();
  let buttonAllBooks = useRef(null);
  let bookSVG = useRef(null);
  useEffect(() => {
    TweenMax.from(buttonAllBooks, 5, { opacity: 0 });
    TweenMax.from(bookSVG, 1, { opacity: 0, rotateX: 120, delay: 0.5 });
  }, []);
  return (
    <Container maxWidth="sm" className={classes.container}>
      <Typography className={classes.title} variant="h5">
        Boas vindas à nossa Coletânia de Livros
      </Typography>
      <Typography variant="subtitle1">Fernando {'&'} Henrique</Typography>
      <Typography variant="subtitle2">Baêta Leite</Typography>

      <img ref={(element) => (bookSVG = element)} src={logoSVG} alt="myBook" width="180px" />

      <Button
        variant="contained"
        color="primary"
        ref={(element) => (buttonAllBooks = element)}
        onClick={() => history.push('/books')}
      >
        Acessar todos os livros
      </Button>
      <TheFooter />
    </Container>
  );
};

export default withRouter(Home);
