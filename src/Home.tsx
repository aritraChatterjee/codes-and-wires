import React from 'react';
import { Container, Typography } from '@material-ui/core';
import ContainerWithGutter from './ContainerWithGutter';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    skills: {
        marginTop: 20
    }
}));

const Home = (props: any) => {
    const classes = useStyles();
    return (
        <Container fixed>
            <ContainerWithGutter>
                <Typography variant="h3" color="primary" align="center">
                    Nurturing any idea?
                    <br />
                    Let's shape it together.
                </Typography>
                <Typography
                    variant="h5"
                    color="secondary"
                    align="center"
                    className={classes.skills}>
                    Enterprise Java - Web - Cloud Native
                </Typography>
            </ContainerWithGutter>
        </Container>
    );
};

export default Home;
