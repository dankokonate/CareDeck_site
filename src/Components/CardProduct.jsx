
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    
    <div className="col-md-5 col-10 mx-auto">
        <h1> <strong>Utilisation de CareDeck</strong></h1>
        <br/>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image='src\images\CareDeck.png'
          title="Nos Scénario"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Nos Scénarios
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Ici nous avons deux exemples de scénarios:
            <li><strong>Scénario 1</strong></li>
            <li><strong>Scénario 2</strong></li>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className='action'>
        <a href="https://youtu.be/TW5G1pbQfr0" target="_blank" style={{textDecoration:"none"}}>
        <Button variant="contained" size="small" color="primary">
          Voir scénario 1
        </Button>
        </a >
        <a href="https://youtu.be/zmO-RpBYLa8" target="_blank" style={{textDecoration:"none"}}>
        <Button variant="contained" size="small" color="primary">
          Voir scénario 2
        </Button>
        </a >
      </CardActions>
    </Card>
    </div>
  );
}