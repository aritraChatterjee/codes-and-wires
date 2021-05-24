import React from 'react';
import { Container, makeStyles, Typography } from '@material-ui/core';
import ContainerWithGutter from './ContainerWithGutter';

const useStyles = makeStyles((theme) => ({
    starPrimary: {
        borderColor: theme.palette.primary.main,
        margin: '10px auto 30px',
        padding: 0,
        maxWidth: '200px',
        border: 0,
        borderTop: 'solid 5px',
        textAlign: 'center'
    },
    uppercase: {
        textTransform: 'uppercase',
        fontWeight: 700,
        fontSize: '2.4em'
    },
    aboutText: {
        fontSize: 16
    },
    standOutText: {
        color: theme.palette.secondary.main
    }
}));

const About = (props: any) => {
    const classes = useStyles();
    return (
        <Container fixed>
            <ContainerWithGutter>
                <Typography
                    color="primary"
                    align="center"
                    className={classes.uppercase}>
                    About
                </Typography>
                <hr className={classes.starPrimary} />
                <Typography variant="body1" align="center">
                    Hi, I am{' '}
                    <span className={classes.standOutText}>
                        <b>Aritra Chatterjee</b>
                    </span>
                    , the maintainer of <b>codes & wires</b>.
                    <br />
                    <br />I am a{' '}
                    <span className={classes.standOutText}>
                        <b>Software Architect</b>
                    </span>{' '}
                    and{' '}
                    <span className={classes.standOutText}>
                        <b>Full Stack Software Engineer</b>
                    </span>{' '}
                    with{' '}
                    <span className={classes.standOutText}>
                        <b>over 10 years of experience</b>
                    </span>{' '}
                    and based out of the Netherlands.
                    <br />
                    <br /> I studied{' '}
                    <span className={classes.standOutText}>
                        <b>B.Sc in Physics</b>
                    </span>{' '}
                    and{' '}
                    <span className={classes.standOutText}>
                        <b>B.Tech in Computer Science & Engineering</b>
                    </span>{' '}
                    from the University of Calcutta, India.
                    <br /> <br />I am a serious amateur Photographer and love
                    listening to music and reading books.
                </Typography>
            </ContainerWithGutter>
        </Container>
    );
};

export default About;
