
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import imggs from '../images/CareDeck.png'
import { Box } from '@material-ui/core';
import { Container } from '@material-ui/core';
import { Column, Row } from './FooterStyle';

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
        <div style={{ margin: 'auto', display: 'block' }}>
            <Box>
                <Container>
                    <Row>
                        <Column>
                            <h3> <strong>Scénario_1</strong></h3>
                            <Card className={classes.root}>
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.media}
                                        image="https://www.ontasklearning.org/wp-content/uploads/scenario-1d.jpg"
                                        title="Scénario_1"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h3">
                                            Scénario_1
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            Vidéo d'explication du scénario_1:
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions className='action'>
                                    <a href="https://youtu.be/TW5G1pbQfr0" target="_blank" style={{ textDecoration: "none" }}>
                                        <Button variant="contained" size="small" color="primary">
                                            Voir scénario 1
                                        </Button>
                                    </a >
                                </CardActions>
                            </Card>
                        </Column>  <Column>
                            <h3> <strong>Scénarios_2</strong></h3>
                            <Card className={classes.root}>
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.media}
                                        image="https://www.ontasklearning.org/wp-content/uploads/scenario-2d.jpg"
                                        title="Nos Scénario"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h3">
                                            Scénarios_2
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            Vidéo d'explication du scénario_2:
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions className='action'>
                                    <a href="https://youtu.be/zmO-RpBYLa8" target="_blank" style={{ textDecoration: "none", marginRight: 30 }}>
                                        <Button variant="contained" size="small" color="primary">
                                            Voir scénario 2
                                        </Button>
                                    </a >
                                </CardActions>
                            </Card>
                        </Column>
                        <Column>
                            <h3> <strong>Demo de CareDeck</strong></h3>
                            <Card className={classes.root}>
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.media}
                                        image={imggs}
                                        title="Demo"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h3">
                                            Demo de CareDeck
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            Demo du boitier CarDeck
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions className='action'>
                                    <a href="https://www.youtube.com/watch?v=WNWBQJPxFs0&ab_channel=Gr%C3%A9goireLichou" target="_blank" style={{ textDecoration: "none" }}>
                                        <Button variant="contained" size="small" color="primary">
                                            Démo
                                        </Button>
                                    </a>
                                </CardActions>
                            </Card>
                        </Column>
                    </Row>
                </Container>
            </Box>
        </div>
    );
}