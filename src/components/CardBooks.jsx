import React from 'react';

import { Card, CardHeader, CardMedia, CardActions, Button } from '@material-ui/core';

import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  cardActions: {
    margin: 8,
    justifyContent: 'space-around',
  },
  card: {
    marginBottom: 10,
    backgroundImage: 'linear-gradient(72deg, #ddf4, #ffffff, #fa3, #ffffff)',
  },
});

const CardBooks = (props) => {
  const { id, nome, img, autor } = props;
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardHeader title={nome} subheader={autor} />
      <CardMedia style={{ height: '190px' }} image={img} />

      <CardActions className={classes.cardActions}>
        <Button size="small" variant="contained" color="primary">
          Editar
        </Button>
        <Button size="small" variant="outlined" color="secondary">
          Deletar
        </Button>
      </CardActions>
    </Card>
  );
};

export default CardBooks;
